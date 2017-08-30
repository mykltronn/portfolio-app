import React from 'react';
import './contact.css'

const Contact = () => {
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
          <li className="contact-item">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>email</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
