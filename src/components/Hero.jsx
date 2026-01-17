import serius from "../assets/avatar/serius.png";
import smile from "../assets/avatar/smile.png";
import javaIcon from "../assets/icons/java.svg";
import springBootIcon from "../assets/icons/spring_boot.svg";
import pythonIcon from "../assets/icons/python.svg";
import flaskIcon from "../assets/icons/flask.svg";
import laravelIcon from "../assets/icons/laravel.svg";
import reactIcon from "../assets/icons/react.svg";
import githubIcon from "../assets/icons/github.svg";
import phpIcon from "../assets/icons/php.svg";
import {useState} from "react"

function Hero() {
  const [isSmiling, setIsSmiling] = useState(false)
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Hi I'm Alex</h1>

        <p className="hero__description">
          I'm a full‑stack developer with a strong focus on backend engineering. I build user‑ready applications using: <br />
          <img src={javaIcon} alt="Java" className="tech-icon" /> Java : <img src={springBootIcon} alt="Spring Boot" className="tech-icon" /> <b>Spring Boot</b>, {" "} 
          <img src={pythonIcon} alt="Python" className="tech-icon" /> Python : <img src={flaskIcon} alt="Flask" className="tech-icon" /> <b>Flask</b>, {" "} 
          <img src={phpIcon} alt="PHP" className="tech-icon" /> PHP : <img src={laravelIcon} alt="Laravel" className="tech-icon" /> <b>Laravel</b>, <br /> 
          <img src={reactIcon} alt="React" className="tech-icon" /> <b>React</b> and {" "} 
          <img src={githubIcon} alt="GitHub" className="tech-icon" /> <b>GitHub</b>. 
          I turn complex requirements into efficient, intuitive, and easy‑to‑use solutions that meet my clients' needs.
        </p>

        <p className="hero__description">
          Outside of development, I spend my time at the gym, hiking or biking, reading sci fi novels, or
          exploring new coffee shops.
        </p>
        <div className="hero__cta-btn-wrapper">
          <a 
          href="mailto:mymail@email.com" 
          className="hero__cta-btn"
          onMouseEnter={() => setIsSmiling(true)}
          onMouseLeave={() => setIsSmiling(false)}
        >
          Contact Me
        </a>
        </div>
      </div>
      <img 
        src={isSmiling ? smile : serius} 
        alt="Picture of me" 
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
