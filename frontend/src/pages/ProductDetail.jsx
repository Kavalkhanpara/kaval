import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/ProductData";
import "./productDetail.css";
import labBg from "../assets/lab.png";

const ProductDetail = () => {
  /* ✅ URL से slug आएगा */
  const { name } = useParams();

  /* ✅ Slug बनाने वाला function */
  const makeSlug = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")       // space → -
      .replace(/[()]/g, "")      // brackets remove
      .replace(/[^a-z0-9-]/g, ""); // special chars हटाओ

  /* ✅ सही product खोजो slug के हिसाब से */
  const product = productDetails.find(
    (p) => makeSlug(p.name) === name
  );

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setShowForm(false);
  };

  /* ✅ अगर product नहीं मिला */
  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>❌ Product not found.</h2>
        <p>Please check the product URL slug.</p>
      </div>
    );
  }

  return (
    <>
      {/* ✅ Banner */}
      <div
        className="product-banner"
        style={{ backgroundImage: `url(${labBg})` }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="left-border" />
            <div className="banner-text-box">
              <h1>{product.name}</h1>
              <p className="breadcrumb">HOME / PRODUCT</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Product Detail */}
      <div className="product-detail-container">
        <div className="product-layout">
          <img
            src={product.image}
            alt={product.name}
            className="detail-img"
          />

          <div className="product-spec-box">
            <h3 className="product-title">{product.name}</h3>

            <div className="spec-row">
              <strong>Chemical Formula</strong>
              <span>{product.formula}</span>
            </div>

            <div className="spec-row">
              <strong>Color</strong>
              <span>{product.color || "Transparent"}</span>
            </div>

            <div className="spec-row">
              <strong>Density</strong>
              <span>{product.density}</span>
            </div>

            <div className="spec-row">
              <strong>Packaging</strong>
              <span>{product.packaging || "Available in Drums / Bulk"}</span>
            </div>

            {/* ✅ Quote Button */}
            <button
              className="bottom-quote-btn"
              onClick={() => setShowForm(true)}
            >
              Get Best Price/Quote
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form-box">
            <button
              className="close-modal-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h3>Contact Us</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
