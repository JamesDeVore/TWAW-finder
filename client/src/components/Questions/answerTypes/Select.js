import React, { Component, } from 'react'

export default class SelectButtons extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCals:[]
    }
  }
  handleClick = (value) => {
    let found = this.state.selectedCals.find(cal => value === cal)
    if(!found){
      //not selected yet
      this.setState({selectedCals:this.state.selectedCals.concat(value)})
    } else {
      this.setState({selectedCals:this.state.selectedCals.filter(cal => cal !== value)})
    }
  }
  renderSelects = () => {
    let {question:{answers}} = this.props
    console.log(answers)
    return answers.map(answer => {
      return (
        <label className="caliberLabel">{answer.text} 
          <input type="checkbox" className="caliberCheck" 
          value={answer.value}
          onChange={() => this.handleClick(answer.value)} 
          checked={this.state.selectedCals.find(cal => cal === answer.value)}
          /><span className="checkmark"></span> </label>
      )
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="radioDiv">
       {this.renderSelects()}<br/>
       <button onClick={() => {
         document
           .querySelector(".questionBox-before")
           .classList.remove("questionBox-active");
           this.props.answer(this.state.selectedCals,this.props.question.category)
       }}>Accept</button>
      </div>
    )
  }
}

