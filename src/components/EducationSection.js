import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const educationData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    institution: "Aditya Engineering College",
    duration: "2022 - 2026",
    cgpa: "8.7 out of 10",
    department: "Information Technology",
  },
  {
    title: "Intermediate Certificate",
    institution: "Narayana Junior College",
    duration: "2020 - 2022",
    cgpa: "9.2 out of 10",
    department: "Science",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Narayana High School",
    duration: "2015 - 2020",
    cgpa: "10 out of 10",
    department: "Science",
  },
];

const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <p>My academic background and qualifications</p>

      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index}>
            <div
              className={`education-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggle(index)}
            >
              <div className="education-left">
                <FontAwesomeIcon icon={faGraduationCap} className="edu-icon" />
                <div>
                  <div className="edu-title">{item.title}</div>
                  <div className="institution">{item.institution}</div>
                </div>
              </div>

              <div className="education-right">
                <span className="duration">{item.duration}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                />
              </div>
            </div>

            <div
              className={`education-details ${
                activeIndex === index ? "open" : ""
              }`}
            >
              {item.cgpa && (
                <p>
                  <strong>CGPA:</strong> {item.cgpa}
                </p>
              )}
              {item.department && (
                <p>
                  <strong>Department:</strong> {item.department}
                </p>
              )}
            </div>

            {index < educationData.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
