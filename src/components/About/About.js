import React from 'react';
import Blurb from './Blurb.js'
import Skillz from './Skillz.js';
// import icons from '../../img/svg-icons.js';
import './about.css';

const About = () => {
  return (
    <div className="About" id="about">
      <h1>Hello!</h1>
      <Blurb />
      <Skillz />
    </div>
  )
}

export default About;
