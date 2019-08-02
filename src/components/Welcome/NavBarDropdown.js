import React, { Component } from 'react'
import { FaPhone, FaEnvelope, FaComment } from "react-icons/fa";

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >Contact us! 
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" href="#nogo">
            <FaPhone /> (123)456-7899
          </p>
          <p className="dropdown-item" href="#nogo">
            <FaEnvelope /> email@email
          </p>
          <p className="dropdown-item" href="#nogo">
            <FaComment /> somehow
          </p>
        </div>
      </div>
    );
  }
}

export default Dropdown