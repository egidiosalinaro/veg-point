import Logo from '../img/logo.png';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Veggie Point logo" />
      <small>Developed by Egidio Salinaro</small>
      <div className="footer-links-container">
        <a
          href="https://linkedin.com/in/egidiosalinaro"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/egidiosalinaro"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare size={25} />
        </a>
      </div>
    </footer>
  );
}
