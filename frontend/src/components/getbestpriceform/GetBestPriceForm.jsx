import React from "react";
import "./getBestPriceForm.css";

const GetBestPriceForm = () => {
  return (
    <div className="get-price-form-container">
      <h2>Get Best Price</h2>
      <form
        action="https://formsubmit.co/kavalpatel98@gmail.com"
        method="POST"
        className="get-price-form"
      >
        {/* FormSubmit Hidden Inputs */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        {/* Form Fields */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default GetBestPriceForm;
