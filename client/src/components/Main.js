import React, { Component } from "react";
import questions from "../assets/questions";
import Question from "./Questions/Question";
import Result from "./Results/Results";
import ResponseSummary from "./Questions/ResponseSummary";
import Intro from "./Questions/Intro";
import { makeStyles } from "@material-ui/core/styles";
import QuestionContainer from './Questions/QuestionContainer';
import ResultsContainer from './Results/ResultsContainer'


//material components
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: null,
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
    //first, set the response in the state response object
    let oldState = { ...this.state.responses };
    oldState[category] = answer;
    this.setState({ responses: oldState });

    let { currentQ } = this.state;
    if (currentQ < Object.keys(questions).length - 1) {
      this.setState({ currentQ: (currentQ += 1) });
    } else {
      //handle end of quiz here
      this.setState({ progress: "end" });
    }
  };
  handleSubmit = async () => {
    let results = await fetch("api/responseProcessing", {
      method: "POST",
      body: JSON.stringify(this.state.responses),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(results => results.json());
    console.log(results)
    this.setState({ results });
  };
  goBack = () => {
    this.setState({ currentQ: (this.state.currentQ -= 1) });
  };

  render() {
    switch (this.state.progress) {
      case "before":
        return <Intro beginQuestions={this.beginQuestions} />;
      case "during":
        return <QuestionContainer currentQ={this.state.currentQ} answerQuestion={this.answerQuestion} goBack={this.goBack} />
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
          return <ResultsContainer results={this.state.results} />
        }
    }
  }
}
