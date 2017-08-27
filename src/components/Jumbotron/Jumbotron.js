import React, { Component } from 'react';
import ContactIcons from './ContactIcons.js';
import Navbar from '../Layout/Navbar.js';
import './jumbotron.css'

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="Jumbotron">
        <div className="jumbo-wrap-one">
          <Navbar />
          <div className="jumbo-content">
            <h1>Welcome.</h1>
            <div className="typed-text-div">
              <p id="typed-text">my name is Michael Ashton. I'm a web developer.</p>
            </div>
          </div>
        </div>

        <div className="jumbo-wrap-two">
          <ContactIcons />
          <div className="logo"></div>
        </div>
      </div>
    )
  }
}
