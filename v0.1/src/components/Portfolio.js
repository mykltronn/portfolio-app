import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

export default class Portfolio extends Component {
    render() {
        return(
            <div className="main-box">
                <Sidebar text="Portfolio" />
                <div className="content-box">
                    <h1>Content</h1>
                </div>
            </div>
        )
    }
}
