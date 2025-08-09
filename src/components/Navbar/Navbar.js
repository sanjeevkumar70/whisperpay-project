import "./Navbar.scss";
import logo from '../../assets/whisperpay.png'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
      "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const header = document.querySelector('.header-section');
    const navBar = document.querySelector('.header-section .header-container .navbar');
    const navItem = document.querySelector('.header-section .header-container .navbar .nav-links.active');
    if (navItem && navBar) {
      navBar.style.background = "#000000";
      navBar.style.padding = "8px 22px 30px 22px";
      header.style.top = "0";
    } else if (navBar) {
      navBar.style.background = "";
      navBar.style.padding = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    const token = getCookie("authToken");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else (
        setIsScrolled(false)
      )
    };
    if (location.pathname == "/") {
      window.addEventListener("scroll", handleScroll);
      setIsScrolled(false);
      document.querySelector('.header-section').style.position = ""
    } else {
      setIsScrolled(true);
      document.querySelector('.header-section').style.position = "sticky"
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, window]);

  const handleLogout = () => {
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav className={`header-section ${isScrolled ? "active" : ""}`}>
        <div className="header-container">
          <div className="navbar">
            <div className="navbar-top">
              <NavLink to="/" className="logo-link">
                <img src={logo} alt="Logo" />
              </NavLink>

              <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
              </button>
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about-page" className="nav-item" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/missions-page" className="nav-item" onClick={() => setMenuOpen(false)}>Missions</NavLink>
              <NavLink to="/blog-page" className="nav-item" onClick={() => setMenuOpen(false)}>Blog</NavLink>
              <NavLink to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</NavLink>

              {isLoggedIn ? (
                <button
                  className="nav-item login-btn logout-btn"
                  onClick={handleLogout}
                  aria-label="Logout"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="nav-item login-btn" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
