import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ✅ FIXED: componenets → components */
import Navbar from "./components/navbar/Navbar";
import HeroSlider from "./components/HeroSlider";
import TopView from "./components/topview/Topview";
import Testimonial from "./components/TestimonialSection";
import Footer from "./components/footer/Footer";
import GetBestPricePage from "./components/getbestpriceform/GetBestPriceForm";

/* Pages */
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
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

        {/* Product detail */}
        <Route path="/product/:name" element={<ProductDetail />} />

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />

        {/* Get Best Price */}
        <Route path="/get-best-price" element={<GetBestPricePage />} />
      </Routes>
    </Router>
  );
};

export default App;
