// src/pages/Testimonial.jsx
import React from "react";
import Slider from "react-slick";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./testimonialsection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Amit patel",
    role: "Lab Technician",
    image: user1,
    feedback: "I appreciate the product, which clearly demonstrates a commitment to quality and responsibility.",
  },
  {
    name: "Ram Guru",
    role: "Lab Asst",
    image: user4,
    feedback: "We have had a very nice relationship with this supplier. Excellent in approach.",
  },
  {
    name: "Krishna D",
    role: "Chemical",
    image: user3,
    feedback: "I also had a positive experience with the customer service provided by the company.",
  },
  {
    name: "Naresh shah",
    role: "Lab Technician",
    image: user2,
    feedback: "It is clear that the manufacturers have put a lot of thought and effort into producing a high-quality chemical.",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-header">TESTIMONIAL</h2>
      <h1 className="testimonial-title">Our Clients Say!</h1>
      
      <div className="slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <img src={t.image} alt={t.name} className="testimonial-image" />
                <p className="testimonial-text">"{t.feedback}"</p>
                <div className="testimonial-rating">★★★★★</div>
                <div className="testimonial-author">
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;