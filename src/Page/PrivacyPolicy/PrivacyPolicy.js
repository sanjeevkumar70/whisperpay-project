import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our platform.
        </p>

        <div className="policy-section" data-aos="fade-up">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address,
            phone number, and payment details when you register or make
            transactions. We may also collect non-personal data like browser
            type, device information, and cookies for improving user experience.
          </p>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To manage your account and provide our services</li>
            <li>To process payments securely</li>
            <li>To communicate updates, promotions, and important notices</li>
            <li>To improve and personalize your experience on our site</li>
          </ul>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell or trade your personal information. We may share your
            information with trusted service providers (e.g., payment gateways)
            strictly for operational purposes, or if required by law.
          </p>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>4. Data Protection</h2>
          <p>
            We use encryption, secure servers, and strict access controls to
            protect your information from unauthorized access, alteration, or
            disclosure.
          </p>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>5. Cookies & Tracking</h2>
          <p>
            Our website uses cookies to improve functionality and enhance your
            experience. You can choose to disable cookies in your browser
            settings, but some features may not function properly.
          </p>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to request access, corrections, or deletion of
            your personal data. To exercise these rights, please contact us at:
            <strong> support@example.com</strong>.
          </p>
        </div>

        <div className="policy-section" data-aos="fade-up">
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted here with a revised date for transparency.
          </p>
        </div>

        <p className="privacy-footer" data-aos="fade-up">
          By using our platform, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
