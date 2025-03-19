// src/components/Info.jsx
import "../styles/Info.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import infoData from "../data/infoData.json";

function Info() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="info" id="info" ref={ref}>
      <motion.div
        className="info-content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="info-title">About Me</h3>
        <motion.div
          className="info-bio-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="info-bio">{infoData.bio}</p>
        </motion.div>
        <motion.div
          className="info-education"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h4>Education</h4>
          <p>
            {infoData.education.degree} - {infoData.education.institution}
          </p>
          <ul>
            <li>Specialization: {infoData.education.specialization}</li>
            <li>Discipline: {infoData.education.discipline}</li>
            <li>Profile: {infoData.education.profile}</li>
            <li>Graduated: {infoData.education.graduated}</li>
          </ul>
        </motion.div>
        <motion.div
          className="info-languages"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h4>Languages</h4>
          <ul>
            {infoData.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="info-certificates"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h4>Certificates</h4>
          <ul>
            {infoData.certificates.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  {cert.title}
                </a>{" "}
                - {cert.provider} ({cert.year})
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="info-books"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <h4>Currently Reading</h4>
          <ul>
            {infoData.currentBooks.map((book, index) => (
              <li key={index}>
                {book.title} by {book.author}{" "}
                {book.status && `(${book.status})`}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="info-call-to-action-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <p className="info-call-to-action">
            Interested in working together? Feel free to{" "}
            <a href="#contact">contact me</a> or explore my{" "}
            <a href="#projects">latest projects</a>!
          </p>
        </motion.div>
        <motion.div
          className="info-social-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <div className="info-social">
            <motion.a
              href="https://www.linkedin.com/in/erik-sodel-680ab327a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://github.com/Erak1t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="mailto:erik.sodel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="info-copyright-container"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        >
          <p className="info-copyright">
            © 2025 Erik Sodel. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Info;
