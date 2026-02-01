import React from "react";
import "./HeroSlider.css";
import bg2 from "../assets/header2.jpg"; // ✅ Your second image

const HeroSlide2 = () => (
  <div className="hero-slide" style={{ backgroundImage: `url(${bg2})` }}>
    <div className="hero-content">
      <div className="corner-frame"></div>
      <h3 className="hero-subtitle">CHEMICALS PRODUCTS & SERVICES</h3>
      <h1 className="hero-title">Shell & Pearl Chemicals</h1>
      <p className="hero-description">
        Established in year 2021, Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer,
        Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more.
      </p>
      <div className="hero-buttons">
        <button className="btn blue">Read More</button>
        <button className="btn orange">Free Quote</button>
      </div>
    </div>
  </div>
);

export default HeroSlide2;
