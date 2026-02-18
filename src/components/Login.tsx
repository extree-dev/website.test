import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import '../CSS/Login.css';

function clamp01(x: number) {
    if (!Number.isFinite(x) || Number.isNaN(x)) return 0;
    return Math.max(0, Math.min(1, x));
}

type FloatingFieldProps = {
    id: string;
    type: 'email' | 'password' | 'text';
    label: string;
    value: string;
    autoComplete?: string;
    onChange: (v: string) => void;
};

const FloatingField: React.FC<FloatingFieldProps> = ({
    id,
    type,
    label,
    value,
    autoComplete,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const labelRef = useRef<HTMLLabelElement | null>(null);
    const [labelWidth, setLabelWidth] = useState(0);

    const isFloating = useMemo(() => isFocused || value.trim().length > 0, [isFocused, value]);

    useLayoutEffect(() => {
        const el = labelRef.current;
        if (!el) return;
        const measure = () => setLabelWidth(el.getBoundingClientRect().width);
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [label]);

    // gap = ширина текста + запас, чтобы верхняя линия точно не заходила под label
    const style = useMemo(
        () => ({ ['--label-gap' as any]: `${Math.ceil(labelWidth) + 12}px` }),
        [labelWidth]
    );

    return (
        <div className="login__field">
            <div className={`login__field-box ${isFloating ? 'is-floating' : ''}`} style={style}>
                <input
                    className="login__input"
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder=" "
                    autoComplete={autoComplete}
                    required
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <label ref={labelRef} className="login__floating-label" htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
};

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null);

    // Отслеживаем скролл
    useEffect(() => {
        const handleScroll = () => {
            const element = containerRef.current;
            if (!element) return;

            const scrollTop = window.scrollY;
            const maxScroll = element.scrollHeight - window.innerHeight;

            // Если maxScroll <= 0 (нет скролла), прогресс должен быть 0 — без NaN/Infinity
            const raw = maxScroll > 0 ? scrollTop / maxScroll : 0;
            setScrollProgress(clamp01(raw));
        };

        // initial
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Обработчик формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: сюда твоя логика логина
        console.log({ email, password, isRemember });
    };

    return (
        <div className="login" ref={containerRef}>
            {/* Scroll track: создаёт высоту страницы для управляемого скролла */}
            <div className="login__scroll-track" aria-hidden="true" />

            <div className="login__container">
                {/* Левая панель — продуктовая */}
                <div
                    className="login__hero"
                    style={{
                        width:
                            scrollProgress < 0.33
                                ? '100%'
                                : scrollProgress < 0.67
                                    ? '50%'
                                    : '0%',
                        opacity: scrollProgress < 0.67 ? 1 : 0,
                        transform: scrollProgress >= 0.67 ? 'translateX(-100%)' : 'translateX(0)',
                        pointerEvents: scrollProgress < 0.67 ? 'auto' : 'none',
                        // FIX: в стадии 50/50 левый должен быть выше, чтобы не было перекрытий
                        zIndex: scrollProgress < 0.67 ? 2 : 1,
                    }}
                >
                    <div className="login__hero-content">
                        <div className="login__brand">
                            <span className="login__brand-dot" />
                            <span className="login__brand-name">Discord Bot Panel</span>
                        </div>

                        <h1 className="login__title">Secure access to your workspace.</h1>

                        <p className="login__subtitle">
                            Sign in to manage projects, track progress, and collaborate with your team — with
                            enterprise-grade security and a minimal interface.
                        </p>

                        <div className="login__hero-metrics">
                            <div className="login__metric">
                                <div className="login__metric-value">99.99%</div>
                                <div className="login__metric-label">Uptime</div>
                            </div>
                            <div className="login__metric">
                                <div className="login__metric-value">SOC2</div>
                                <div className="login__metric-label">Compliant</div>
                            </div>
                            <div className="login__metric">
                                <div className="login__metric-value">256-bit</div>
                                <div className="login__metric-label">Encryption</div>
                            </div>
                        </div>

                        <div className="login__hero-card">
                            <div className="login__hero-card-row">
                                <div className="login__hero-card-icon" />
                                <div className="login__hero-card-text">
                                    <div className="login__hero-card-title">Single Sign-On</div>
                                    <div className="login__hero-card-desc">SAML / OAuth provider integrations</div>
                                </div>
                            </div>
                            <div className="login__hero-card-row">
                                <div className="login__hero-card-icon" />
                                <div className="login__hero-card-text">
                                    <div className="login__hero-card-title">Audit & Monitoring</div>
                                    <div className="login__hero-card-desc">Centralized logs and access controls</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая панель — форма входа */}
                <div
                    className="login__panel"
                    style={{
                        width:
                            scrollProgress < 0.33
                                ? '0%'
                                : scrollProgress < 0.67
                                    ? '50%'
                                    : '100%',
                        opacity: scrollProgress < 0.33 ? 0 : 1,
                        transform: scrollProgress < 0.33 ? 'translateX(100%)' : 'translateX(0)',
                        pointerEvents: scrollProgress < 0.33 ? 'none' : 'auto',
                        zIndex: scrollProgress < 0.33 ? 1 : 2,
                    }}
                >
                    <div className="login__panel-inner">
                        <div className="login__panel-header">
                            <h2 className="login__panel-title">Sign in</h2>
                            <p className="login__panel-subtitle">Use your work email and password to continue.</p>
                        </div>

                        <form className="login__form" onSubmit={handleSubmit}>
                            <FloatingField
                                id="login-email"
                                type="email"
                                label="Email"
                                value={email}
                                autoComplete="email"
                                onChange={setEmail}
                            />

                            <FloatingField
                                id="login-password"
                                type="password"
                                label="Password"
                                value={password}
                                autoComplete="current-password"
                                onChange={setPassword}
                            />

                            <div className="login__row">
                                <label className="login__checkbox">
                                    <input
                                        type="checkbox"
                                        checked={isRemember}
                                        onChange={(e) => setIsRemember(e.target.checked)}
                                    />
                                    <span>Remember me</span>
                                </label>

                                <button type="button" className="login__link">
                                    Forgot password?
                                </button>
                            </div>

                            <button type="submit" className="login__button">
                                Continue
                            </button>

                            <div className="login__divider">
                                <span>or</span>
                            </div>

                            <button
                                type="button"
                                className="login__button login__button--secondary login__button--google"
                            >
                                Continue with Google
                            </button>

                            <button
                                type="button"
                                className="login__button login__button--secondary login__button--microsoft"
                            >
                                Continue with Microsoft
                            </button>

                            <p className="login__footer">
                                By continuing, you agree to our{' '}
                                <button type="button" className="login__link">
                                    Terms
                                </button>{' '}
                                and{' '}
                                <button type="button" className="login__link">
                                    Privacy Policy
                                </button>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
