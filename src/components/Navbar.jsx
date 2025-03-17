import "../styles/Navbar.css";
import { motion } from "framer-motion";
import instagramLogo from "../assets/instagram.svg";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedIn.svg";

function Navbar({ toggleTheme, theme, navVisible }) {
  const handleNavigator = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }} // Початкова анімація при завантаженні
      animate={{
        opacity: navVisible ? 1 : 0, // Управління видимістю через opacity
        y: navVisible ? 0 : -50, // Зсув вгору при приховуванні
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={(e) => handleNavigator(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavigator(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavigator(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="contact" onClick={(e) => handleNavigator(e, "contact")}>
            Contact
          </a>
        </li>
        <li>
          <a href="#info" onClick={(e) => handleNavigator(e, "info")}>
            Info
          </a>
        </li>
      </ul>
      <div className="social-links">
        <label className="switch" aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
        <a
          href="https://www.linkedin.com/in/erik-sodel-680ab327a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn" className="social-icons" />
        </a>
        <a
          href="https://www.instagram.com/sodel.erik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" className="social-icons" />
        </a>
        <a
          href="https://github.com/Erak1t"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="Github" className="social-icons" />
        </a>
      </div>
    </motion.nav>
  );
}
export default Navbar;
