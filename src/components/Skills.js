import { skillsData } from "./SkillsData"; // update path if needed
// import "../Skilss.css";

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <p>Technologies and tools I work with</p>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
