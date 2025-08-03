import "./Contact.css";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); 
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-header" data-aos="fade-up">
        <h1>Contact <span className="highlight">Us</span></h1>
        <p>We’d love to hear from you! Send us a message and we’ll get back to you soon.</p>
      </section>

      <div className="contact-form-wrapper" data-aos="fade-up">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit">Send Message</button>

          {submitted && <p className="success-text">✅ Message sent successfully!</p>}
        </form>

        <div className="contact-info" data-aos="fade-left">
          <h2>📍 Get in Touch</h2>
          <p><strong>Email:</strong> support@whisperpay.in</p>
          <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
          <p><strong>Support Timing:</strong> 10AM-6PM (MonSat)</p>
          <p><strong>Address:</strong> 123 Ghaziabad, 201310 India</p>
        </div>
      </div>
    </div>
  );
}
