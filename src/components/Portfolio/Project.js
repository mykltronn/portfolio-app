import React from 'react';

export const Project = (props) => {
  let project = props.project
  if(!project) {
    return (
      <h1 className="loading">Loading Projects</h1>
    )
  }
  return (
    <div className="Project">
      <div className="project-image">
        <a href={project.webLink}><img src={project.image} alt="a screenshot of the project"/></a>
      </div>
      <div className="project-details">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <h3>Built Using</h3>
        <p id="details-lang">{project.languages}</p>
        <ul className="project-links">
          <li>
            <a href={project.webLink} target="_blank" rel="noopener noreferrer">view project</a>
          </li>
          <span>|</span>
          <li>
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
