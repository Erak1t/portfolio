// src/components/Skills.jsx
import "../styles/Skills.css";
import cssLogo from "../assets/css.svg";
import htmlLogo from "../assets/html.svg";
import javascriptLogo from "../assets/javascript.svg";
import nodejsLogo from "../assets/nodejs.svg";
import reactLogo from "../assets/react.svg";
import apiLogo from "../assets/api.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "../data/skillsData.json";

const logoMap = {
  "html.svg": htmlLogo,
  "css.svg": cssLogo,
  "javascript.svg": javascriptLogo,
  "nodejs.svg": nodejsLogo,
  "react.svg": reactLogo,
  "api.svg": apiLogo,
};

function Skills() {
  // Функція для прокрутки до відповідного skill-detail-item
  const handleLogoClick = (skillName) => {
    const targetElement = document.querySelector(
      `.skill-detail-item .skill-detail-logo img[id="${skillName}"]`
    );
    if (targetElement) {
      // Прокручуємо до батьківського .skill-detail-item
      const parentElement = targetElement.closest(".skill-detail-item");
      if (parentElement) {
        parentElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="skills">
      <section className="worked-with">
        <h3 className="worked-with-title">Technologies</h3>
        <div className="logos">
          {skillsData.map((skill) => (
            <div
              className="logo"
              key={skill.name}
              id={skill.name}
              onClick={() => handleLogoClick(skill.name)} // Додаємо обробник кліку
              style={{ cursor: "pointer" }} // Додаємо курсор для кращої UX
            >
              <img src={logoMap[skill.logo]} alt={skill.name} />
            </div>
          ))}
        </div>
      </section>
      <section className="skills-details-section">
        <h3 className="skills-details-title">What I've Learned</h3>
        <div className="skills-details-list">
          {skillsData.map((skill, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: true,
              margin: "0px 0px -100px 0px",
              threshold: 0.2,
            });

            const isLeft = index % 2 === 0;
            const initialX = isLeft ? -50 : 50;

            return (
              <motion.div
                ref={ref}
                key={skill.name}
                className={`skill-detail-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, x: initialX }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : initialX,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="skill-detail-logo">
                  <img
                    src={logoMap[skill.logo]}
                    alt={skill.name}
                    id={skill.name}
                  />
                </div>
                <div className="skill-detail-info">
                  <h4>{skill.name}</h4>
                  <p className="summary">{skill.summary}</p>
                  <p className="details">{skill.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Skills;
