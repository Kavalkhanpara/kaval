// src/pages/About.jsx
import React from "react";
import { FaCheck, FaPhone } from "react-icons/fa";
import "./About.css";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.png";
import labBg from "../assets/lab.png";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="product-banner" style={{ backgroundImage: `url(${labBg})` }}>
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="left-border" />
            <div className="banner-text-box">
              <h1>About Us</h1>
              <p className="breadcrumb">HOME / ABOUT</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="about-products">
        <div className="about-text">
          <div className="about-title">ABOUT SHELL & PEARL CHEMICALS</div>
          <h2>Supplying the Chemicals That Keep Industries Running</h2>
          <p className="about-para">
            Shell & Pearl Chemicals is a trusted name in the chemical distribution industry.
            We deliver high-quality industrial chemicals and solvents to customers across various sectors.
          </p>
          <ul>
            <li><FaCheck className="check-icon" /> Get the Perfect Chemicals</li>
            <li><FaCheck className="check-icon" /> Leading Wholesale Chemical Trader</li>
            <li><FaCheck className="check-icon" /> Top Export Countries: Kenya</li>
            <li><FaCheck className="check-icon" /> Ink Reducer, Dimethyl Formamide</li>
          </ul>
        </div>

        <div className="about-images">
          <img src={about1} alt="Chemical Facility" className="main-img" />
          <img src={about2} alt="Chemical Products" className="small-img" />
        </div>
      </div>

      {/* Inquiry Section
      <div className="inquiry-section">
        <FaPhone className="phone-icon" />
        <div>
          <p className="inquiry-text">For Inquiry</p>
          <p className="phone-number">+91 90992 25618</p>
        </div>
      </div> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;