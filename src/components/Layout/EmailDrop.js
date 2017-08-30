import React, { Component } from 'react';

export default class EmailDrop extends Component {

  copyEmail (event){
    let element = event.target.dataset.copytarget;
    let target = document.querySelector(element);
    let email = target.innerText; // email = "mykl.ashton@gmail.com"
    let tempInput = document.createElement('textarea');
    // create temporary 'textarea'. .select() only grabs text from input or textarea.

    tempInput.innerText = email // assign email to input
    document.body.appendChild(tempInput) // build input with data assigned
    tempInput.select() // run .select() on temp textarea
    document.execCommand('copy') // use copy api to copy selected text
    tempInput.remove() // remove temporary text area
  }

  render () {
    return (
      <div
        className={"EmailDrop " + (this.props.showEmail ? "show-email": '')}
        onClick={this.props.toggleEmail}
        style={this.props.styles ? this.props.styles : null}>
          <span id="email-address">mykl.ashton@gmail.com</span>
          <button
            data-copytarget="#email-address"
            id="copy-button"
            onClick={this.copyEmail.bind(this)}>copy
          </button>
      </div>
    )
  }
}
