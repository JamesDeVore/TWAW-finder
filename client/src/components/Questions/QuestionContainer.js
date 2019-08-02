import React from "react";
import Question from "./Question";
import questions from "../../assets/questions";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"

export default function QuestionContainer(props) {
  const useStyles = makeStyles(theme => ({
    paper: {
      padding: 22,
      minHeight:'80vh'
    },
    root: {
      marginTop: 24
    },
    backButton: {
      textDecoration: "none",
      padding: 8,
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "gray"
      }
    },
    questionArea:{
      minHeight:"75vh"
    }
  }));

  let currentQuestion = questions[props.currentQ];
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper>
        <Grid container direction="column" justify='space-between' className={classes.paper}>
          <Grid item xs={12} className={classes.questionArea}>
            <Question
              question={currentQuestion}
              answer={props.answerQuestion}
              number={props.currentQ}
            />
          </Grid>

          {props.currentQ > 0 ? (
            <Grid item>
              <Button
                className={classes.backButton}
                onClick={() => props.goBack()}
              >
                Back
              </Button>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Paper>
    </Container>
  );
}
