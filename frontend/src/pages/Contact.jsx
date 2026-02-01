import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../componenets/footer/Footer";
import labBg from "../assets/lab.png";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    product: "",
    quantity: "",
    message: ""
  });

  // Handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          product: "",
          quantity: "",
          message: ""
        });
      }

    } catch (error) {
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="contact-page">

      {/* Banner */}
      <div className="contact-banner" style={{ backgroundImage: `url(${labBg})` }}>
        <div className="banner-overlay">
          <div className="banner-content centered-banner">
            <div className="left-border" />
            <div className="banner-text-box">
              <h1>Contact Us</h1>
              <p className="breadcrumb">HOME / CONTACT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-container">
        
        {/* LEFT DETAILS SECTION */}
        <div className="contact-info">
          <h2>SHELL & PEARL CHEMICALS</h2>
          <h3>Contact For Any Query</h3>
          <p>
            Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer,
            Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Ankleshwar GIDC, Bharuch, INDIA</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 92743 23212</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>shellandpearlchemicals@gmail.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="contact-form">
          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange} 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Mobile" 
                  required 
                  value={formData.phone}
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Your Location" 
                  required 
                  value={formData.location}
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="product" 
                  placeholder="Product You Want" 
                  required 
                  value={formData.product}
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="form-group">
              <input 
                type="text" 
                name="quantity" 
                placeholder="Quantity / Size" 
                required 
                value={formData.quantity}
                onChange={handleChange} 
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Enter your requirement in details" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="contact-button">Contact Now</button>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;



