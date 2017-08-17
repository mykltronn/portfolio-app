import React, { Component } from 'react';
import '../styles/App.css';
// import children
import Navbar from './Navbar/Navbar.js';
import Jumbotron from './Jumbotron/Jumbotron.js';
import Portfolio from './Portfolio/Portfolio.js'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <Navbar />
          <Jumbotron />
          <Portfolio />
      </div>
    );
  }
}
