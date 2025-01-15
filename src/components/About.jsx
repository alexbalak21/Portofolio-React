import React from "react"
import aboutIcon from "../assets/aboutIcon.jpg"
import cursorIcon from "../assets/cursorIcon.png"
import serverIcon from "../assets/serverIcon.png"

function About() {
  return (
    <section className="about__container" id="about">
      <h2 className="about__title">About</h2>
      <div className="about__content">
        <img src={aboutIcon} className="about__img" alt="about icon" />
        <ul className="about__items">
          <li className="about__item">
            <img src={serverIcon} alt="server icon" />
            <div>
              <h3>Back-end Developer</h3>
              <p>
                I have experience in Java using Spring and Python using Django
                and Flask I develop fast and optimized backend systems and APIs
              </p>
            </div>
          </li>
          <li className="about__item">
            <img src={cursorIcon} alt="cursor icon" />
            <div>
              <h3>Front-end Developer</h3>
              <p>
                I'm currently learning React, and TypeScript, I know HTML and
                CSS. I'm building responsive and interactive user interfaces.
              </p>
            </div>
          </li>
          <li className="about__item">
            <img src={cursorIcon} alt="cursor icon" />
            <div>
              <h3>UI Designer</h3>
              <p>I have experience in Figma and Adobe XD</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
