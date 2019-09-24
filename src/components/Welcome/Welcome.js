import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

let headerImage = require('../../assets/headerImg.png')


const useStyles = makeStyles(theme => ({
  image: {
    width: "100%",
    height: "auto",
    // border: "1px solid grey",
    borderRadius:5,
    boxShadow:"1px 1px 5px 4px rgba(0,0,0,0.51)",
    marginBottom:16

  },
  overlayContainer: {
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: "40%",
    left: "33%",
    color: "white"
  },
  paper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    marginBottom: 36
  },
  startBtn: {
    textDecoration: "none",
    padding: 8,
    backgroundColor: "#552564",
    color: "white",
    marginBottom: 36,
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  }
}));

const useMobile = makeStyles(theme => ({
  image: {
    width: "100%",
    height: "auto",
    borderRadius: 5,
    boxShadow: "1px 1px 5px 4px rgba(0,0,0,0.51)",
    marginBottom: 16
  },
  overlayContainer: {
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: "40%",
    left: "33%",
    color: "white"
  },
  intro: {
    fontSize: "1.2em"
  },
  paper: {
    position:'relative',
    top:60,
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    overflow:'scroll',
    minHeight:'100%'
  },
  startBtn: {
    textDecoration: "none",
    padding: 14,
    backgroundColor: "#552564",
    color: "white",
    marginBottom: 36,
    "&:hover": {
      backgroundColor: "#a348bf"
    }
  }
}));

export default function Welcome(props) {
  const matches = useMediaQuery("(max-width:450px)");
  const desktop = useStyles();
  const mobile = useMobile();
  let classes = desktop;
  if (matches) {
    classes = mobile;
  }   return (
        <Container>
          <Grid
            container
            justify="center"
            direction="column"
            className={classes.gridRoot}
            alignItems="center"
          >
            <Grid item>
              <Paper className={classes.paper}>
                  <img className={classes.image} src={headerImage} alt="" />
 
                <Grid
                  container
                  justify="center"
                  direction="column"
                  alignItems="center"
                  alignContent="center"
                >

                  <Grid item sm={8}>
                    <Typography
                      variant="subtitle1"
                      paragraph
                      className={classes.intro}
                    >
                      This tool is designed to help you find the gun that is the
                      right fit for you! It's not perfect, and we encourage you
                      conduct your own research on the guns we suggest. However
                      it will give you a starting point. If you have any
                      questions, please don't hesitate to reach out, we are
                      happy to help.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">
                      What this tool is designed to do:
                    </Typography>
                    <hr />
                    <List className={classes.intro}>
                      <ListItem>
                        Help you determine the right gun for your needs
                      </ListItem>
                      <ListItem>
                        Help you think about what properties to look for in your
                        gun.
                      </ListItem>
                    </List>
                    <Typography variant="h4">
                      What this tool is NOT designed to do:
                    </Typography>
                    <hr />
                    <List className={classes.intro}>
                      <ListItem>
                        Be the final say in the guns you can buy
                      </ListItem>
                      <ListItem>
                        Limit you to the guns we show and ONLY the ones we show
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item sm={8}>
                    <Link to="/questions" style={{ textDecoration: "none" }}>
                      <Button className={classes.startBtn}>
                        Let's get started!
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
}

// class Welcome extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div className="welcome-banner">
//         <div className="welcome-image-container">
//           <img className="welcome-image" src="https://thewellarmedwoman.com/wp-content/themes/woman/images/top.jpg" alt="" />
//         </div>
//         <div className="welcome-banner-text ">
//         <h2>The Well Armed Woman</h2>
//             <p>EDUCATE &nbsp; EQUIP &nbsp; EMPOWER</p>
//         </div>
//         </div>

//       <div className="container">
//         <div className="row justify-content-center ">
//         <div className="col-md-10 welcome-box">
//           <h1 >My Gun Finder</h1>
//           <hr/>
//           <p className="font-weight-light"></p>
//            <p className="font-weight-light">What it is:
//             <ul className="list-group">
//              <li className="list-group-item">A series of questions to determine the ideal gun</li>
//              <li className="list-group-item">A guide to help you think about what matters in your gun</li>
//             </ul>
//             <br />
//              What it isnt:
//              <ul className="list-group">
//                <li className="list-group-item">The final say in the gun for you</li>
//                <li className="list-group-item">A comprehensive list of all guns available</li>
//              </ul>
//              </p>
//            <p className="text-center font-weight-light">Please don't hesitate to ask us with any questions you may have while using this tool</p>
//            <div className="contact-info">
//            </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//         <Link to = "/questions">
//         <button className="btn btn-start responseBtn">Let's get started!</button>
//         </Link>
//         </div>
//       </div>
//       </Fragment>
//     );
//   }
// }

// export default Welcome
