import React, { Component } from "react";
import questions from "../assets/questions";
import Question from "./Questions/Question";
import Result from "./Results/Results";
import ResponseSummary from "./Questions/ResponseSummary";
import Intro from "./Questions/Intro";
import { makeStyles } from "@material-ui/core/styles";
import QuestionContainer from "./Questions/QuestionContainer";
import ResultsContainer from "./Results/ResultsContainer";
//utils
import responseProcessing from "../utils/ResponseProcessing";

import Papa from "papaparse";

//material components
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: 0,
      progress: "during",
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
    //first, set the response in the state response object
  
    // a yes on question 4 means they need to skip #5
    let skipValue = 1
    
    if(this.state.currentQ === 3 && answer){
      skipValue = 2
    }

    let oldState = { ...this.state.responses };
    oldState[category] = answer;
    this.setState({ responses: oldState });

    let { currentQ } = this.state;
    if (currentQ < Object.keys(questions).length - 1) {
      this.setState({ currentQ: (currentQ += skipValue) });
    } else {
      //handle end of quiz here
      this.setState({ progress: "end" });
    }
  };
  handleSubmit = async () => {
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
    this.setState({ currentQ: (this.state.currentQ -= 1) });
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
