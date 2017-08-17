import React, { Component } from 'react';
import Project from './Project.js';
import './portfolio.css'

export default class Portfolio extends Component {
    render() {

        return (
            <div className="Portfolio">
                <div id="div-line"></div>
                    <Project which="1" />
                    <Project which="2" />
                    <Project which="3" />
                    <Project which="4" />
                    <Project which="5" />
                
            </div>
        )
    }
}
