import "../styles/Projects.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectsData from "../data/projectsData.json";
import project1Image from "../assets/eventFinder.png";
import project2Image from "../assets/projectImage2.png";
import project3Image from "../assets/projectImage3.png";

const imageMap = {
  "eventFinder.png": project1Image,
  "projectImage2.png": project2Image,
  "projectImage3.png": project3Image,
};

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="projects" id="projects" ref={ref}>
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <div className="project-image">
              <img src={imageMap[project.image]} alt={project.title} />
            </div>
            <div className="project-info">
              <h4>{project.title}</h4>
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.demoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !project.demoLink && e.preventDefault()}
                >
                  {project.demoLink ? "Live Demo" : "Coming Soon"}
                </a>
                <a
                  href={project.repoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !project.repoLink && e.preventDefault()}
                >
                  {project.repoLink ? "View Code" : "Coming Soon"}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
