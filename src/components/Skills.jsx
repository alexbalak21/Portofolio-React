import { languages, frameworks, technologies } from "../data/skills"

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      
      <div className="skills__section">
        <h3 className="skills__category-title">Languages</h3>
        <div className="skills__grid">
          {languages.map((skill, id) => {
            return (
              <div className="skills__item" key={id}>
                <div className="skills__icon-wrapper">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="skills__section">
        <h3 className="skills__category-title">Frameworks</h3>
        <div className="skills__grid">
          {frameworks.map((skill, id) => {
            return (
              <div className="skills__item" key={id}>
                <div className="skills__icon-wrapper">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="skills__section">
        <h3 className="skills__category-title">Technologies</h3>
        <div className="skills__grid">
          {technologies.map((skill, id) => {
            return (
              <div className="skills__item" key={id}>
                <div className="skills__icon-wrapper">
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