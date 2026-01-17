import aboutIcon from "../assets/aboutIcon.jpg";
import serverIcon from "../assets/serverIcon.png";
import uiIcon from "../assets/uiIcon.png";
import db from "../assets/db.png";

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
                I have experience building backend systems and APIs using Java with Spring, as well
                as Python with Django and Flask. I focus on developing fast, optimized, and
                maintainable server-side solutions.
              </p>
            </div>
          </li>
          <li className="about__item">
            <img src={uiIcon} alt="cursor icon" />
            <div>
              <h3>Front-end Developer</h3>
              <p>
                I work with HTML, CSS, and modern JavaScript, and I build responsive, accessible,
                and interactive user interfaces using React and TypeScript.
              </p>
            </div>
          </li>
          <li className="about__item">
            <img src={db} alt="cursor icon" />
            <div>
              <h3>Database & Security</h3>
              <p>
                I have hands-on experience working with relational and NoSQL databases such as
                MySQL and MongoDB. I also understand core authentication and security
                principles, allowing me to build safe, reliable, and well-structured backend
                systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
