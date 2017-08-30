import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Layout>
  </BrowserRouter>
  , document.getElementById('root'));
