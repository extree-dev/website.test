import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="app">
      <div className={`hero ${visible ? 'visible' : ''}`}>
        <h1>Привет, я <span className="gradient-text">Роман1</span></h1>
        <p className="subtitle">Разработчик / Создатель / Энтузиаст</p>
        <div className="buttons">
          <a href="#contact" className="btn primary">Связаться</a>
          <a href="#projects" className="btn secondary">Проекты</a>
        </div>
      </div>

      <div id="about" className="section">
        <h2>Обо мне</h2>
        <div className="cards">
          <div className="card">5+ лет опыта</div>
          <div className="card">50+ проектов</div>
          <div className="card">30+ клиентов</div>
        </div>
      </div>

      <div id="contact" className="section contact">
        <h2>Контакты</h2>
        <div className="contact-links">
          <a href="#">Telegram</a>
          <a href="#">GitHub</a>
          <a href="#">Email</a>
        </div>
      </div>
    </div>
  );
}

export default App;