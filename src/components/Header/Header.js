// components/Header/Header.js
import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import { FaPhone, FaUserMd, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaPhone /> Emergency: +91 123 456 7890</span>
              <span>Open 24/7</span>
            </div>
            <div className="quick-links">
              <a href="/find-doctor"><FaUserMd /> Find a Doctor</a>
              <a href="/appointment"><FaCalendarAlt /> Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src={logo} alt="SDAMC Hospital" />
              <div className="logo-text">
                <h1>SDAMC</h1>
                <p>Faith-Based Healthcare</p>
              </div>
            </div>
            
            <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/doctors">Doctors</a></li>
                <li><a href="/patient-guide">Patient Guide</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            
            <div className="nav-buttons">
              <a href="/video-consult" className="btn btn-purple">
                Contact Us <FaPhone />
              </a>
            </div>
            
            <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;