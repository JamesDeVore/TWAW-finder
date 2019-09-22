import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20
  },
  begin: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  },
  paper:{
    padding:22
  }
}));
const useMobile = makeStyles(theme => ({
  root: {
    marginTop: 0
  },
  begin: {
    textDecoration: "none",
    padding: 14,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  },
  paper: {
    padding: 22,
    position:'fixed',
    top:"10%",
    marginRight:15
  }
}));

export default function Intro(props) {
  const matches = useMediaQuery("(max-width:450px)");
  const desktop = useStyles();
  const mobile = useMobile();
  let classes = desktop;
  if (matches){
   classes = mobile
  } 
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container justify="center" direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              The Quiz:
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography paragraph variant="subtitle1">
              This quiz will take about 10-15 minutes, and will require you to
              know some hand measurements. Before we begin, make sure you have a
              ruler or some way to measure your hand
            </Typography>
            <Divider />
            <Typography paragraph variant="subtitle1">
              Please refrain from refreshing the page, as you will lose your
              progress and need to start over
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Button className={classes.begin} onClick={() => props.beginQuestions()}>Begin</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

/*=====================================================
<div className="row justify-content-center ">
        <div className="col-md-10 welcome-box">
          <h1></h1>
          <hr />
          <p className="font-weight-light">
            This quiz will take about 10-15 minutes, and will require you to
            know some hand measurements. Before we begin, make sure you have a
            ruler or some way to measure your hand
          </p>
          <p className="font-weight-light">
            Please refrain from refreshing the page, as you will lose your
            progress and need to start over
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => props.beginQuestions()}
        >
          Begin
        </button>
      </div>
=====================================================*/
