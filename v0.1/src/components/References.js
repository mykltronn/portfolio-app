import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

export default class References extends Component {
    render() {
        return(
            <div className="main-box">
                <Sidebar text="References" />
                <div className="content-box">
                    <h1>Content</h1>
                </div>
            </div>
        )
    }
}
