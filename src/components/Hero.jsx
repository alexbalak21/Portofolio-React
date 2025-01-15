import React from "react"
import hero from "../assets/hero.jpg"

function Hero() {
  return (
    <section className="hero__container">
      <div className="hero__content">
        <h1 className="hero__title">Hi I'm Alex</h1>
        <p className="hero__description">
          I'm back-end developer with 3 years of experience using Python and
          Java. Reach out if you want to know more!
        </p>
        <a href="mailto:mymail@email.com" className="hero__contactBtn">
          Contact Me
        </a>
      </div>
      <img src={hero} alt="Picture of me" className="hero__img" />
      <div className="hero__topBlur"></div>
      <div className="hero__bottomBlur"></div>
    </section>
  )
}

export default Hero
