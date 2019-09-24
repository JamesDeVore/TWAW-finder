import React from "react";
import Question from "./Question";
import questions from "../../assets/questions";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 22,
    minHeight: "95vh",
  },
  root: {
    marginTop: 20
  },
  backButton: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "gray",
    color: "white",
    "&:hover": {
      backgroundColor: "black"
    }
  },
  questionArea: {
    maxHeight: "75vh"
  }
}));
const useMobile = makeStyles(theme => ({
  paper: {
    padding: 20,
    minHeight: "100%",
    position: "relative",
    top: 75,
    overflow: "scroll"
  },
  root: {
    marginTop: 0
  },
  backButton: {
    textDecoration: "none",
    padding: 6,
    backgroundColor: "grey",
    color: "white",
    position: "relative",
    top: -30,
    "&:hover": {
      backgroundColor: "black"
    }
  },
  paperContent: {
    position: "relative",
    top: "30px"
  },
  questionArea: {
    minHeight: "90vh",
    overflow: "scroll"
  }
}));

export default function QuestionContainer(props) {
  let currentQuestion = questions[props.currentQ];
  const matches = useMediaQuery("(max-width:450px)");
  const desktop = useStyles();
  const mobile = useMobile();
  let classes = desktop;
  if (matches) {
    classes = mobile;
  }
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.paperContent}
        >
          {props.currentQ > 0 ? (
            <Grid item>
              <Button
                className={classes.backButton}
                onClick={() => props.goBack()}
              >
                Back
              </Button>
            </Grid>) 
            : ""}
          <Grid item sm={12} className={classes.questionArea}>
            <Question
              question={currentQuestion}
              answer={props.answerQuestion}
              number={props.currentQ}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
