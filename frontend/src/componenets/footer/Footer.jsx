// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Address Section with Icons */}
        <div className="footer-section">
          <h3 className="footer-heading">Address</h3>
          <ul className="footer-list">
            <li className="footer-contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Ankleshwar, Bharuch, INDIA</span>
            </li>
            <li className="footer-contact-item">
              <FaPhone className="footer-icon" />
              <span>+91 90992 25618</span>
            </li>
            <li className="footer-contact-item">
              <FaEnvelope className="footer-icon" />
              <span>Shellandpearlchemicals@gmail.com</span>
            </li>
            <li className="footer-contact-item">
              <FaGlobe className="footer-icon" />
              <span>indiamart.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Opening Hours</h3>
          <ul className="footer-list">
            <li><strong>Monday - Friday:</strong></li>
            <li>09:00 AM - 09:00 PM</li>
            <li><strong>Saturday - Sunday:</strong></li>
            <li>09:00 AM - 12:00 PM</li>
          </ul>
        </div>

        {/* Products Section with Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Products</h3>
          <ul className="footer-list">
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/products">Our Products</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">
            Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer,
            Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© shellandpearlchemicals.com. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
