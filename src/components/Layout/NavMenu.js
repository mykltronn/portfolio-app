import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavMenu extends Component {

  render () {
    return (
      <div
        className={"nav-menu-wrap " + (this.props.menuActive ? "nav-menu-active" : '')}>
        <ul className="menu">
          <li onClick={this.props.click} >
            <Link id="menu-item-1" exact to="/">home</Link>
          </li>
          <li onClick={this.props.click}>
            <Link id="menu-item-2" to="/about">about me</Link>
          </li>
          <li onClick={this.props.click}>
            <Link id="menu-item-3" exact to="portfolio">portfolio</Link>
          </li>
          <li onClick={this.props.click}>
            <Link id="menu-item-4" to="contact">contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}
