/*import "../styles/Navbar.css";
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
*/
// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar({ toggleTheme, theme, navVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Відстежуємо скрол і напрямок
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Визначаємо напрямок скролу
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Скрол вниз
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Скрол вгору
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);

      // Закриваємо меню при скролі
      if (isMenuOpen && currentScrollY > 50) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Функція для плавного скролу
  const handleNavigator = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Закриваємо меню після вибору
  };

  // Тогл меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled, isMenuOpen:", isMenuOpen); // Для відладки
  };

  return (
    <motion.nav
      className={`navbar ${isScrolledDown && !isMenuOpen ? "hidden" : ""} ${
        isMenuOpen ? "open" : ""
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: navVisible ? 1 : 0,
        y: navVisible ? 0 : -50,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-content">
        <div className="navbar-logo">Erik Sodel</div>
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
            <a href="#contact" onClick={(e) => handleNavigator(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#info" onClick={(e) => handleNavigator(e, "info")}>
              Info
            </a>
          </li>
        </ul>
        <div className="navbar-right">
          <label className="switch" aria-label="Toggle theme">
            <input
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/erik-sodel-680ab327a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/sodel.erik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Erak1t"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
