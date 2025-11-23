import React from "react";
import "./Auth.css"; // Shared Auth Styles

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card card-shadow">
        <h2 className="text-center">Welcome Back to FarmConnect</h2>
        <p className="text-center">
          Log in to manage your farm, sales, or fresh orders.
        </p>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary btn-full-width">
            Log In
          </button>
        </form>

        <p className="auth-footer-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
