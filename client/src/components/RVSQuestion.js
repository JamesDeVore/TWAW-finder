import React, { Component } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components'

import * as actions from '../Actions/index';

const initialState = {
  currentQ: 0,
  finished: false,
  choices: {
    Preference: "",
    RecoilSensitive: "",
    WillingToClean: "",
    FingerStrengthForDbl: "",
    FiveRoundCapacity: "",
    CarryInPurse: ""
  }  
}

class RVSQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQ: 0,
      finished: false,
      choices: {Preference: "",
      RecoilSensitive: "",
      WillingToClean: "",
      FingerStrengthForDbl: "",
      FiveRoundCapacity: "",
      CarryInPurse: ""
     }  
    }
    console.log(this.props)
  }
  sendRvSResponse = (resObj) => {
    //how the user sends their responses to the questions and cycles through the questions
    let {category, value = ""} = resObj
    let choice = {}
    choice[category] = value;
    let oldChoices = {...this.state.choices}
    //updates the state with the choice
    let updatedChoices = {...oldChoices,...choice}
    this.setState({choices:updatedChoices})
    //updates the state to the next question and rerenders
    let { currentQ } = this.state
    
    if (currentQ < this.props.questions.length - 1) {
      this.setState({ currentQ: currentQ + 1 })
    } else {
      //prevents from trying to read an undefined value and sends the results
      this.setState({ finished: true })
      this.props.sendRvSResponsesAndRecieveAnswer(this.state.choices)   
    }
  }

  renderCurrentQuestion = () => {
      let { currentQ } = this.state
      let { questions } = this.props
      let { question, id, responses, category } = questions[currentQ]
      return (
        <QuestionContainer className="col-8 ">
          <h4 className="question-text text-center">
            {question}
          </h4>
          <div className="row justify-content-around">
            {responses.map(response => {
              let { text, value } = response
              return (

                <button className={`${response}  response btn btn`} onClick={() => this.sendRvSResponse({ id, category, value })}
                >{text}</button>
              )
            })}
          </div>
        </QuestionContainer>
      )
  }
  render() {
    if (!this.state.finished) {
      return (
        <div className="container">
          <div className="row justify-content-center">{this.renderCurrentQuestion()}</div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }

  }
}

const QuestionContainer = styled("div")`
-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`;

function mapStateToProps({ results }) {
  return { results };
}

export default connect(
  null,
  actions
)(RVSQuestion);