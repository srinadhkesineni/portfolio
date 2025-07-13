import React from "react";
import "../App.css";
import TypewriterTitle from "./TypeWriterTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-card">
        <img src="/profile.jpg" alt="Ariful Alam" className="profile-img" />
        <h2>Srinadh Kesineni</h2>
        <div className="title-location">
          <div className="title">
            <span className="prompt">&gt;_</span>
            <TypewriterTitle />
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />{" "}
            Ongole, India
          </div>
        </div>

        <p className="description">
          Senior Software Engineer with over 6 years of experience architecting
          and implementing scalable distributed systems. Demonstrated expertise
          in building resilient microservices using Node.js, while maintaining
          robust performance at scale. Proficient in JavaScript, TypeScript,
          NestJS, and React, with a strong focus on designing fault-tolerant
          architectures and optimizing system performance.
        </p>
        <div className="buttons">
          <button className="blog-btn">See My Blog</button>
          <button className="contact-btn">Get In Touch</button>
        </div>
        <div className="social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-dev"></i>
          <i className="fab fa-medium"></i>
          <i className="fas fa-envelope"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
