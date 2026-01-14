import React from "react"
import { languages, frameworks, technologies } from "../data/skills"

function Skills() {
  return (
    <section className="skills__container" id="skills">
      <h2 className="skills__title">Skills</h2>
      
      <div className="skills__section">
        <h3 className="skills__subtitle">Languages</h3>
        <div className="skills__content">
          {languages.map((skill, id) => {
            return (
              <div className="skills__skill" key={id}>
                <div className="skills__skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="skills__section">
        <h3 className="skills__subtitle">Frameworks</h3>
        <div className="skills__content">
          {frameworks.map((skill, id) => {
            return (
              <div className="skills__skill" key={id}>
                <div className="skills__skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="skills__section">
        <h3 className="skills__subtitle">Technologies</h3>
        <div className="skills__content">
          {technologies.map((skill, id) => {
            return (
              <div className="skills__skill" key={id}>
                <div className="skills__skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      
    </section>
  )
}

export default Skills