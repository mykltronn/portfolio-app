import React from 'react';
import Navigation from './Navigation.js';
import './layout.css'

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navigation />
      <div className="content-wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
