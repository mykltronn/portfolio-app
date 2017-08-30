import React, { Component } from 'react';
import { Project } from './Project.js';
import projects from '../../data/projectData.js'
import './portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="projects">
          {projects.map(project => {
            return (
              <Project key={project.name} project={project}/>
            )
          })}
        </div>

      </div>
    )
  }
}
