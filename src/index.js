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
        <Route exact path="/portfolio-app/contact" component={Contact}/>
        <Route exact path="/portfolio-app/about" component={About}/>
        <Route exact path="/portfolio-app/portfolio" component={Portfolio}/>
        <Route exact path="/portfolio-app" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
  , document.getElementById('root'));
