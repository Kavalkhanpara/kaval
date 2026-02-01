import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Left Logo */}
        <div className="navbar-left">
          <img src={logo} alt="Shell & Pearl Logo" className="navbar-logo" />
        </div>

        {/* Center Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link to="/products" className="nav-link">PRODUCTS</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>

        {/* Right Side Simple Call Icon */}
        <div className="navbar-right">
          
          {/* ✅ Clickable Call Icon */}
          <a href="tel:+919099225618" className="call-icon">
            📞
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
