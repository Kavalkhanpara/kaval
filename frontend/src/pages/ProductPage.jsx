import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../components/footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./productPage.css";

/* =======================
   Product Images (1 → 37)
======================= */
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import pro7 from "../assets/pro7.jpg";
import pro8 from "../assets/pro8.jpg";
import pro9 from "../assets/pro9.jpg";
import pro10 from "../assets/pro10.jpg";
import pro11 from "../assets/pro11.jpg";
import pro12 from "../assets/pro12.jpg";
import pro13 from "../assets/pro13.jpg";
import pro14 from "../assets/pro14.jpg";
import pro15 from "../assets/pro15.jpg";
import pro16 from "../assets/pro16.jpg";
import pro17 from "../assets/pro17.jpg";

import pro18 from "../assets/pro18.jpg";
import pro19 from "../assets/pro19.jpg";
import pro20 from "../assets/pro20.jpg";
import pro21 from "../assets/pro21.jpg";
import pro22 from "../assets/pro22.jpg";
import pro23 from "../assets/pro23.jpg";
import pro24 from "../assets/pro24.jpg";
import pro25 from "../assets/pro25.jpg";
import pro26 from "../assets/pro26.jpg";
import pro27 from "../assets/pro27.jpg";
import pro28 from "../assets/pro28.jpg";
import pro29 from "../assets/pro29.jpg";
import pro30 from "../assets/pro30.jpg";
import pro31 from "../assets/pro31.jpg";
import pro32 from "../assets/pro32.jpg";
import pro33 from "../assets/pro33.jpg";
import pro34 from "../assets/pro34.jpg";
import pro35 from "../assets/pro35.jpg";
import pro36 from "../assets/pro36.jpg";
import pro37 from "../assets/pro37.jpg";

import labBg from "../assets/lab.png";

/* =======================
   Products List (Simple Name Based)
======================= */
const products = [
  { image: pro1, name: "Toluene", formula: "C7H8", density: "0.867 g/cm³" },
  { image: pro2, name: "N-Butanol (NBA)", formula: "C4H10O", density: "0.81 g/cm³" },
  { image: pro3, name: "Iso Propyl Alcohol (IPA)", formula: "C3H8O", density: "0.786 g/cm³" },
  { image: pro4, name: "DMF", formula: "C3H7NO", density: "0.944 g/cm³" },

  { image: pro7, name: "Mix Xylene", formula: "C8H10", density: "0.86 g/cm³" },
  { image: pro8, name: "Ethyl Acetate", formula: "C4H8O2", density: "0.897 g/cm³" },
  { image: pro9, name: "Acetonitrile", formula: "C2H3N", density: "0.786 g/cm³" },

  { image: pro27, name: "Ortho Xylene", formula: "C8H10", density: "0.88 g/cm³" },
  { image: pro28, name: "DMSO", formula: "C2H6OS", density: "1.1 g/cm³" },
  { image: pro29, name: "EDC", formula: "C2H4Cl2", density: "1.25 g/cm³" },

  { image: pro30, name: "Benzene", formula: "C6H6", density: "0.876 g/cm³" },
  { image: pro31, name: "Chloroform", formula: "CHCl3", density: "1.48 g/cm³" },

  { image: pro32, name: "MTBE", formula: "C5H12O", density: "0.74 g/cm³" },

  { image: pro33, name: "Acrylonitrile", formula: "C3H3N", density: "0.81 g/cm³" },
  { image: pro34, name: "Butyl Acetate", formula: "C6H12O2", density: "0.88 g/cm³" },

  { image: pro18, name: "NC Thinner", formula: "Solvent Mix", density: "0.85 g/cm³" },
  { image: pro19, name: "Paint Pass Thinner", formula: "Solvent Mix", density: "0.86 g/cm³" },
  { image: pro20, name: "PU Thinner", formula: "Solvent Mix", density: "0.87 g/cm³" },
  { image: pro21, name: "Reducer", formula: "Solvent Mix", density: "0.88 g/cm³" },

  { image: pro22, name: "MEK", formula: "C4H8O", density: "0.805 g/cm³" },
  { image: pro23, name: "BAM", formula: "C6H12O2", density: "0.88 g/cm³" },

  { image: pro24, name: "Cyclo Hexene", formula: "C6H10", density: "0.81 g/cm³" },
  { image: pro25, name: "DEG", formula: "C4H10O3", density: "1.12 g/cm³" },
  { image: pro26, name: "MEG", formula: "C2H6O2", density: "1.11 g/cm³" },

  { image: pro35, name: "MIBK", formula: "C6H12O", density: "0.80 g/cm³" },

  { image: pro13, name: "Paint Thinner", formula: "Solvent Mix", density: "0.87 g/cm³" },

  { image: pro5, name: "Activated Carbon", formula: "C", density: "2.0 g/cm³" },
  { image: pro6, name: "Hyflow Powder", formula: "SiO2", density: "2.2 g/cm³" },
  { image: pro36, name: "Soda Ash Light", formula: "Na2CO3", density: "2.5 g/cm³" },

  { image: pro15, name: "Hydrochloric Acid", formula: "HCl", density: "1.15 g/cm³" },
  { image: pro16, name: "Sulphuric Acid", formula: "H2SO4", density: "1.84 g/cm³" },
  { image: pro17, name: "Nitric Acid", formula: "HNO3", density: "1.51 g/cm³" },

  { image: pro37, name: "Caustic Soda Lye", formula: "NaOH", density: "1.52 g/cm³" },

  { image: pro10, name: "Hydrogen Peroxide", formula: "H2O2", density: "1.45 g/cm³" },
  { image: pro11, name: "Triethylamine", formula: "C6H15N", density: "0.726 g/cm³" },
  { image: pro12, name: "N Hexane", formula: "C6H14", density: "0.655 g/cm³" },
  { image: pro14, name: "THF", formula: "C4H8O", density: "0.889 g/cm³" },
];

const ProductPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="product-page">
      {/* ✅ Banner */}
      <div
        className="product-banner"
        style={{ backgroundImage: `url(${labBg})` }}
      >
        <div className="banner-overlay">
          <h1>Our Products</h1>
          <p>Home / Products</p>
        </div>
      </div>

      {/* ✅ Product Grid */}
      <div className="topview-container">
        <h2 className="section-title">All Products</h2>

        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />

              <div className="product-name-row">
                <h3>{product.name}</h3>

                {/* ✅ Name Based Link */}
                <Link
                  to={`/product/${product.name}`}
                  className="details-arrow"
                >
                  ➜
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Explore Slider */}
      <div className="explore-products-section">
        <h2>Explore Products</h2>

        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div className="explore-product-card" key={index}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <ul className="product-brief">
                <li>✅ Formula: {product.formula}</li>
                <li>✅ Density: {product.density}</li>
              </ul>

              <Link
                to={`/product/${product.name}`}
                className="read-more-btn"
              >
                Read More ➜
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
