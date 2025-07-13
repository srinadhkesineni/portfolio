import React from "react";
import "./App.css";
import "./Skills.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";

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
            <a href="#experience">Education</a>
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
            <span className="slider">
              <span>🌙</span>
              <span>☀️</span>
            </span>
          </label>
        </div>
      </header>

      <Hero />

      <Skills />
    </>
  );
}
