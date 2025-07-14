import React from "react";
import "../App.css";
import TypewriterTitle from "./TypeWriterTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section id="about" className="hero-container">
      <div className="hero-card">
        <img
          src="/profile.jpg"
          alt="Srinadh Kesineni"
          className="profile-img"
        />
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
          Software Engineer with experience architecting and implementing
          scalable distributed systems. Demonstrated expertise in building
          resilient microservices using Node.js while maintaining robust
          performance at scale. Proficient in JavaScript, TypeScript, and React,
          with a strong focus on fault-tolerant architecture and system
          optimization. Experienced in DevOps practices including CI/CD
          pipelines, Docker, and container orchestration. Regular competitive
          programmer with a passion for solving complex problems and a
          commitment to continuous learning and growth in tech.
        </p>
        <div className="buttons">
          <button className="blog-btn">See My Blog</button>
          {/* <button className="contact-btn"> */}
          {/* <a href="#contact"> */}
          {/* Get In Touch */}
          {/* </a> */}
          {/* </button> */}
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/srinadhkesineni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com/in/srinadh-kesineni-623958264/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://dev.to/srinadh777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev"></i>
          </a>
          <a
            href="https://medium.com/@srinadhkesineni7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium"></i>
          </a>
          <a href="mailto:srinadhkesineni7@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
