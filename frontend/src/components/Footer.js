import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import blogLogo from "../assets/blog-profile.jpg"; // Add your image in assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514
" alt="Blog logo" className="footer-logo" />
          <h2>📝 My Blog</h2>
          <p>
            Welcome to My Blog — a place where I share thoughts, tutorials, and
            insights on web development and life.
          </p>
          <Link to="/about" className="read-more-link">Read more →</Link>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/contact">📩 Contact</Link></li>
            <li><Link to="/add-post">➕ Add Post</Link></li>
            <li><Link to="/login">🔐 Login</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer">📧 Email</a>
          <a href="https://github.com/Hammad-Tauqir" target="_blank" rel="noreferrer">🐙 GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
