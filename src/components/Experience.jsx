import React from "react"
import { skills, history } from "../data/index"

function Experience() {
  return (
    <section className="experience__container" id="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__content">
        <div className="experience__skills">
          {skills.map((skill, id) => {
            return (
              <div className="experience__skill" key={id}>
                <div className="experience__skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
        <ul className="experience__history">
          {history.map((historyItem, id) => {})}
        </ul>
      </div>
    </section>
  )
}

export default Experience
