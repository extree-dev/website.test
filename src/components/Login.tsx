import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Отслеживаем скролл
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const element = containerRef.current;
            const scrollTop = window.scrollY;
            const maxScroll = element.scrollHeight - window.innerHeight;
            const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <div className="login" ref={containerRef}>

            <div className="login__container">
                {/* Левая панель — появляется/исчезает */}
                <div
                    className="login__hero"
                    style={{
                        opacity: scrollProgress < 0.67 ? 1 : 1 - ((scrollProgress - 0.67) * 3),
                        transform: `translateX(${scrollProgress > 0.33 ? '0' : '-5%'})`,
                        transition: 'opacity 0.1s linear, transform 0.3s ease'
                    }}
                >
                    <div className="login__hero-content">
                        <div className="login__logo">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                <circle cx="12" cy="12" r="4" />
                            </svg>
                            <span>BotPanel</span>
                        </div>
                        <h1 className="login__hero-title">
                            Discord Bot<br />Management
                        </h1>
                        <p className="login__hero-description">
                            Deploy, monitor and scale your Discord bots across multiple servers from a single dashboard.
                        </p>
                        <div className="login__features">
                            <div className="login__feature-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1" />
                                    <path d="M6 8.5L7.5 10L10 6" stroke="currentColor" strokeWidth="1.2" />
                                </svg>
                                <span>Real-time metrics</span>
                            </div>
                            <div className="login__feature-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1" />
                                    <path d="M6 8.5L7.5 10L10 6" stroke="currentColor" strokeWidth="1.2" />
                                </svg>
                                <span>GitHub auto-deploy</span>
                            </div>
                            <div className="login__feature-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.1" />
                                    <path d="M6 8.5L7.5 10L10 6" stroke="currentColor" strokeWidth="1.2" />
                                </svg>
                                <span>Team access control</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая панель — форма (появляется постепенно) */}
                <div
                    className="login__form-panel"
                    style={{
                        transform: `translateX(${scrollProgress < 0.33 ? '100%' : scrollProgress > 0.66 ? '0' : '25%'})`,
                        width: scrollProgress > 0.66 ? '100%' : '50%',
                        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), width 0.5s ease'
                    }}
                >
                    <div className="login__form-container">
                        <div className="login__header">
                            <h2 className="login__title">Sign in</h2>
                            <p className="login__subtitle">
                                New to BotPanel? <a href="#" className="login__link login__link--inline">Create an account</a>
                            </p>
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
                                    placeholder="··········"
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
                                {isLoading ? 'Signing in...' : 'Continue'}
                            </button>
                        </form>

                        <div className="login__footer">
                            <a href="#" className="login__link login__link--small">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Индикатор скролла (опционально) */}
            <div className="login__scroll-indicator">
                <div
                    className="login__scroll-progress"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            {/* Подсказка */}
            <div className="login__scroll-hint">
                {scrollProgress < 0.33 && '↓ Scroll to reveal form'}
                {scrollProgress >= 0.33 && scrollProgress < 0.66 && '↓ Scroll for full form'}
                {scrollProgress >= 0.66 && '↑ Scroll back'}
            </div>
        </div>
    );
};

export default Login;