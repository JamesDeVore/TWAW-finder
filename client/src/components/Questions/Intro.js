import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider";

export default function Intro(props) {
  return (
    <Container>
      <Paper>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              The Quiz:
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography paragraph variant="subtitle1">
              This quiz will take about 10-15 minutes, and will require you to
              know some hand measurements. Before we begin, make sure you have
              a ruler or some way to measure your hand
            </Typography>
            <Divider />
            <Typography paragraph variant="subtitle1">
              Please refrain from refreshing the page, as you will lose your
              progress and need to start over
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Button
              onClick={() => props.beginQuestions()}
            >
              Begin
            </Button>
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
