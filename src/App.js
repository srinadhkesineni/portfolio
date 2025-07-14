import React from "react";
import "./App.css";
import "./Skills.css";
import "./Education.css";
import "./Projects.css";
import "./ThemeToggle.css";
import "./ContactSection.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import EducationSection from "./components/EducationSection";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <h1>Srinadh </h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#blog">Blog</a>
          </nav>
        </div>
        <div className="toggle-icon">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={!isDark}
              onChange={() => setIsDark(!isDark)}
            />
            {/* <span className="slider">
              <ThemeToggle />
            </span> */}
          </label>
        </div>
      </header>

      <Hero />

      <Skills />
      <EducationSection />
      <Projects />
      <ContactSection />

      <footer className="footer">
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
        <div className="copyright">© 2025 Srinadh</div>
      </footer>
    </>
  );
}
