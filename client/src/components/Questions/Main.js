import React, { Component } from "react";
import questions from "../../assets/questions";
import Question from "./Question";

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQ: null,
      progress:'before',
      responses: {
        palmLength: null,
        palmWidth: null,
        triggerFingerLength: null,
        thumbLength: null,
        handedness: null,
        fingerStrength:null,
        handStrength:null,
        armStrength:null,
        budget:null,
        carry:null,
        externalSafety:null,
        laser:null,
        standardLaser:null,
        accessoryRail:null,
        caliber:null,
        purpose:null
      }
    };
  }
  beginQuestions = () => {
    this.setState({ progress: 'during', currentQ:0 });
  };
  answerQuestion = (answer,category) => {
    //first, set the response in the state response object
    let oldState = {...this.state.responses}
    oldState[category] = answer;
    this.setState({responses:oldState})

    let { currentQ } = this.state;
    if (currentQ < Object.keys(questions).length - 1) {
      this.setState({ currentQ: (currentQ += 1) });
    } else {
      //handle end of quiz here
      this.setState({progress:'end' })
    }
  };
  handleSubmit = () => {
    alert("submit :)")
  }
  renderIntro() {
    if (this.state.currentQ === null) {
      return (
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-10 welcome-box">
              <h1>The Quiz:</h1>
              <hr />
              <p className="font-weight-light">
                This quiz will take about 10-15 minutes, and will require you to
                know some hand measurements. Before we begin, make sure you have
                a ruler or some way to measure your hand
              </p>
              <p className="font-weight-light">
                Please refrain from refreshing the page, as you will lose your
                progress and need to start over
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <button
              className="btn btn-start"
              onClick={() => this.beginQuestions()}
            >
              Begin
            </button>
          </div>
        </div>
      );
    }
  }
  renderQuestions = () => {
    let currentQuestion = questions[this.state.currentQ];
    return (
      <div className="container">
        <Question question={currentQuestion} answer={this.answerQuestion} />
      </div>
    );
  };
  renderSubmit = () => {
    return (
      <div className="container">
        <h1>Finished!</h1>
        <button
          className="btn btn-start"
          onClick={() => this.handleSubmit()}
        >
          Submit Quiz
        </button>
      </div>
    );
  }
  render() {
    switch(this.state.progress){
      case 'before':
        return this.renderIntro()
      case 'during':
        return this.renderQuestions()
      case 'end':
        return this.renderSubmit()
    }
  }
}
