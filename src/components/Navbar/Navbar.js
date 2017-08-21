import React, { Component } from 'react';
import './navbar.css'

export default class Navbar extends Component {
    render() {

        return (
            <div className="Navbar">
                <ul className="nav">
                    <li className="nav-item"><a href="#Portfolio">Portfolio</a></li>
                    <li className="nav-item"><a href="#Contact">Contact</a></li>
                    <li className="nav-item"><a>Resume</a></li>
                </ul>
            </div>
        )
    }
}
