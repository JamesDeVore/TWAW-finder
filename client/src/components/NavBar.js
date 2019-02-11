import React, { Component } from 'react'
import {Link, BrowserRouter as Router, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-nav ">
        <a className="navbar-brand" href="https://thewellarmedwoman.com/">
          <img
            src="https://thewellarmedwoman.com/wp-content/themes/woman/images/logo-waw-242x90.svg"
            height="50"
            alt="The well armed woman"
            className="col-xs-1 TWAW-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" />
            <li className="nav-item" />
            <li className="nav-item" />
          </ul>
           <span className="navbar-text">My Gun Finder</span>
        </div>
      </nav>
    );
  }
}

export default NavBar