import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/contact/Contact.js';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Jumbotron}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Layout>
  </BrowserRouter>
  , document.getElementById('root'));
