// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

/* ===== FIX __dirname (ESM) ===== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ===== MIDDLEWARE ===== */
app.use(cors({ origin: "*" }));
app.use(express.json());

/* ================= CONTACT API ================= */
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, location, product, quantity, message } = req.body;

  if (!name || !email || !phone || !location || !product || !quantity || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    /* ===== BREVO SMTP (RENDER SAFE) ===== */
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_SMTP_USER,   // a145dd001@smtp-brevo.com
        pass: process.env.BREVO_SMTP_PASS,   // SMTP KEY
      },
    });

    await transporter.sendMail({
      from: `"Shell & Pearl Chemicals" <${process.env.BREVO_SENDER}>`,
      to: process.env.BREVO_RECEIVER,
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
      message: "✅ Inquiry sent successfully",
    });

  } catch (error) {
    console.error("❌ Mail Error:", error);
    return res.status(500).json({
      success: false,
      message: "❌ Mail sending failed",
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
