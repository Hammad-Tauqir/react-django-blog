// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="logo">📝 My Blog</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/add-post">Add Post</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
