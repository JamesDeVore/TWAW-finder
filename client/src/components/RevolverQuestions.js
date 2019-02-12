import React, { Component } from 'react'

export default class RevolverQuestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQ: 0,
      finished: false
    }
  }
  sendResponse = (responseObj) => {
    let { currentQ } = this.state
    if (currentQ < this.props.questions.length - 1) {
      this.props.respond(responseObj);
      this.setState({ currentQ: currentQ + 1 })
    } else {
      //prevents from trying to read an undefined value and sends the results
      this.setState({ finished: true })
      this.props.finish()
    }
  }
  renderCurrentQuestion = () => {
    let { currentQ } = this.state
    let { questions } = this.props
    let { question, id, responses, category } = questions[currentQ]
    return (
      <div className="container ">
      <div className="row">
          <h4 className="question-text text-center col-md-12">{question}</h4>
        </div>
        <div className="row justify-content-center">
          {responses.map(response => {
            let { text, value } = response;
            return (
              <div className=" col-md-2 d-flex justify-content-center response-card">
                <button
                  className={` response btn w-75`}
                  onClick={() =>
                    this.sendResponse({ id, category, value })
                  }
                >
                  {text}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.finished) {
      return (
        <div className="row">
          {this.renderCurrentQuestion()}
        </div>
      )
    } else {
      return (
        <div>results here</div>
      )
    }
  }
}
