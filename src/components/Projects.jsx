import { projects } from "../data"

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, id) => {
          return (
            <div key={id} className="projects__card">
              <img src={project.imageSrc} alt={project.title} className="projects__card-img" />
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">{project.description}</p>
              <ul className="projects__tech-stack">
                {project.skills.map((skill, id) => {
                  return (
                    <li key={id} className="projects__tech-tag">
                      {skill}
                    </li>
                  )
                })}
              </ul>
              <div className="projects__links">
                <a href={project.demo} className="projects__btn">
                  Demo
                </a>
                <a href={project.source} className="projects__btn">
                  Source
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
