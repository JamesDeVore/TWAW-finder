import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";



export default class SelectButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCals: []
    };
  }
  handleClick = value => {
    let { selectedCals } = this.state;
    let found = selectedCals.find(cal => value === cal);
    if (!found) {
      //not selected yet
      if (value === "Unsure") {
        //de select all but unsure
        this.setState({ selectedCals: ["Unsure"] });
      } else if (selectedCals.find(cal => cal === "Unsure")) {
        this.setState({ selectedCals: [value] });
      } else {
        this.setState({ selectedCals: selectedCals.concat(value) });
      }
    } else {
      this.setState({
        selectedCals: selectedCals.filter(cal => cal !== value)
      });
    }
  };
  renderSelects = () => {
    let {
      question: { answers }
    } = this.props;
    return answers.map(answer => {
      return (
        <Grid item xs={3}>
        <label className="caliberLabel">
          {answer.text}
          <input
            type="checkbox"
            className="caliberCheck"
            value={answer.value}
            onChange={() => this.handleClick(answer.value)}
            checked={this.state.selectedCals.find(cal => cal === answer.value)}
          />
          <span className="checkmark" />{" "}
        </label>
        </Grid>
      );
    });
  };
  render() {
    return (
      <Grid container className="radioDiv">
        {this.renderSelects()}
        <Grid item xs={3} />
        <Grid item xs={3} />

        <br />
        <Button
          className="btn responseBtn"
          onClick={() => {
            this.props.answer(
              this.state.selectedCals,
              this.props.question.category
            );
          }}
        >
          Accept
        </Button>
      </Grid>
    );
  }
}
