import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles(theme => ({
  submitButton: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  },
  paper:{
    padding:20,
    marginTop:16
  }
}));
const useMobile = makeStyles(theme => ({
  submitButton: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  },
  paper: {
    padding: 20,
    position:'relative',
    top:60
  }
}));

export default function ResponseSummary(props) {
    const matches = useMediaQuery("(max-width:450px)");
    const desktop = useStyles();
    const mobile = useMobile();
    let classes = desktop;
    if (matches) {
      classes = mobile;
    }  return (
         <Container>
           <Paper className={classes.paper}>
             <Grid container direction="column">
               <Grid container item direction="column" alignItems="center">
                 <Grid item>
                   <Typography gutterBottom variant="h2">
                     Finished!
                   </Typography>
                 </Grid>
               </Grid>
               <Grid item>
                 <Divider />
                 <Typography variant="h4">
                   Here is a summary of your responses!
                 </Typography>
                 <Typography subtitle variant="h6">
                   Verify your answers and submit below to see your recommendations 
                 </Typography>
                 <List dense>
                   {Object.keys(props.questions).map((questionObjNum, i) => {
                     let resp =
                       props.responses[
                         props.questions[questionObjNum]["category"]
                       ];
                     resp = resp === null ? "Unsure" : resp;
                     return (
                       <ListItem>
                         <ListItemText
                           primary={`${i + 1} - ${
                             props.questions[questionObjNum].text
                           }`}
                           secondary={`Response:
                        ${resp}`}
                         />
                       </ListItem>
                     );
                   })}
                 </List>
               </Grid>
               <Grid item>
                 <Button
                   onClick={() => props.handleSubmit()}
                   className={classes.submitButton}
                 >
                   Submit Quiz
                 </Button>
               </Grid>
             </Grid>
           </Paper>
         </Container>
       );
}
