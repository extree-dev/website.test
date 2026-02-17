import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ name, title }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
        <div className="header-line"></div>
      </div>
    </header>
  );
};

export default Header;