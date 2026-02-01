import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../components/footer/Footer";
import labBg from "../assets/lab.png";
import "./contact.css";

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

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", msg: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          product: "",
          quantity: "",
          message: ""
        });
      } else {
        setStatus({ type: "error", msg: data.message });
      }
    } catch {
      setStatus({ type: "error", msg: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
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

      <div className="contact-container">
        <div className="contact-info">
          <h2>SHELL & PEARL CHEMICALS</h2>
          <h3>Contact For Any Query</h3>

          <div className="contact-details">
            <div className="contact-item"><FaMapMarkerAlt /> Ankleshwar GIDC, Bharuch, INDIA</div>
            <div className="contact-item"><FaPhone /> +91 92743 23212</div>
            <div className="contact-item"><FaEnvelope /> shellandpearlchemicals@gmail.com</div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>

          {/* ✅ ALERT MESSAGE */}
          {status.msg && (
            <div className={`form-alert ${status.type}`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input name="phone" placeholder="Your Mobile" required value={formData.phone} onChange={handleChange} />
            <input name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <input name="location" placeholder="Your Location" required value={formData.location} onChange={handleChange} />
            <input name="product" placeholder="Product You Want" required value={formData.product} onChange={handleChange} />
            <input name="quantity" placeholder="Quantity / Size" required value={formData.quantity} onChange={handleChange} />
            <textarea name="message" placeholder="Enter your requirement" required value={formData.message} onChange={handleChange} />

            {/* ✅ PROPER STYLED BUTTON */}
            <button type="submit" className="contact-submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
