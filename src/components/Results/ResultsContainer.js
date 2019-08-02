import React from 'react'
import Result from './Results'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  paper:{
    marginTop:36
  }
}))

export default function ResultsContainer(props) {
  const classes = useStyles()
  let paperContent = null
  if (props.results.length > 0) {
    paperContent = 
    <Grid container justify='center' spacing={6}>
      <Grid item>
        <Typography variant='h2'>
          Here are your results! We found {props.results.length} gun(s)
        </Typography>
      </Grid>
        {props.results.map(gun => (
          <Grid item xs={5}>
            <Result gun={gun} />
          </Grid>
        ))}
        </Grid>
      
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
