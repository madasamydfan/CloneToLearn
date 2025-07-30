import React, { useState } from 'react';
import './NetflixSignIn.css'; // Assuming you create this CSS file

function NetflixSignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        // Here you would typically handle the sign-in logic,
        // e.g., send email/password to an authentication API.
        console.log('Sign In clicked!');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
        alert('Sign In functionality not implemented in this UI demo.');
    };

    return (
        <div className="netflix-signin-container">
            <header className="netflix-header">
                <img src="/netflix-logo.png" alt="Netflix Logo" className="netflix-logo" />
            </header>
            <div className="signin-form-wrapper">
                <form className="signin-form" onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Email or mobile number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signin-button">
                        Sign In
                    </button>
                    <div className="or-divider">OR</div>
                    <button type="button" className="sign-in-code-button">
                        Use a sign-in code
                    </button>
                    <div className="help-options">
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                    </div>
                    <div className="remember-me-checkbox">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="new-to-netflix">
                        New to Netflix?{' '}
                        <a href="#" className="signup-link">
                            Sign up now.
                        </a>
                    </div>
                    <div className="recaptcha-info">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                        <a href="#" className="learn-more">
                            Learn more.
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NetflixSignIn;