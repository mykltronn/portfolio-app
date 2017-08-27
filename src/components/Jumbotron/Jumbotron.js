import React, { Component } from 'react';
import { ContactIcons } from './ContactIcons.js';
import './jumbotron.css'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="Jumbotron">
                <div className="jumbo-background"></div>
                <div className="jumbo-content">
                    <h1>Welcome.</h1>
                    <div className="typed-text-div">
                        <p id="typed-text">my name is Michael Ashton. I'm a web developer.</p>
                    </div>
                    <ContactIcons />
                </div>
            </div>
        )
    }
}
