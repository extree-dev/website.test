import React from 'react';

interface SkillsProps {
  skills: {
    category: string;
    items: string[];
  }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="skills">
      <h3 className="section-title">Навыки</h3>
      <div className="skills-grid">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <h4 className="skill-category-title">{skillGroup.category}</h4>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;