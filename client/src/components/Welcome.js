import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className="welcome-banner">
        <div className="welcome-image-container">
          <img className="welcome-image" src="https://thewellarmedwoman.com/wp-content/themes/woman/images/top.jpg" alt="" />
        </div>
        <div className="welcome-banner-text ">
        <h2>The Well Armed Woman</h2>
            <p>EDUCATE &nbsp; EQUIP &nbsp; EMPOWER</p>
        </div>
        </div>

      <div className="container">  
        <div className="row justify-content-center ">
        <div className="col-md-10 welcome-box">  
          <h1 >My Gun Finder</h1>
          <hr/>
          <p className="font-weight-light">This tool is designed to help you find the gun that is the right fit for you! It's not perfect, and we encourage you conduct your
           own research on the guns we suggest. However it will give you a starting point.</p>
           <p className="font-weight-light">What it is:
            <ul className="list-group">
             <li className="list-group-item">A series of questions to determine the ideal gun</li>
             <li className="list-group-item">A guide to help you think about what matters in your gun</li>
            </ul> 
            <br />
             What it isnt:
             <ul className="list-group">
               <li className="list-group-item">The final say in the gun for you</li>
               <li className="list-group-item">A comprehensive list of all guns available</li>
             </ul>
             </p>
           <p className="text-center font-weight-light">Please don't hesitate to ask us with any questions you may have while using this tool</p>
           <div className="contact-info"> 
           </div>
          </div>
        </div>
        <div className="row justify-content-center">
        <Link to = "/questions">
        <button className="btn btn-start">Let's get started!</button>
        </Link>
        </div>
      </div>
      </Fragment>
    );
  }
}


export default Welcome

