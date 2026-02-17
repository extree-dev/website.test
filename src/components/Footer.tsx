import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        © {new Date().getFullYear()} Роман Горбач. Сделано с ❤️
      </p>
    </footer>
  );
};

export default Footer;