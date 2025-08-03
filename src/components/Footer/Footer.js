import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" data-aos="zoom-in">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/missions">Missions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>My Products</h4>
          <ul>
            <li><Link to="/product1">Product 1</Link></li>
            <li><Link to="/product4">Product 4</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support & Company</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/term-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MLM Company. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://facebook.com/mlmcompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="https://twitter.com/mlmcompany" target="_blank" rel="noopener noreferrer" aria-label="Twitter">TW</a>
          <a href="https://instagram.com/mlmcompany" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
        </div>
      </div>
    </footer>
  );
}
