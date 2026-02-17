import React, { useState } from 'react';
import '../CSS/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempt', { email, password });
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__sidebar">
        <div className="login__sidebar-content">
          <div className="login__logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <span>BotPanel</span>
          </div>
          <h2 className="login__sidebar-title">Discord Bot Management</h2>
          <p className="login__sidebar-description">
            Professional control panel for your Discord bots. Monitor, manage, and scale your bots from one place.
          </p>
          <div className="login__features">
            <div className="login__feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Real-time monitoring</span>
            </div>
            <div className="login__feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Auto-deploy with GitHub</span>
            </div>
            <div className="login__feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Team collaboration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login__main">
        <div className="login__card">
          <div className="login__header">
            <h1 className="login__title">Welcome back</h1>
            <p className="login__subtitle">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="login__form">
            <div className="login__field">
              <label className="login__label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__input"
                placeholder="name@company.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="login__field">
              <label className="login__label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>

            {error && <div className="login__error">{error}</div>}

            <button 
              type="submit" 
              className="login__button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="login__footer">
            <a href="#" className="login__link">Forgot password?</a>
            <span className="login__separator">•</span>
            <a href="#" className="login__link">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;