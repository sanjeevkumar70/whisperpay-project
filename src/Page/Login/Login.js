import './Login.css';
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
    userType: "user" // Default selected
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validateForm();
  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length > 0) return;

  //   // ✅ Dummy auth condition
  //   if (formData.username !== "" && formData.password !== "") {
  //     const fakeToken = "secure-jwt-token-12345";
  //     onLogin(fakeToken, formData.userType); // optional: pass userType to parent

  //     // ✅ Redirect based on userType
  //     if (formData.userType === "admin") {
  //       navigate("/admin/dashboard");
  //       console.log("asasas")
  //     } else {
  //       navigate("/user/dashboard");
  //       console.log("object")
  //     }
  //   } else {
  //     setErrors({ form: "Invalid username or password" });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          role: formData.userType

        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          padding: '1em',       
          text: errorData.message,
          timerProgressBar: true,
          backdrop: true,
          customClass: {
            popup: 'small-popup'
          }
        });
        return;
      }

      const data = await response.json();

      onLogin(data.token, data.role);

      Swal.fire({
          padding: '1em',       
        icon: "success",
        title: "Login Successful",
        showConfirmButton: true,
      });

      if (data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
      });
      console.error("Login error:", error);
    }
  };


  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="login-form">

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error-text">{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        {/* 🔽 User Type Dropdown */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="user-type-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
        </div>

        {errors.form && <p className="error-text">{errors.form}</p>}

        <button type="submit">Login</button>

        <p className="signup-text">
          Don’t have an account? <Link to="/register" className="signup-link">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
