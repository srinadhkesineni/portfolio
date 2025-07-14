import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GITHUB_USERNAME = "srinadhkesineni"; 

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        const nonForked = data.filter((repo) => !repo.fork);
        const sorted = nonForked.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(sorted);
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, 10));
  };

  const placeholders = Array.from({ length: 6 }, (_, i) => (
    <div key={i} className="project-card placeholder-card">
      <div className="skeleton title"></div>
      <div className="skeleton line"></div>
      <div className="skeleton line short"></div>
      <div className="skeleton tags"></div>
    </div>
  ));

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p>My open source projects and contributions</p>

      <div className="projects-grid">
        {loading
          ? placeholders
          : projects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => window.open(project.html_url, "_blank")}
              >
                <div className="card-header">
                  <h3>{project.name}</h3>
                  <FontAwesomeIcon icon={faGithub} className="github-icon" />
                </div>
                <p className="project-desc">
                  {project.description || "No description provided."}
                </p>
                <div className="tags">
                  {project.language && <span className="tag">{project.language}</span>}
                  {project.topics?.map((topic) => (
                    <span key={topic} className="tag">{topic}</span>
                  ))}
                </div>
                <div className="stats">
                  <span><FontAwesomeIcon icon={faStar} /> {project.stargazers_count}</span>
                  <span><FontAwesomeIcon icon={faCodeFork} /> {project.forks_count}</span>
                </div>
              </div>
            ))}
      </div>

      {!loading && visibleCount < 10 && (
        <button className="load-more" onClick={showMore}>Show More</button>
      )}
    </section>
  );
};

export default ProjectsSection;
