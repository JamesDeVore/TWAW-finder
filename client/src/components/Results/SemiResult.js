import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Semi extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Semi-Automatic</h1>
        <p>Based on your choices, it seems like a Semi-Automatic is the best choice for you!</p>
        <p>(Maybe insert some information about Semi-Automatics, why they are a good fit, etc)</p>
        <p>Now, lets find which Semi-Automatic suits you best</p>
        <Link to='/semi' >
          <button className="btn btn-start">Let's go!</button>
        </Link>
      </div>
    )
  }
}