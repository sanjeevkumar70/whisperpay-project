import React from "react";
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
  return (
    <section className="terms-section">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-intro">
          Welcome to our platform. By accessing or using our services, you agree
          to abide by the following Terms and Conditions.
        </p>

        <div className="terms-content" data-aos="fade-up">
          <div className="terms-block">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using this platform, you agree to comply with and be bound by
              these terms. If you do not agree, you must discontinue use
              immediately.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>2. Use of Our Services</h2>
            <p>
              You agree to use our services only for lawful purposes and not to
              engage in any activity that may harm the platform or other users.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password and for all activities under your account.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>4. Intellectual Property</h2>
            <p>
              All content, logos, and designs on this platform are the property
              of the company and may not be copied, used, or distributed without
              permission.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>5. Limitation of Liability</h2>
            <p>
              We are not liable for any damages arising from the use or
              inability to use the services, including indirect or incidental
              damages.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>6. Modifications</h2>
            <p>
              We reserve the right to update or change these terms at any time.
              Changes will be posted on this page with an updated date.
            </p>
          </div>

          <div className="terms-block" data-aos="fade-up">
            <h2>7. Contact Information</h2>
            <p>
              For questions regarding these Terms & Conditions, please contact
              us at: <strong>support@example.com</strong>.
            </p>
          </div>
        </div>

        <p className="terms-footer" data-aos="fade-up">
          By continuing to use our platform, you acknowledge that you have read
          and agree to these Terms & Conditions.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
