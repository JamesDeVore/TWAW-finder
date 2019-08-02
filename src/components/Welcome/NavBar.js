import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-solid-svg-icons";

  const useStyles = makeStyles(theme => ({
    appBar: {
      backgroundColor: "black",
      color: "white"
    },
    link:{
      color:'white',
      '&:hover':{
        color:'white'
      }
    }
  }));

export default function NavBar() {

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <a
                className="navbar-brand"
                href="https://thewellarmedwoman.com/"
              >
                <img
                  className="logo"
                  alt="Brand"
                  src="https://thewellarmedwoman.com/wp-content/themes/woman/images/logo-waw-242x90.svg"
                />
              </a>
            </Grid>
            <Grid item>
              <Typography variant="h6" justify="center">
                My Gun Finder
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <a
                    className={classes.link}
                    href="https://www.pinterest.com/driftincowgirl/well-armed-woman/"
                  >
                    <i class="fab fa-pinterest" />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    className={classes.link}
                    href="https://www.facebook.com/TheWellArmedWoman"
                  >
                    <i class="fab fa-facebook" />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    className={classes.link}
                    href="https://twitter.com/WellArmedWoman"
                  >
                    <i class="fab fa-twitter" />
                  </a>
                </Grid>
                <Grid item>
                  <a
                    className={classes.link}
                    href="https://www.instagram.com/the_well_armed_woman/"
                  >
                    <i class="fab fa-instagram" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React, { Component } from 'react'
// import Dropdown from './NavBarDropdown'
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="container-fluid">
//           <div className="navbar-header">
//           </div>
//           <div className="navbar-left navbar-text">My Gun Finder</div>
//           <div className="">
//             <Dropdown /></div>

//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar
