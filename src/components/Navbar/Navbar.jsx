import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">
          {/* Using a nature-inspired icon placeholder */}
          <span role="img" aria-label="leaf">
            🌿
          </span>
          FarmConnect
        </div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/">Privacy & Policy</a>
        </nav>
        <div className="navbar-actions">
          <a href="/cart" className="action-icon">
            🛒
          </a>
          <a href="/profile" className="action-icon">
            👤
          </a>
          <a href="/Signup" className="btn-primary btn-small">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
