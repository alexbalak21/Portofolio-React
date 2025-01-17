import React from "react"
import emailIcon from "../assets/emailIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"

const Contact = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className="contact__links">
        <li className="contact__link">
          <img src={emailIcon} alt="email icon" />
          <a href="mailto:email@mail.com">email@mail.com</a>
        </li>
        <li className="contact__link">
          <img src={linkedinIcon} alt="email icon" />
          <a href="linkedin.com">linkedin.com/alex</a>
        </li>
        <li className="contact__link">
          <img src={githubIcon} alt="github icon" />
          <a href="github.com/alex">github.com/alex</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
