import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout.js';
import Home from './components/Home'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js';
import References from './components/References.js';
import Contact from './components/Contact.js';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/references" component={References} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));
