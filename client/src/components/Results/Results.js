import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"

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


export default function Results(props) {
  const classes = useStyles()
  console.log(props)
  let{gun} = props
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{gun.GUN}</Typography>
        <Divider />
        <CardMedia
          style={{ height: 200, paddingTop: 0 }}
          title={gun.GUN}
        >
          <img src={gun["Image Links"]} className={classes.image} />
        </CardMedia>
        <List>
          <ListItem>Manufacturer: {gun.Manufacturer}</ListItem>
          <ListItem>Caliber: {gun.caliber}</ListItem>
          <ListItem>MSRP: ${gun.Price}</ListItem>
        </List>
        <Button className={classes.button} href={gun.Link}>View in Store</Button>
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
