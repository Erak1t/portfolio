import "../styles/Hero.css";
import profileImage from "../assets/IMG_1256.jpeg";

function Hero() {
  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Erik Sodel</h1>
        <p className="hero-text">
          I’m a passionate Frontend Developer with experience in building
          responsive and interactive web applications using React, JavaScript,
          and CSS. I focus on creating clean, user-friendly interfaces and have
          a strong eye for detail. Always eager to learn and adapt to new
          technologies, I aim to build seamless digital experiences. I have
          hands-on experience with modern development tools like Vite for
          efficient builds, and I’ve integrated interactive elements such as
          maps using Leaflet and APIs like Ticketmaster. My approach emphasizes
          writing clean, maintainable code while ensuring responsive design
          across devices. I’m dedicated to continuous learning, optimizing user
          experiences, and collaborating within agile teams to bring creative
          ideas to life.
        </p>
        <button
          className="hero-button"
          href="#skills"
          onClick={(e) => handleNavigation(e, "skills")}
        >
          Let's get it started &gt;
        </button>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
}
export default Hero;
