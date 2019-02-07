import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default class Revolver extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Revolver</h1>
        <p>Based on your choices, it seems like a revolver is the best choice for you!</p>
        <p>(Maybe insert some information about revolvers, why they are a good fit, etc)</p>
        <p>Now, lets find which revolver suits you best</p>
        <Link to='/revolver' >
        <button className="btn btn-start">Let's go!</button>
        </Link>
      </div>
    )
  }
}



