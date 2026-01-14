import { projects } from "../data"

function Projects() {
  return (
    <section className="projects__container" id="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return (
            <div key={id} className="project-container">
              <img src={project.imageSrc} alt={project.title} className="project-img" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-skills">
                {project.skills.map((skill, id) => {
                  return (
                    <li key={id} className="project-skill">
                      {skill}
                    </li>
                  )
                })}
              </ul>
              <div className="project-links">
                <a href={project.demo} className="project-link">
                  Demo
                </a>
                <a href={project.source} className="project-link">
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
