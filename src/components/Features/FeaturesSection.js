import React from "react";
import "./FeaturesSection.scss";
import {
  FaCogs,
  FaSyncAlt,
  FaUserCheck,
  FaHandsHelping,
  FaShieldAlt,
} from "react-icons/fa";

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

export default function FeaturesSection() {
  return (
    <section className="feature-grid" data-aos="fade-up">
      <h2>Why join us?</h2>
      <div className="grid-wrapper">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrap">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
