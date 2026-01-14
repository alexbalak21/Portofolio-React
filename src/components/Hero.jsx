import React from "react";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero__container">
      <div className="hero__content">
        <h1 className="hero__title">Hi I'm Alex</h1>

        <p className="hero__description">
          I'm a full‑stack developer with a strong focus on backend engineering. I build user‑ready
          applications using Java <b>Spring Boot</b>, Python <b>Flask</b>, or PHP <b>Laravel</b> on
          the backend, paired with <b>React</b> and other modern web technologies on the frontend. I
          turn complex requirements into efficient, intuitive, and easy‑to‑use solutions that meet
          my clients’ needs.
        </p>

        <p className="hero__description">
          Outside of development, I spend my time at the gym, hiking, reading tech blogs, or
          exploring new coffee shops.
        </p>

        <a href="mailto:mymail@email.com" className="hero__contactBtn">
          Contact Me
        </a>
      </div>
      <img src={hero} alt="Picture of me" className="hero__img" />
      <div className="hero__topBlur"></div>
      <div className="hero__bottomBlur"></div>
    </section>
  );
}

export default Hero;
