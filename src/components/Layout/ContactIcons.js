import React from 'react';

const ContactIcons = (props) => {
  return (
    <ul className={"ContactIcons " + (props.menuActive ? "icons-active" : '')}>
      <li><a href="https://github.com/mykltronn"><i className="fa fa-github" aria-hidden="true"></i></a></li>
      <li><a href="https://www.linkedin.com/in/m-ashton/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
      <li><i className="fa fa-envelope" aria-hidden="true"></i></li>
    </ul>
  )
}

export default ContactIcons;
