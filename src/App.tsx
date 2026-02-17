import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  // Данные для компонентов
  const headerData = {
    name: 'Роман Горбач',
    title: 'Frontend Developer / DevOps'
  };

  const aboutData = {
    description: 'Занимаюсь разработкой 5+ лет. Специализируюсь на React, TypeScript и автоматизации деплоя. Люблю создавать красивые интерфейсы и настраивать CI/CD пайплайны.'
  };

  const skillsData = {
    skills: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Vite', 'CSS3', 'HTML5']
      },
      {
        category: 'DevOps',
        items: ['Docker', 'Nginx', 'GitHub Actions', 'Linux', 'Bash']
      },
      {
        category: 'Другие',
        items: ['Node.js', 'Python', 'Git', 'REST API']
      }
    ]
  };

  const experienceData = {
    jobs: [
      {
        company: 'Фриланс',
        position: 'Frontend Developer',
        period: '2024 — настоящее время',
        description: [
          'Разработка SPA на React и TypeScript',
          'Настройка автоматического деплоя через GitHub Actions',
          'Администрирование VPS серверов'
        ]
      },
      {
        company: 'Проекты',
        position: 'Fullstack разработчик',
        period: '2023 — 2024',
        description: [
          'Создание сайтов с нуля',
          'Интеграция с Telegram API',
          'Оптимизация производительности'
        ]
      }
    ]
  };

  const educationData = {
    education: [
      {
        institution: 'Онлайн курсы',
        degree: 'React разработчик',
        period: '2023'
      },
      {
        institution: 'Университет',
        degree: 'Прикладная информатика',
        period: '2019 — 2023'
      }
    ]
  };

  const contactData = {
    contacts: [
      { type: 'Telegram', value: '@theromkaa', link: 'https://t.me/theromkaa' },
      { type: 'GitHub', value: 'extree-dev', link: 'https://github.com/extree-dev' },
      { type: 'Email', value: 'theromkaa@gmail.com', link: 'mailto:theromkaa@gmail.com' }
    ]
  };

  return (
    <div className="app">
      <div className="container">
        <Header {...headerData} />
        <main className="main-content">
          <About {...aboutData} />
          <Skills {...skillsData} />
          <Experience {...experienceData} />
          <Education {...educationData} />
          <Contact {...contactData} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;