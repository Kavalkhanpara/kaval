import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componenets/navbar/Navbar";
import HeroSlider from "./componenets/HeroSlider";
import TopView from "./componenets/topview/Topview";
import ProductDetail from "./pages/ProductDetail";
import Testimonial from "./componenets/TestimonialSection";
import Footer from "./componenets/footer/Footer";

import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";

import GetBestPricePage from "./componenets/getbestpriceform/GetBestPriceForm";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <TopView />
              <Testimonial />
              <Footer />
            </>
          }
        />

        {/* ✅ Product Detail Route (Name Based Fix) */}
        <Route
          path="/product/:name"
          element={<ProductDetail />}
        />

        {/* ✅ About page */}
        <Route path="/about" element={<About />} />

        {/* ✅ All Products page */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />

        {/* ✅ Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Get Best Price Form */}
        <Route path="/get-best-price" element={<GetBestPricePage />} />
      </Routes>
    </Router>
  );
};

export default App;
