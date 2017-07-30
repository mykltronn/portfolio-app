import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

export default class Contact extends Component {
    render() {
        return(
            <div className="main-box">
                <Sidebar text="Contact" />
                <div className="content-box">
                    <h1>Content</h1>
                </div>
            </div>
        )
    }
}
