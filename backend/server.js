// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix for __dirname (ES module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());

/* ================= API ================= */
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, location, product, quantity, message } = req.body;

  if (!name || !email || !phone || !location || !product || !quantity || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // env
        pass: process.env.EMAIL_PASS, // env
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 New Chemical Inquiry from ${name}`,
      html: `
        <h2>New Customer Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity / Size:</strong> ${quantity}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p><i>📌 Sent from Shell & Pearl Chemicals website</i></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "✅ Inquiry sent successfully!",
    });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

/* ================= SERVE VITE DIST ================= */
const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
