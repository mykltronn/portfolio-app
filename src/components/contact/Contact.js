import React, { Component } from 'react';
import './contact.css'
import EmailDrop from '../Layout/EmailDrop.js';

export default class Contact extends Component {
  constructor() {
    super()

    this.toggleEmail = this.toggleEmail.bind(this);

    this.state = {
      showEmail: false
    }
  }

  toggleEmail () {
    console.log("Contact section's toggleEmail runs");
    this.setState({ showEmail: !this.state.showEmail})
  }

  render () {
    return (
      <div className="Contact"  id="contact">
        <div className="contact-wrap">
          <h1>contact me</h1>
          <ul className="contact-list">
            <li className="contact-item">
              <a href="https://github.com/mykltronn" target="_blank">
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="https://www.linkedin.com/in/m-ashton/" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="email contact-item" onClick={this.toggleEmail}>
              <i className="fa fa-envelope" aria-hidden="true">
                <EmailDrop showEmail={this.state.showEmail} />
              </i>
              <span>email</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
