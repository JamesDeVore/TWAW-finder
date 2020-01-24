import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from 'react-ga';


const useStyles = makeStyles(theme => ({
  image: {
    height: 200,
    
    margin: "auto"
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
  image: {
    width:'80%',
    margin: "auto"
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


export default function Results(props) {
  const matches = useMediaQuery("(max-width:450px)");
  const desktop = useStyles();
  const mobile = useMobile();
      let classes = desktop;
    if (matches) {
      classes = mobile;
    }
  let{gun} = props
  let storeButton = null
  if(gun.Link){

    storeButton = (
      <Button
        className={classes.button}
        onClick={() => {
              ReactGA.initialize(process.env.REACT_APP_GA_ID);
              ReactGA.event({
                category: "Gun-Finder",
                action: "reviewLink",
                label: JSON.stringify(gun.GUN)
              });
          window.open(gun.Link, "_blank")
        }}
      >
        See Reviews
      </Button>
    );
  }
  switch(gun.caliber.toString()){
    case "9":
      gun.caliber = "9mm";
      break;
    case "22":
      gun.caliber = "22 LR";
      break;
    case "0.22":
      gun.caliber = "22 LR";
      break;
    case "0.38":
      gun.caliber = ".38 Special";
      break;
    case "380":
      gun.caliber = ".380";
      break;
  }
  //TODO format calibers 9 -> 9mm .22LR, .38 Special, .380, .45,.40,
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{gun.GUN}</Typography>
        <Divider />
        <CardMedia
          style={{ height: 200, paddingTop: 0 }}
          title={gun.GUN}
        >
          <img src={gun["Image Links"]} className={classes.image} alt={gun.GUN} />
        </CardMedia>
        <List>
          <ListItem>Manufacturer: {gun.Manufacturer}</ListItem>
          <ListItem>Caliber: {gun.caliber}</ListItem>
          <ListItem>MSRP: ${gun.Price}</ListItem>
        </List>
        {storeButton}
      </CardContent>
    </Card>
  );
}
/*=====================================================
<div className="gunResult">
      <div className="gunTitle">
        <h2></h2>
      </div>
      <div className="gunDetails">
        <img src={gun["Image Links"]} className="gunImage" alt=""/>
        <div className="gunStats">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li>Frame Material: {gun.FrameMaterial}</li>
            <li>Action type: {gun.ActionType}</li>
            <li>Link: <a href="google.com">Link here</a></li>
          </ul>
        </div>
      </div>
    </div>
=====================================================*/
