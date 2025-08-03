import React from "react";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About WhisperPay</h2>
        <p className="fade-in">
          WhisperPay was created with one goal:
        </p>
        <div className="highlight-box slide-up">
          <strong>
            To offer a reward system that runs silently in the background,
            giving users stress-free earnings without overhyped promises or
            visible complexity.
          </strong>
        </div>
        <p className="fade-in delay">
          Our system uses a closed-loop engine with smart logic that repositions
          user IDs and schedules internal rewards – consistently, automatically,
          and fairly.
        </p>
        <p className="about-highlight zoom-in">
          We believe in clarity without exposure, and rewards without shouting
          about it.
        </p>
      </div>
    </section>
  );
}
