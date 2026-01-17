import emailIcon from "../assets/emailIcon.png"
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__heading">
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <img src={emailIcon} alt="email icon" />
          <a href="mailto:email@mail.com">email@mail.com</a>
        </li>
        <li className="footer__social-item">
          <img src={linkedinIcon} alt="email icon" />
          <a href="linkedin.com">linkedin.com/alex</a>
        </li>
        <li className="footer__social-item">
          <img src={githubIcon} alt="github icon" />
          <a href="github.com/alex">github.com/alex</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
