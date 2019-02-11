import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar'
import RevVsSemi from './components/RevVsSemi'
import Revolver from './components/Revolver'
import Welcome from './components/Welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path ="/" render={() => <Redirect to ="/welcome" />} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/RevolverOrSemi" component = {RevVsSemi} />
            <Route path="/Revolver" component= {Revolver} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
