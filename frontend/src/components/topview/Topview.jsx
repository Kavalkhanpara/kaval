import React from "react";
import { Link } from "react-router-dom";
import "./topview.css";

/* =======================
   Product Images (1 → 37)
======================= */
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/pro5.png";
import pro6 from "../../assets/pro6.png";
import pro7 from "../../assets/pro7.jpg";
import pro8 from "../../assets/pro8.jpg";
import pro9 from "../../assets/pro9.jpg";
import pro10 from "../../assets/pro10.jpg";
import pro11 from "../../assets/pro11.jpg";
import pro12 from "../../assets/pro12.jpg";
import pro13 from "../../assets/pro13.jpg";
import pro14 from "../../assets/pro14.jpg";
import pro15 from "../../assets/pro15.jpg";
import pro16 from "../../assets/pro16.jpg";
import pro17 from "../../assets/pro17.jpg";

import pro18 from "../../assets/pro18.jpg";
import pro19 from "../../assets/pro19.jpg";
import pro20 from "../../assets/pro20.jpg";
import pro21 from "../../assets/pro21.jpg";
import pro22 from "../../assets/pro22.jpg";
import pro23 from "../../assets/pro23.jpg";
import pro24 from "../../assets/pro24.jpg";
import pro25 from "../../assets/pro25.jpg";
import pro26 from "../../assets/pro26.jpg";
import pro27 from "../../assets/pro27.jpg";
import pro28 from "../../assets/pro28.jpg";
import pro29 from "../../assets/pro29.jpg";
import pro30 from "../../assets/pro30.jpg";
import pro31 from "../../assets/pro31.jpg";
import pro32 from "../../assets/pro32.jpg";
import pro33 from "../../assets/pro33.jpg";
import pro34 from "../../assets/pro34.jpg";
import pro35 from "../../assets/pro35.jpg";
import pro36 from "../../assets/pro36.jpg";
import pro37 from "../../assets/pro37.jpg";

/* =======================
   All 37 Products Category Wise
======================= */
const products = [
  // ✅ Imported & Distributed
  { image: pro1, name: "Toluene", category: "Imported & Distributed" },
  { image: pro2, name: "N-Butanol (NBA)", category: "Imported & Distributed" },
  { image: pro3, name: "Iso Propyl Alcohol (IPA)", category: "Imported & Distributed" },
  { image: pro4, name: "Di Methyl Formamide (DMF)", category: "Imported & Distributed" },
  { image: pro7, name: "Mix Xylene", category: "Imported & Distributed" },
  { image: pro8, name: "Ethyl Acetate", category: "Imported & Distributed" },
  { image: pro9, name: "Acetonitrile", category: "Imported & Distributed" },

  { image: pro27, name: "Ortho Xylene", category: "Imported & Distributed" },
  { image: pro28, name: "Di Methyl Sulphoxide (DMSO)", category: "Imported & Distributed" },
  { image: pro29, name: "Ethylene Dichloride (EDC)", category: "Imported & Distributed" },
  { image: pro30, name: "Benzene", category: "Imported & Distributed" },
  { image: pro31, name: "Chloroform", category: "Imported & Distributed" },
  { image: pro32, name: "MTBE", category: "Imported & Distributed" },
  { image: pro33, name: "Acrylonitrile", category: "Imported & Distributed" },
  { image: pro34, name: "Butyl Acetate (BA)", category: "Imported & Distributed" },

  // ✅ Ink & Paint Solvent
  { image: pro18, name: "NC Thinner", category: "Ink & Paint Solvent" },
  { image: pro19, name: "Paint Pass Thinner", category: "Ink & Paint Solvent" },
  { image: pro20, name: "PU Thinner", category: "Ink & Paint Solvent" },
  { image: pro21, name: "Reducer", category: "Ink & Paint Solvent" },
  { image: pro22, name: "MEK", category: "Ink & Paint Solvent" },
  { image: pro23, name: "BAM", category: "Ink & Paint Solvent" },

  { image: pro24, name: "Cyclo Hexene", category: "Ink & Paint Solvent" },
  { image: pro25, name: "DEG", category: "Ink & Paint Solvent" },
  { image: pro26, name: "MEG", category: "Ink & Paint Solvent" },
  { image: pro35, name: "MIBK", category: "Ink & Paint Solvent" },
  { image: pro13, name: "Paint Thinner", category: "Ink & Paint Solvent" },

  // ✅ Powder Product
  { image: pro5, name: "Activated Carbon", category: "Powder Product" },
  { image: pro6, name: "Hyflow Powder", category: "Powder Product" },
  { image: pro36, name: "Soda Ash Light", category: "Powder Product" },

  // ✅ Acid Product
  { image: pro15, name: "Hydrochloric Acid (HCL)", category: "Acid Product" },
  { image: pro16, name: "Sulphuric Acid", category: "Acid Product" },
  { image: pro17, name: "Nitric Acid", category: "Acid Product" },

  // ✅ Base Product
  { image: pro37, name: "Caustic Soda Lye", category: "Base Product" },

  // ✅ Other Chemicals
  { image: pro10, name: "Hydrogen Peroxide", category: "Other Chemicals" },
  { image: pro11, name: "Triethylamine", category: "Other Chemicals" },
  { image: pro12, name: "N Hexane", category: "Other Chemicals" },
  { image: pro14, name: "Tetrahydrofuran (THF)", category: "Other Chemicals" },
];

/* =======================
   Categories Like PDF
======================= */
const categories = [
  "Imported & Distributed",
  "Ink & Paint Solvent",
  "Powder Product",
  "Acid Product",
  "Base Product",
  "Other Chemicals",
];

const Topview = () => {
  return (
    <div className="topview-container">
      <h2 className="section-title">Product List</h2>

      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>

          <div className="products-grid">
            {products
              .filter((p) => p.category === cat)
              .map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />

                  <div className="product-name-row">
                    <h3 className="product-name">{product.name}</h3>

                    {/* ✅ Name Based Link */}
                    <Link
  to={`/product/${product.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")}`}
  className="details-arrow"
>
  ➜
</Link>


                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topview;
