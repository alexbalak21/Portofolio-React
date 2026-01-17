import { history } from "../data/index"

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">Experience</h2>
      <ul className="experience__list">
        {history.map((historyItem, id) => {
          return (
            <li className="experience__card" key={id}>
              <img src={historyItem.imageSrc} alt={historyItem.title} />
              <div className="experience__details">
                <h3>
                  {historyItem.role} at {historyItem.organisation}
                </h3>
                <p>
                  {historyItem.startDate} - {historyItem.endDate}
                </p>
                <ul>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Experience
