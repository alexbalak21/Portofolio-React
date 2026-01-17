import serius from "../assets/avatar/serius.png";

function Hero() {
  return (
    <section className="hero">
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
          Outside of development, I spend my time at the gym, hiking or biking, reading sci fi novels, or
          exploring new coffee shops.
        </p>

        <a href="mailto:mymail@email.com" className="hero__cta-btn">
          Contact Me
        </a>
      </div>
      <img src={serius} alt="Picture of me" className="hero__profile-img" />
      <div className="hero__bg-blur--top"></div>
      <div className="hero__bg-blur--bottom"></div>
    </section>
  );
}

export default Hero;
