/* ===============================
   ProductData.js (All 37 Products)
================================= */

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

/* ===============================
   Product Details Array
================================= */

const productDetails = [
  {
    name: "Toluene",
    image: pro1,
    formula: "C7H8",
    density: "0.867 g/cm³",
    color: "Colorless Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "N-Butanol (NBA)",
    image: pro2,
    formula: "C4H10O",
    density: "0.81 g/cm³",
    color: "Colorless Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Iso Propyl Alcohol (IPA)",
    image: pro3,
    formula: "C3H8O",
    density: "0.786 g/cm³",
    color: "Clear Liquid",
    packaging: "160 Kg Drum",
  },
  {
    name: "Di Methyl Formamide (DMF)",
    image: pro4,
    formula: "C3H7NO",
    density: "0.944 g/cm³",
    color: "Transparent Liquid",
    packaging: "190 Kg Drum",
  },
  {
    name: "Mix Xylene",
    image: pro7,
    formula: "C8H10",
    density: "0.86 g/cm³",
    color: "Colorless Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Ethyl Acetate",
    image: pro8,
    formula: "C4H8O2",
    density: "0.897 g/cm³",
    color: "Clear Liquid",
    packaging: "180 Kg Drum",
  },
  {
    name: "Acetonitrile",
    image: pro9,
    formula: "C2H3N",
    density: "0.786 g/cm³",
    color: "Colorless Liquid",
    packaging: "160 Kg Drum",
  },

  /* Imported & Distributed Extra */
  {
    name: "Ortho Xylene",
    image: pro27,
    formula: "C8H10",
    density: "0.88 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Di Methyl Sulphoxide (DMSO)",
    image: pro28,
    formula: "C2H6OS",
    density: "1.1 g/cm³",
    color: "Transparent Liquid",
    packaging: "225 Kg Drum",
  },
  {
    name: "Ethylene Dichloride (EDC)",
    image: pro29,
    formula: "C2H4Cl2",
    density: "1.25 g/cm³",
    color: "Colorless Liquid",
    packaging: "250 Kg Drum",
  },
  {
    name: "Benzene",
    image: pro30,
    formula: "C6H6",
    density: "0.876 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Chloroform",
    image: pro31,
    formula: "CHCl3",
    density: "1.48 g/cm³",
    color: "Colorless Liquid",
    packaging: "250 Kg Drum",
  },
  {
    name: "MTBE",
    image: pro32,
    formula: "C5H12O",
    density: "0.74 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Acrylonitrile",
    image: pro33,
    formula: "C3H3N",
    density: "0.81 g/cm³",
    color: "Colorless Liquid",
    packaging: "180 Kg Drum",
  },
  {
    name: "Butyl Acetate (BA)",
    image: pro34,
    formula: "C6H12O2",
    density: "0.88 g/cm³",
    color: "Clear Liquid",
    packaging: "180 Kg Drum",
  },

  /* Ink & Paint Solvent */
  {
    name: "NC Thinner",
    image: pro18,
    formula: "Solvent Mix",
    density: "0.85 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Paint Pass Thinner",
    image: pro19,
    formula: "Solvent Mix",
    density: "0.86 g/cm³",
    color: "Transparent Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "PU Thinner",
    image: pro20,
    formula: "Solvent Mix",
    density: "0.87 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "Reducer",
    image: pro21,
    formula: "Solvent Mix",
    density: "0.88 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "MEK",
    image: pro22,
    formula: "C4H8O",
    density: "0.805 g/cm³",
    color: "Colorless Liquid",
    packaging: "165 Kg Drum",
  },
  {
    name: "BAM",
    image: pro23,
    formula: "C6H12O2",
    density: "0.88 g/cm³",
    color: "Clear Liquid",
    packaging: "180 Kg Drum",
  },
  {
    name: "Cyclo Hexene",
    image: pro24,
    formula: "C6H10",
    density: "0.81 g/cm³",
    color: "Colorless Liquid",
    packaging: "200 L Drum",
  },
  {
    name: "DEG",
    image: pro25,
    formula: "C4H10O3",
    density: "1.12 g/cm³",
    color: "Clear Liquid",
    packaging: "225 Kg Drum",
  },
  {
    name: "MEG",
    image: pro26,
    formula: "C2H6O2",
    density: "1.11 g/cm³",
    color: "Clear Liquid",
    packaging: "225 Kg Drum",
  },
  {
    name: "MIBK",
    image: pro35,
    formula: "C6H12O",
    density: "0.80 g/cm³",
    color: "Clear Liquid",
    packaging: "165 Kg Drum",
  },
  {
    name: "Paint Thinner",
    image: pro13,
    formula: "Solvent Mix",
    density: "0.87 g/cm³",
    color: "Clear Liquid",
    packaging: "200 L Drum",
  },

  /* Powder Products */
  {
    name: "Activated Carbon",
    image: pro5,
    formula: "C",
    density: "2.0 g/cm³",
    color: "Black Powder",
    packaging: "25 Kg Bag",
  },
  {
    name: "Hyflow Powder",
    image: pro6,
    formula: "SiO2",
    density: "2.2 g/cm³",
    color: "White Powder",
    packaging: "25 Kg Bag",
  },
  {
    name: "Soda Ash Light",
    image: pro36,
    formula: "Na2CO3",
    density: "2.5 g/cm³",
    color: "White Powder",
    packaging: "50 Kg Bag",
  },

  /* Acid Products */
  {
    name: "Hydrochloric Acid (HCL)",
    image: pro15,
    formula: "HCl",
    density: "1.15 g/cm³",
    color: "Clear Acid Liquid",
    packaging: "35 Kg Can / Bulk",
  },
  {
    name: "Sulphuric Acid",
    image: pro16,
    formula: "H2SO4",
    density: "1.84 g/cm³",
    color: "Clear Acid Liquid",
    packaging: "50 Kg Drum / Bulk",
  },
  {
    name: "Nitric Acid",
    image: pro17,
    formula: "HNO3",
    density: "1.51 g/cm³",
    color: "Clear Acid Liquid",
    packaging: "35 Kg Drum",
  },

  /* Base Product */
  {
    name: "Caustic Soda Lye",
    image: pro37,
    formula: "NaOH",
    density: "1.52 g/cm³",
    color: "Colorless Liquid",
    packaging: "250 Kg Drum",
  },

  /* Other Chemicals */
  {
    name: "Hydrogen Peroxide",
    image: pro10,
    formula: "H2O2",
    density: "1.45 g/cm³",
    color: "Clear Liquid",
    packaging: "50 Kg Drum",
  },
  {
    name: "Triethylamine",
    image: pro11,
    formula: "C6H15N",
    density: "0.726 g/cm³",
    color: "Clear Liquid",
    packaging: "150 Kg Drum",
  },
  {
    name: "N Hexane",
    image: pro12,
    formula: "C6H14",
    density: "0.655 g/cm³",
    color: "Colorless Liquid",
    packaging: "180 Kg Drum",
  },
  {
    name: "Tetrahydrofuran (THF)",
    image: pro14,
    formula: "C4H8O",
    density: "0.889 g/cm³",
    color: "Clear Liquid",
    packaging: "180 Kg Drum",
  },
];

export default productDetails;
