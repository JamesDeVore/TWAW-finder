import React from 'react'
import Result from './Results'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  paper:{
    marginTop:36
  }
}))
const useMobile = makeStyles(theme => ({
  paper: {
    marginTop:20,
    position:'relative',
    top:'50px'
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
  let paperContent = null
  if (props.results.length > 0) {
    paperContent = (
      <Grid container justify="center" alignItems='center' spacing={6}>
        <Grid item xs={12}>
          <Typography variant={matches ? "h3" : "h2"}>Results:</Typography>
          <Divider />
          <Typography variant={matches ? "h4" : "h3"}>
            We found {props.results.length} gun
            {props.results.length > 1 ? "s" : ""} for you
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
    paperContent =  <div>No results available</div>;
  } else {
    paperContent =  <div>Loading</div>;
  }
  return (
  <Container>
    <Paper className={classes.paper}>
      {paperContent}
    </Paper>
  </Container>)
}
