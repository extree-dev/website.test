import React from 'react';

interface EducationProps {
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education">
      <h3 className="section-title">Образование</h3>
      <div className="education-grid">
        {education.map((item, idx) => (
          <div key={idx} className="education-item">
            <h4 className="institution">{item.institution}</h4>
            <p className="degree">{item.degree}</p>
            <span className="period">{item.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;