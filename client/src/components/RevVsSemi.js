import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../Actions'
import Revolver from './Results/RevolverResult'
import Semi from './Results/SemiResult'

import RVSQuestion from './RVSQuestion'


export class RevVsSemi extends Component {

  componentDidMount() {
    this.props.fetchRvSQuestions()
  }
  renderQuestionsWithQuestionComponent = () => {
    if(this.props.questions.length > 1){
      return (
        <RVSQuestion questions={this.props.questions} />
      )
    } else {
      return (
        <div>Loading . . .</div>
      )
    }
  }

  renderRvSResult = () => {
    console.log(this.props)
    if(this.props.results.RvS === "Revolver"){
      return <Revolver/>
    } else if(this.props.results.RvS === "Semi"){
      return <Semi />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row intro">
          <h2 className="col-12">
            Step 1: Revolver Vs Semi-Automatic
      </h2>
          <p className=" col-12 text-center">
            These Series of questions will determine which type is best suited for you, a revolver, or semi-automatic</p>
        </div>
        <div className="row justify-content-center">
        {this.renderQuestionsWithQuestionComponent()}
        {this.renderRvSResult()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ results, questions }) {
  return { results, questions };
}

export default connect(
  mapStateToProps,
  actions
)(RevVsSemi);
