import React, { Component } from 'react';
import './contact.css'
import EmailDrop from '../Layout/EmailDrop.js';

export default class Contact extends Component {
  constructor() {
    super()

    this.toggleEmail = this.toggleEmail.bind(this);

    this.state = {
      showEmail: false,
      styleChange: false
    }
  }

  toggleEmail () {
    console.log("Contact section's toggleEmail runs");
    this.setState({
      showEmail: !this.state.showEmail,
      styleChange: !this.state.styleChange
    })
  }

  render () {
    let styles = {}
    if (this.state.styleChange) {
      styles = {
        position: "absolute",
        top: "auto",
        bottom: 25,
        left: 70
      }
    }

    return (
      <div className="Contact"  id="contact">
        <div className="contact-wrap">
          <h1>contact me</h1>
          <ul className="contact-list">
            <li className="contact-item">
              <a href="https://github.com/mykltronn" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li className="contact-item">
              <a href="https://www.linkedin.com/in/m-ashton/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="email contact-item" onClick={this.toggleEmail}>
              <i className="fa fa-envelope" aria-hidden="true">
                <EmailDrop styles={styles} showEmail={this.state.showEmail} />
              </i>
              <span>email</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
