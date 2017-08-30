import React, { Component } from 'react';

export default class NavMenu extends Component {

  render () {
    return (
      <div
        className={"nav-menu-wrap " + (this.props.menuActive ? "nav-menu-active" : '')}>
        <ul className="menu">
          <li onClick={this.props.click} >
            <a id="menu-item-1" href="#home">home</a>
          </li>
          <li onClick={this.props.click}>
            <a id="menu-item-2" href="#about">about me</a>
          </li>
          <li onClick={this.props.click}>
            <a id="menu-item-3" href="#portfolio">portfolio</a>
          </li>
          <li onClick={this.props.click}>
            <a id="menu-item-4" href="#contact">contact</a>
          </li>
        </ul>
      </div>
    )
  }
}
