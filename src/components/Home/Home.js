import React, { Component } from 'react';
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="logo"></div>
        <div className="text-one-wrap">
          <p id="typed-text-one">my name is Michael Ashton</p>
        </div>
        <div className="text-two-wrap">
          <p id="typed-text-two">I'm a web developer.</p>
        </div>
      </div>
    )
  }
}
