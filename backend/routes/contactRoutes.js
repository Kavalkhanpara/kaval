import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send-mail", async (req, res) => {
  const { name, email, mobile, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shellandpearlchemicals@gmail.com",
        pass: "czsl mowr wfde rcbv",
      },
    });

    const mailOptions = {
      from: "shellandpearlchemicals@gmail.com",
      to: "shellandpearlchemicals@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Message Sent Successfully!" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email sending failed" });
  }
});

export default router;
