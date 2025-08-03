import './Register.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    referralId: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // 🔹 Validation rules
  const validateField = (name, value) => {
    let message = "";
    switch (name) {
      case "name":
        if (!value.trim()) message = "Full name is required";
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) message = "Enter a valid email";
        break;
      case "phone":
        if (!/^[6-9]\d{9}$/.test(value)) message = "Enter a valid 10-digit phone";
        break;
      case "password":
        if (value.length < 6) message = "Password must be at least 6 characters";
        break;
      default:
        break;
    }
    return message;
  };

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change
    const errorMsg = validateField(name, value);
    setErrors({ ...errors, [name]: errorMsg });
  };

  // 🔹 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submit
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) newErrors[field] = errorMsg;
    });

    setErrors(newErrors);

    // ✅ Only proceed if there are no validation errors
    if (Object.keys(newErrors).length === 0) {
      const fakeToken = "secure-jwt-token-67890";
      onRegister(fakeToken);
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        {/* Referral ID (optional) */}
        <input
          type="text"
          name="referralId"
          placeholder="Referral ID (optional)"
          value={formData.referralId}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
