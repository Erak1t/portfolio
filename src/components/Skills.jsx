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
  return (
    <div className="skills">
      <section className="worked-with">
        <h3 className="worked-with-title">Technologies</h3>
        <div className="logos">
          {skillsData.map((skill) => (
            <div className="logo" key={skill.name}>
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
              once: true, // Анімація запускається лише раз
              margin: "0px 0px -100px 0px",
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={ref}
                key={skill.name}
                className={`skill-detail-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, y: 20 }} // Спрощуємо анімацію: лише opacity і легкий рух знизу
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.5, // Зменшуємо тривалість
                  ease: "easeOut",
                  delay: index * 0.1, // Збільшуємо затримку між анімаціями
                }}
                style={{ willChange: "opacity, transform" }} // Оптимізація рендерингу
              >
                <div className="skill-detail-logo">
                  <img src={logoMap[skill.logo]} alt={skill.name} />
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
