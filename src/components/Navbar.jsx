// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Закриваємо меню при скролі (залишаємо цю логіку для мобільних)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMenuOpen && currentScrollY > 50) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

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
      className={`navbar ${isMenuOpen ? "open" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} // Завжди видимий
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
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
