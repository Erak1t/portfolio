// src/components/Contact.jsx
import "../styles/Contact.css";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 100px 0px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const currentTime = new Date().toLocaleString(); // Відповідає полю `time` в шаблоні

    emailjs
      .send(
        "service_3p5q9gh", // Твій Service ID
        "template_0qxb48m", // Твій Template ID
        {
          name: formData.name, // Збігається з {{name}} в шаблоні
          email: formData.email, // Збігається з {{email}} в шаблоні
          message: formData.message, // Збігається з {{message}} в шаблоні
          time: currentTime, // Збігається з {{time}} в шаблоні
        },
        "puFO6J29l1p7QQcV9" // Твій Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <motion.h3
        className="contact-title"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h3>
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="contact-info">
          <p>Feel free to reach out for collaboration or inquiries!</p>
          <ul>
            <li>
              <strong>Email:</strong>
              <a href="mailto:erik.sodel@gmail.com">erik.sodel@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/erik-sodel-680ab327a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Erik Sodel
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Erak1t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Erak1t
              </a>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
