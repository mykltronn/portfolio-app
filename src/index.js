import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout.js';
import App from './components/App'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={App}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));
