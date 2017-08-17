import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {
    render() {

        return (
            <div className="Navbar">
                <ul className="nav">
                    <li className="nav-item">Portfolio</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">Resume</li>
                </ul>
            </div>
        )
    }
}
