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
          I’m an enthusiastic Frontend Developer eager to launch my career, with
          hands-on experience in building responsive and interactive web
          applications using React, JavaScript, and CSS. I’m dedicated to
          crafting clean, user-friendly interfaces with a strong attention to
          detail, ensuring seamless and engaging digital experiences. My focus
          lies in writing well-structured, maintainable code while prioritizing
          responsive design to ensure consistency across devices. As a proactive
          learner, I’m passionate about embracing new challenges, continuously
          improving my skills, and delivering intuitive, visually appealing
          solutions. I thrive in collaborative environments and am excited to
          contribute to a team, bringing creative ideas to life while growing as
          a developer in my first professional role.
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
