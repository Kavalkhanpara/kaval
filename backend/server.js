// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ===== FIX __dirname (ESM) ===== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===== MIDDLEWARE ===== */
app.use(cors({
  origin: "*",   // frontend + render domain allow
}));
app.use(express.json()); // bodyParser NOT needed in new Express

/* ================= API ================= */
app.post("/api/contact", async (req, res) => {
  const {
    name,
    email,
    phone,
    location,
    product,
    quantity,
    message,
  } = req.body;

  if (!name || !email || !phone || !location || !product || !quantity || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    /* ===== Nodemailer ===== */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Shell & Pearl Chemicals" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Chemical Inquiry - ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Product:</b> ${product}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Message:</b> ${message}</p>
        <hr/>
        <p>Shell & Pearl Chemicals</p>
      `,
    });

    return res.json({
      success: true,
      message: "Inquiry sent successfully",
    });

  } catch (error) {
    console.error("❌ Mail Error:", error);
    return res.status(500).json({
      success: false,
      message: "Mail sending failed",
    });
  }
});

/* ================= SERVE FRONTEND ================= */
const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
