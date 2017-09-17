import React from 'react';
import { skills } from '../../data/projectData.js'

const Skillz = () => {

  let skillz = skills.map( (skill, index) => {
    let subs;
    if(skill.sub) {
      subs = skill.sub.map( (sub, index) => {
        return (
          <li key={index} className="skillz-sub">{sub}</li>
        )
      })
    }
    return (
      <li key={index} className="skillz-list-item">
        {skill.name}
        <ul>
          {subs}
        </ul>
      </li>
    )
  })

  return (
    <div className="Skillz">
      <h2 className="skillz-title">My work includes the use of</h2>
      <ul className="skillz-list">
        {skillz}
        {/* <li className="skillz-list-item">HTML5</li>
        <li className="skillz-list-item">CSS3</li>
        <li className="skillz-list-item">Stylus</li>
        <li className="skillz-list-item">Javascript ES2016</li>
        <li className="skillz-list-item">React</li>
        <li className="skillz-list-item">Redux</li>
        <li className="skillz-list-item">Node.js</li>
        <li className="skillz-list-item">MongoDB</li>
        <li className="skillz-list-item">SQL</li>
        <li className="skillz-list-item">GitHub</li> */}
      </ul>
    </div>
  )
}

export default Skillz;
