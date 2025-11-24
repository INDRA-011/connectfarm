import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section footer-brand">
          <div className="footer-logo">🌿 FarmConnect</div>
          <p>Connecting fields to families, sustainably.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/">🚹</a>
            <a href="https://www.instagram.com/?hl=en">📷</a>
            <a href="http://x.com">🐦</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Marketplace</h3>
          <ul>
            <li>
              <a href="/products">Browse Products</a>
            </li>
            <li>
              <a href="/sellers">Find Sellers</a>
            </li>
            <li>
              <a href="/producers">Become a Producer</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/shipping">Shipping Info</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center container">
        &copy; {new Date().getFullYear()} FarmConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
