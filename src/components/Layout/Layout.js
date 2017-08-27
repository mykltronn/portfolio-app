import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './layout.css'

const Layout = (props) => {
  return (
    <div className="Layout">
        <Navbar/>
        {props.children}
    </div>
  )
}

export default Layout;
