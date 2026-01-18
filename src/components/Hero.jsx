import serius from "../assets/avatar/serius.png";
import smile from "../assets/avatar/smile.png";
import javaIcon from "../assets/icons/java.svg";
import springBootIcon from "../assets/icons/spring_boot.svg";
import pythonIcon from "../assets/icons/python.svg";
import flaskIcon from "../assets/icons/flask.svg";
import reactIcon from "../assets/icons/react.svg";
import githubIcon from "../assets/icons/github.svg";
import djangoIcon from "../assets/icons/django.svg";
import typeScriptIcon from "../assets/icons/typescript.svg";
import dockerIcon from "../assets/icons/docker.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from "react"

const HERO_TITLE = "Hi I'm Alex"
const HERO_GREETING = "Hi !"
const HERO_BASE = "Hi"
const TYPING_SPEED_MS = 90
const DELETE_SPEED_MS = 60
const PAUSE_AFTER_GREETING_MS = 600

function Hero() {
  const [isSmiling, setIsSmiling] = useState(false)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [typedTitle, setTypedTitle] = useState("")

  useEffect(() => {
    let isMounted = true

    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const typeSequence = async () => {
      // Type the short greeting "Hi !"
      for (let i = 1; i <= HERO_GREETING.length; i += 1) {
        if (!isMounted) return
        setTypedTitle(HERO_GREETING.slice(0, i))
        await wait(TYPING_SPEED_MS)
      }

      // Brief pause before erasing
      await wait(PAUSE_AFTER_GREETING_MS)

      // Erase back to the base "Hi"
      for (let i = HERO_GREETING.length - 1; i >= HERO_BASE.length; i -= 1) {
        if (!isMounted) return
        setTypedTitle(HERO_GREETING.slice(0, i))
        await wait(DELETE_SPEED_MS)
      }

      // Type the full title from the preserved base
      for (let i = HERO_BASE.length + 1; i <= HERO_TITLE.length; i += 1) {
        if (!isMounted) return
        setTypedTitle(HERO_TITLE.slice(0, i))
        await wait(TYPING_SPEED_MS)
      }
    }

    typeSequence()

    return () => {
      isMounted = false
    }
  }, [])
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          {typedTitle}
          <span className={`hero__title-caret ${typedTitle === HERO_TITLE ? "hero__title-caret--done" : ""}`}>
            |
          </span>
        </h1>

        <p className="hero__description">
          I'm a full‑stack developer with a strong focus on backend engineering. I build user‑ready applications using:
        </p>

        <div className="hero__tech-list">
          <img src={javaIcon} alt="Java" className="tech-icon" /> Java : <b>Spring Boot</b> <img src={springBootIcon} alt="Spring Boot" className="tech-icon" />, <br /> 
          <img src={pythonIcon} alt="Python" className="tech-icon" /> Python : <b>Django</b> <img src={djangoIcon} alt="Django" className="tech-icon" /> & <b>Flask</b> <img src={flaskIcon} alt="Flask" className="tech-icon" />, <br />
          <img src={typeScriptIcon} alt="TypeScript" className="tech-icon" /> Typescript : <b>React</b> <img src={reactIcon} alt="React" className="tech-icon" />, <br />
          <img src={githubIcon} alt="GitHub" className="tech-icon" /> <b>GitHub</b> & <img src={dockerIcon} alt="Docker" className="tech-icon" /><b>Docker</b> to organize and deploy my projects.
        </div>

        <p className="hero__description">
          I turn complex requirements into efficient, intuitive, and easy‑to‑use solutions that meet my clients' needs.
        </p>

        <p className="hero__description">
          Outside of development, I spend my time at the gym, hiking or biking, reading sci fi novels, or
          exploring new coffee shops.
        </p>
        <div className="hero__cta-btn-wrapper">
          <a 
          href="mailto:alex.balak@outlook.com" 
          className="hero__cta-btn"
          onMouseEnter={() => {
            setIsSmiling(true)
            setIsEnvelopeOpen(true)
          }}
          onMouseLeave={() => {
            setIsSmiling(false)
            setIsEnvelopeOpen(false)
          }}
        >
          Contact Me <FontAwesomeIcon icon={isEnvelopeOpen ? faEnvelopeOpen : faEnvelope} />
        </a>
        </div>
      </div>
      <img 
        src={isSmiling ? smile : serius} 
        alt="stylish avatar" 
        className="hero__profile-img"
        onMouseEnter={() => setIsSmiling(true)}
        onMouseLeave={() => setIsSmiling(false)}
      />
      <div className="hero__bg-blur--top"></div>
      <div className="hero__bg-blur--bottom"></div>
    </section>
  );
}

export default Hero;
