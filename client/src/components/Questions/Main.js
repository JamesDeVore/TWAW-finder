import React, { Component } from 'react'

export default class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQ: null,

    }
  }
  renderIntro() {
    if (this.state.currentQ === null) {
      return (
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-10 welcome-box">
              <h1 >The Quiz:</h1>
              <hr />
              <p className="font-weight-light">
                This quiz will take about 10-15 minutes, and will require you to know some hand measurements. Before we begin, make sure you have a ruler or some way to measure your hand
              </p>
              <p className="font-weight-light">Please refrain from refreshing the page, as you will lose your progress and need to start over</p>
            </div>
          </div>
          <div className="row justify-content-center">
              <button className="btn btn-start">Begin</button>  
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
  render() {
    return (
      <div>
        {this.renderIntro()}
      </div>
    )
  }
}
