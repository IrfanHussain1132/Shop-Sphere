import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import amazonlogo from '../../src/Asset/shopspere.jpg';
function Login({ onLogin }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img
                    src={amazonlogo}
                    alt="Amazon Logo"
                />
            </div>
            <div className="login-box">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email or mobile phone number</label>
                    <input type="text" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Continue</button>
                </form>
                <p className="terms">
                    By continuing, you agree to ShopSphere's{" "}
                    <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.
                </p>
                <div className="help">
                    <a href="/">Need help?</a>
                </div>
            </div>
            <div className="new-to-amazon">
                <hr />
                <p>New to ShopSphere?</p>
                <hr />
            </div>
            <Link to="/register" className="create-account">
                Create your ShopSphere account
            </Link>
        </div>
    );
}

export default Login;
