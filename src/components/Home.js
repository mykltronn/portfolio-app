import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

export default class Home extends Component {
    render() {
        return (
            <div className="main-box">
                <Sidebar text="Home" />
                <div className="content-box">
                    <h1>Content</h1>
                </div>
            </div>
        );
    }
}
