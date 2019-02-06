import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import RevVsSemi from './components/RevVsSemi'
import Welcome from './components/Welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/RevolverOrSemi" component = {RevVsSemi} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
