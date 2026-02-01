// import React, { useState, useEffect } from 'react';
// import './HeroSlider.css';
// import header1 from '../assets/header1.jpg';
// import header2 from '../assets/header2.jpg';

// const slides = [
//   {
//     image: header1,
//     subtitle: "CHEMICALS PRODUCTS & SERVICES",
//     title: "Shell & Pearl Chemicals",
//     description:
//       "Established in year 2021, Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer, Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more",
//   },
//   {
//     image: header2,
//     subtitle: "CHEMICALS PRODUCTS & SERVICES",
//     title: "Shell & Pearl Chemicals",
//     description:
//       "Established in year 2021, Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer, Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more",
//   },
// ];

// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-slider-container">
//       <div
//         className="hero-slider-inner"
//         style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
//       >
//         {slides.map((slide, index) => (
//          <div
//   key={index}
//   className="hero-slide"
//   style={{ backgroundImage: `url(${slide.image})` }}
// >
//   <div className="hero-content-box">
//     <div className="corner-frame" />
//     <div className="hero-content">
//       <div className="hero-subtitle">{slide.subtitle}</div>
//       <div className="hero-title">{slide.title}</div>
//       <div className="hero-description">{slide.description}</div>
//       <div className="hero-buttons">
//         <button className="btn blue">Read More</button>
//         <button className="btn orange">Free Quote</button>
//       </div>
//     </div>
//   </div>
// </div>

//         ))}
//       </div>

//       <div className="slider-buttons">
//         <button onClick={() => goToSlide((currentIndex - 1 + slides.length) % slides.length)}>❮</button>
//         <button onClick={() => goToSlide((currentIndex + 1) % slides.length)}>❯</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook
import './HeroSlider.css';
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';

const slides = [
  {
    image: header1,
    subtitle: "CHEMICALS PRODUCTS & SERVICES",
    title: "Shell & Pearl Chemicals",
    description:
      "Established in year 2021, Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer, Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more",
  },
  {
    image: header2,
    subtitle: "CHEMICALS PRODUCTS & SERVICES",
    title: "Shell & Pearl Chemicals",
    description:
      "Established in year 2021, Shell & Pearl Chemicals is the leading Wholesale Trader of Ink Reducer, Dimethyl Formamide, Mix Xylene, Tetrahydrofuran Liquid and many more",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider-container">
      <div
        className="hero-slider-inner"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content-box">
              <div className="corner-frame" />
              <div className="hero-content">
                <div className="hero-subtitle">{slide.subtitle}</div>
                <div className="hero-title">{slide.title}</div>
                <div className="hero-description">{slide.description}</div>
                <div className="hero-buttons">
                  <button
                    className="btn blue"
                    onClick={() => navigate("/product")}
                  >
                    Read More
                  </button>
                  <button
                    className="btn orange"
                    onClick={() => navigate("/contact")}
                  >
                    Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button
          onClick={() =>
            goToSlide((currentIndex - 1 + slides.length) % slides.length)
          }
        >
          ❮
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % slides.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
