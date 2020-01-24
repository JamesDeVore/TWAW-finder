import React, { Component } from "react";
import questions from "../assets/questions";
import ResponseSummary from "./Questions/ResponseSummary";
import Intro from "./Questions/Intro";
import QuestionContainer from "./Questions/QuestionContainer";
import ResultsContainer from "./Results/ResultsContainer";
//utils
import responseProcessing from "../utils/ResponseProcessing";

import Papa from "papaparse";
import ReactGA from "react-ga";


//material components

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 0,
      progress: "before",
      responses: {
        palmLength: null,
        palmWidth: null,
        triggerFingerLength: null,
        thumbLength: null,
        handedness: null,
        fingerStrength: null,
        handStrength: null,
        armStrength: null,
        budget: null,
        carry: null,
        externalSafety: null,
        laser: null,
        standardLaser: null,
        accessoryRail: null,
        caliber: null,
        purpose: null
      },
      results: null
    };
  }
  beginQuestions = () => {
    this.setState({ progress: "during", currentQ: 0 });
  };
  answerQuestion = (answer, category) => {
    window.scrollTo(0,0);
    console.log(answer)

    if(Array.isArray(answer)){
      answer = {value:answer,text:answer}
    }
    //first, set the response in the state response object
    console.log(JSON.stringify(process.env.REACT_APP_GA_ID));
        ReactGA.initialize(process.env.REACT_APP_GA_ID);
        ReactGA.pageview("/test/");

          ReactGA.event({
            category: "Gun-Finder",
            action: category,
            label: JSON.stringify(answer.text)
          });

  
    // a yes on question 4 means they need to skip #5
    let skipValue = 1
    
    if(this.state.currentQ === 3 && answer.value){
      skipValue = 2
    }

    let oldState = { ...this.state.responses };
    oldState[category] = answer.value;
    this.setState({ responses: oldState });

    let { currentQ } = this.state;
    if (currentQ < Object.keys(questions).length - 1) {
      this.setState({ currentQ: (currentQ += skipValue) });
    } else {
      //handle end of quiz here
      this.setState({ progress: "end" });
    }
  };
  trackAnswers = () => {
         // console.log("hi")
    ReactGA.initialize("UA-41718148-1");
    //ReactGA.pageview("/hey/");

    Object.keys(this.state.responses).forEach(response => {
      ReactGA.event({
        category: "Gun-Finder",
        action: response.toString(),
        label: JSON.stringify(this.state.responses[response])
      });
    })
    // ReactGA.event({
    //   category: "category",
    //   action: "action",
    //   label:"label",
    //   value:"value"
    // });
  }
  handleSubmit = async () => {
    this.trackAnswers();
    var csvFilePath = require("../assets/GunData.csv");
    Papa.parse(csvFilePath, {
      download: true,
      complete:async data => {
        //need to create an array of all objects. nested loops ahoy
        let allGunData = [];
        let headersArray = data.data[0];
        for (let num in data.data) {
          if (+num > 1) {
            let thisGun = data.data[num];
            let gunObj = {};
            thisGun.forEach((property, index) => {
              gunObj[headersArray[index]] = property;
            });
            allGunData.push(gunObj);
          }
        }
        let results = await responseProcessing(
          this.state.responses,
          allGunData
        ).then(res => res);
        this.setState({results})
        
      }
    });
  };
  goBack = () => {
    this.setState({ currentQ: (this.state.currentQ) - 1 });
  };

  render() {
    switch (this.state.progress) {
      case "before":
        return <Intro beginQuestions={this.beginQuestions} />;
      case "during":
        return (
          <QuestionContainer
            currentQ={this.state.currentQ}
            answerQuestion={this.answerQuestion}
            goBack={this.goBack}
          />
        );
      case "end":
        if (!this.state.results) {
          return (
            <ResponseSummary
              questions={questions}
              responses={this.state.responses}
              handleSubmit={this.handleSubmit}
            />
          );
        } else {
          return <ResultsContainer results={this.state.results} />;
        }
    }
  }
}
