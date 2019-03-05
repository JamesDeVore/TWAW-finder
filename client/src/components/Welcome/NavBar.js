import React, { Component } from 'react'
import Dropdown from './NavBarDropdown'
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="https://thewellarmedwoman.com/">
              <img className="logo" alt="Brand" src="https://thewellarmedwoman.com/wp-content/themes/woman/images/logo-waw-242x90.svg" />
            </a>
          </div>
          <div className="navbar-left navbar-text">My Gun Finder</div>
          <div className="">
            <Dropdown /></div>
          
        </div>
      </nav>
    );
  }
}

export default NavBar

