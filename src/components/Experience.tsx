import React from 'react';

interface ExperienceProps {
  jobs: {
    company: string;
    position: string;
    period: string;
    description: string[];
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => {
  return (
    <section className="experience">
      <h3 className="section-title">Опыт работы</h3>
      <div className="timeline">
        {jobs.map((job, idx) => (
          <div key={idx} className="job">
            <div className="job-header">
              <h4 className="job-title">{job.position}</h4>
              <span className="job-company">{job.company}</span>
              <span className="job-period">{job.period}</span>
            </div>
            <ul className="job-description">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;