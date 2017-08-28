import React, { Component } from 'react';
import '../styles/App.css';
// import children
import Layout from './Layout/Layout.js';
import Jumbotron from './Jumbotron/Jumbotron.js';
import Portfolio from './Portfolio/Portfolio.js'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <Jumbotron />
          <Portfolio />
      </div>
    );
  }
}
