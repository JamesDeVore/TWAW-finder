import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../Actions";
import RevolverQuestions from './RevolverQuestions'



/*=====================================================
TODO:
make action to get questions
use values to assemble ideal gun
send that ideal gun to back end
=====================================================*/
//this will be used to reset state later
const intialIdealGun = {
  Caliber: null,
  RLHanded: null,
  OnBody:null,
  Smaller:null,
  Budget: null,
  MaxWeight: null,
  HandSize: null,
  ThumbSafety: null,
  GripSafety:null,
  DOA: null,
  Shrouded: null,
  HighVisSights: null,
  Laser: null,
  FrameMaterial: null,
  SnagFree: null
}

class Revolver extends Component {
  constructor(props){
    super(props)
    //state will have an idea gun to send to back end
    this.state = {
      ideal:{
        Caliber: null,
        RLHanded: null,
        OnBody: null,
        Smaller: null,
        Budget: null,
        MaxWeight: null,
        HandSize: null,
        ThumbSafety: null,
        GripSafety: null,
        DOA: null,
        Shrouded: null,
        HighVisSights: null,
        Laser: null,
        FrameMaterial: null,
        SnagFree: null
      }
    }
  }
  componentDidMount = () => {
    this.props.fetchRevolverQuestions()
  }
  respond = (responseObj) => {
    let{category, value} = responseObj
    let choice = {};
    choice[category] = value;
    let oldChoices = { ...this.state.ideal }
    //updates the state with the choice
    let updatedChoices = { ...oldChoices, ...choice }
    this.setState({ideal:updatedChoices})
  }
  findRevolver = () => {
    this.props.sendRevolverResultsAndGetResults(this.state.ideal)
  }
  renderRevolverQuestions = () => {
    if(this.props.questions.length > 1){
      return (
        <RevolverQuestions questions={this.props.questions} respond={this.respond} finish={this.findRevolver} />
      )

    } else {
      return (
        <div>Loading ...</div>
      )
    }
  }
  render() {
    console.log(this.state.ideal)

    return (
      <div className="container">
        <div className="row revolverSection">
          <h2 className="col-12">
            Step 2: Finding the perfect Revolver
      </h2>
          <p className=" col-12 text-center">
            These Series of questions will determine which Revolver is the best fit for you</p>
        </div>
          {this.renderRevolverQuestions()}
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
)(Revolver);
