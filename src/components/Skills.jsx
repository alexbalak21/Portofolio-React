import React from "react"
import { skills } from "../data/index"

function Skills() {
  return (
    <section className="skills__container" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__content">
        {skills.map((skill, id) => {
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
    </section>
  )
}

export default Skills