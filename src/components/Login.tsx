import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // TODO: подключить к бэкенду
    try {
      // Имитация запроса
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt', { email, password });
      // Здесь будет редирект на дашборд
    } catch (err) {
      setError('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Декоративные элементы для глубины */}
        <div className="glass-orb glass-orb-1"></div>
        <div className="glass-orb glass-orb-2"></div>
        
        <div className="login-header">
          <h1 className="login-title">Discord Bot Panel</h1>
          <p className="login-subtitle">Управляй своими ботами с комфортом</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              'Войти'
            )}
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="footer-link">Забыли пароль?</a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">Регистрация</a>
        </div>

        {/* Демо-режим */}
        <div className="demo-hint">
          demo: admin@example.com / admin123
        </div>
      </div>
    </div>
  );
};

export default Login;