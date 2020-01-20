import React from "react";
import Result from "./Results";
import {  useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: 36,
    padding: 24
  },
  button: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  }
}));
const useMobile = makeStyles(theme => ({
  paper: {
    position: "relative",
    top: "50px",
    padding: 24
  },
  button: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  }
}));

export default function ResultsContainer(props) {
  const matches = useMediaQuery("(max-width:450px)");
  const desktop = useStyles();
  const mobile = useMobile();
  let classes = desktop;
  if (matches) {
    classes = mobile;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let paperContent = null;
  if (props.results.length > 0) {
    paperContent = (
      <Grid container justify="center" alignItems="center" spacing={6}>
        <Grid item xs={matches ? 10 : 8}>
          <Typography variant={matches ? "h3" : "h2"}>Results:</Typography>
          <Divider />
          <Typography variant={matches ? "h4" : "h3"}>
            We found {props.results.length} gun
            {props.results.length > 1 ? "s" : ""} for you
          </Typography>
          <br />
          <Typography subtitle variant="p">
            These results are only recommendations and based on the answers you
            selected in the quiz. The Well Armed Woman Gun Finder database is
            not all-inclusive to every gun model. The Well Armed Woman LLC is
            only supplying a suggested list and only you can determine the right
            gun for yourself. We encourage you to try the suggested models at a
            local shooting range if possible and be sure to conduct additional
            research on your own.
            <Box fontWeight="bold">Please ensure to take a screenshot, write down your results, or bookmark the review pages as your results will not be saved.</Box>
          </Typography>
        </Grid>
        {props.results.map(gun => (
          <Grid item sm={5}>
            <Result gun={gun} />
          </Grid>
        ))}
      </Grid>
    );
  } else if (props.results.length === 0) {
    paperContent = (
      <div>
        <Typography variant="h2">We're sorry</Typography>
        <Typography subtitle vaiant="p">
          Your answers don't fit any gun we have in our database
        </Typography>
        <Divider />
      </div>
    );
  } else {
    paperContent = <div>Loading</div>;
  }
  return (
    <Container>
      <Paper className={classes.paper}>
        {paperContent}
        <br />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Divider />
        </Grid>
        <Button
          className={classes.button}
          onClick={() => window.location.reload()}
        >
          Start Over
        </Button>
      </Paper>
    </Container>
  );
}
