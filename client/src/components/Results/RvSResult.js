import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import * as actions from '../../Actions/index'

 class RevolverOrSemi extends Component {
  render() {
    console.log(this.props)
    let {result} = this.props
    if(result ==="Semi"){result = "Semi-Automatic"}
    return (
      <div className="text-center">
        <h1>{result}</h1>
        <p>Based on your choices, it seems like a {result} is the best choice for you!</p>
        <p>(Maybe insert some information about the type, why they are a good fit, etc)</p>
        <p>Now, lets find which {result} suits you best</p>
        <Link to={`/${result}`} >
        <button className="btn btn-start" onClick={() => this.props.resetQ()}>Let's go!</button>
        </Link>
      </div>
    )
  }
}
export default connect(
  null,
  actions
)(RevolverOrSemi);



