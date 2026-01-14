import React from "react"
import { history } from "../data/index"

function Experience() {
  return (
    <section className="experience__container" id="experience">
      <h2 className="experience__title">Experience</h2>
      <ul className="experience__history">
        {history.map((historyItem, id) => {
          return (
            <li className="experience__historyItem" key={id}>
              <img src={historyItem.imageSrc} alt={historyItem.title} />
              <div className="experience__historyItemDetails">
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
