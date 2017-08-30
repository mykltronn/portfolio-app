import React, { Component } from 'react';
import Navbar from '../Layout/Navbar.js';
import Blurb from './Blurb.js';
import './jumbotron.css'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotron">
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
