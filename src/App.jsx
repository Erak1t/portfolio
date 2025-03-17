import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./styles/global.css";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Info from "./components/Info";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [navVisible, setNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  let lastScrollY = 0;

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMobile) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setNavVisible(false);
        } else {
          setNavVisible(true);
        }
      }
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        if (!newIsMobile) {
          setNavVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme, isMobile]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} navVisible={navVisible} />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="info">
        <Info />
      </section>
    </div>
  );
}

export default App;
