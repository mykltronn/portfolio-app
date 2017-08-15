import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

export default class About extends Component {
    render() {
        return(
            <div className="main-box">
                <Sidebar text="About" />
                <div className="content-box">
                    <h1>Content</h1>
                </div>
            </div>
        )
    }
}
