import React from 'react';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className="about">
      <h3 className="section-title">О себе</h3>
      <p className="about-text">{description}</p>
    </section>
  );
};

export default About;