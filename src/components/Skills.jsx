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
        <h3 className="skills-details-title"> What i've Learned</h3>
        <div className="skills-details-list">
          {skillsData.map((skill, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: true,
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // З’явлення зліва/справа
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : index % 2 === 0 ? -50 : 50,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
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
