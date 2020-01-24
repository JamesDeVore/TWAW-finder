import { hot } from "react-hot-loader/root";
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/Welcome/NavBar'
import Welcome from './components/Welcome/Welcome'
import Questions from './components/Main'
import ReactGA from 'react-ga';


import './App.css';

class App extends Component {


  componentDidMount = () => {
    ReactGA.initialize(process.env.REACT_APP_GA_ID);
    ReactGA.pageview(window.location.pathname);
  }
  render() {

    return (
      <Fragment>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path ="/" render={() => <Redirect to ="/welcome" />} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/questions" component={Questions} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default hot(App);
