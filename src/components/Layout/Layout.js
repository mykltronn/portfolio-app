import React from 'react';
import Navigation from './Navigation.js';
import './layout.css'

const Layout = (props) => {
  return (
    <div className="Layout">
      <Navigation />
      {props.children}
    </div>
  )
}

export default Layout;
