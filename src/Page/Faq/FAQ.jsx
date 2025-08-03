import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this MLM platform about?",
      answer:
        "Our platform helps you build and manage your network, offering tools for growth, communication, and rewards."
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes! We follow strict security measures, including encryption and secure servers, to protect your data."
    },
    {
      question: "How do I join the program?",
      answer:
        "Simply sign up on our website, complete your profile, and start connecting with your network right away."
    },
    {
      question: "Can I use this on mobile devices?",
      answer:
        "Absolutely! Our platform is fully responsive and works smoothly on smartphones, tablets, and desktops."
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach us anytime via support@example.com or through the Contact Us page on the website."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" data-aos="fade-up">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-intro">
          Find quick answers to the most common questions about our platform.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
