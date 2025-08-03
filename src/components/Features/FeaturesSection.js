import React from "react";
import { FaCogs, FaSyncAlt, FaUserCheck, FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import "./FeaturesSection.scss";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaCogs />,
      title: "Auto-Rotation Engine",
      desc: "No manual work, no confusion",
    },
    {
      icon: <FaSyncAlt />,
      title: "Smart ID Looping System",
      desc: "Re-joins you silently to keep you earning",
    },
    {
      icon: <FaUserCheck />,
      title: "Simple Entry",
      desc: "Start with just Rs.900",
    },
    {
      icon: <FaHandsHelping />,
      title: "No Selling, No Referrals",
      desc: "Consistent rewards without pressure",
    },
    {
      icon: <FaShieldAlt />,
      title: "Private & Controlled",
      desc: "System logic is internal and stable",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-heading">Why Join WhisperPay?</h2>

        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card fade-in">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <p className="cta-text">Ready to start earning silently?</p>
          <button className="cta-button">Join Now</button>
        </div>
      </div>
    </section>
  );
}
