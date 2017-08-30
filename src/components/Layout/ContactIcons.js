import React, { Component } from 'react';
import EmailDrop from './EmailDrop.js';

export default class ContactIcons extends Component {
  constructor() {
    super()

    this.toggleEmail = this.toggleEmail.bind(this);

    this.state = {
      showEmail: false
    }
  }

  toggleEmail() {
    this.setState({ showEmail: !this.state.showEmail})
  }
  render () {
    return (
      <ul className={"ContactIcons " + (this.props.menuActive ? "icons-active" : '')}>
        <li>
          <a href="https://github.com/mykltronn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/m-ashton/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i> </a>
        </li>
        <li className="email" onClick={this.toggleEmail}>
          <i className="fa fa-envelope" aria-hidden="true">
            <EmailDrop showEmail={this.state.showEmail} toggleEmail={this.toggleEmail}/>
          </i>
        </li>
      </ul>
    )
  }
}
