import React from "react";
import "./InvestSection.scss";

export default function InvestSection() {
  return (
    <section className="invest-section">
      <div className="content">
        <h1 data-aos="fade-up">
          Make Best <span>Invest</span> <br />
          Business Through Us
        </h1>
        <p className="subtext" data-aos="fade-up">
          Invest smartly and grow your business with Whisper.
        </p>
        <p className="description" data-aos="fade-up">
          Start your network marketing journey with Whisper. Our all-in-one
          platform offers easy setup, referral systems, and secure payment
          options to help your business thrive and scale effortlessly.
        </p>
        <button data-aos="fade-up" className="invest-button">INVEST NOW</button>
      </div>
      <div className="video-thumbnail" data-aos="zoom-in">
        <img src="https://images.unsplash.com/photo-1724780997589-4c67b98491ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="investment video" />
      </div>
    </section>
  );
}
