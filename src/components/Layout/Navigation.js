import React, { Component } from 'react'
import './layout.css'
import ContactIcons from './ContactIcons.js'
import NavMenu from './NavMenu.js';

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);

    this.state = { isMenuActive: false }
  }

  handleClick(event) {
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  render () {
    return (
      <div className="Navigation">
        <div className="Navbar">
          <ContactIcons menuActive={this.state.isMenuActive}/>
          <span
            className={"sandwich " + (this.state.isMenuActive ? "sandwich-active" : '')}
            onClick={this.handleClick}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
        <NavMenu menuActive={this.state.isMenuActive} click={this.handleClick}/>
      </div>
    )
  }
}
