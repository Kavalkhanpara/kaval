// src/pages/Home.jsx
import React from "react";
import HeroSlider from "../componenets/HeroSlider";
import TopView from "../componenets/topview/Topview";
import Testimonial from "../componenets/TestimonialSection";
import Footer from "../componenets/footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <TopView />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;