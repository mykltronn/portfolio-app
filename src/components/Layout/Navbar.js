import React from 'react'
import './layout.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo"></div>
      <ul className="nav">
        <li className="nav-item"><a href="#Portfolio">Portfolio</a></li>
        <li className="nav-item"><a href="#Contact">Contact</a></li>
        <li className="nav-item"><a>Resume</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
