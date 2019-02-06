import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <h1 className="col-12 text-center">Welcome!</h1>
          <p className="col-8 text-center">This tool is designed to help you find the gun that is the right fit for you! It's not perfect, and we encourage you conduct your
           own research on the guns we suggest. However It will give you a starting point.</p>
           <p className="col-8 text-center">Please don't hesitate to ask us with any questions you may have while using this tool (Contact info here :)</p>
        </div>
        <div className="row justify-content-center">
        <Link to = "/RevolverOrSemi">
        <button className="btn btn-start">Let's get started!</button>
        </Link>
        </div>
      </div>
    );
  }
}


export default Welcome

