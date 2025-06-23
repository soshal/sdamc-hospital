import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/pexels-pixabay-236380.jpg';  /*logo*/
import { FaPhone, FaUserMd, FaCalendarAlt, FaVideo, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span><FaPhone /> Emergency: +91 1234567890</span>
            </div>
            <div className="quick-links">
              <a href="/find-doctor"><FaUserMd /> Find a Doctor</a>
              <a href="/appointment"><FaCalendarAlt /> Book Appointment</a>
              <a href="/video-consult"><FaVideo /> Video Consult</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="main-header-content">
            <div className="logo">
              <img src={logo} alt="SDAMC Hospital Logo" />
              <div className="logo-text">
                <h1>SDAMC</h1>
                <p>Faith-Based Healthcare</p>
              </div>
            </div>
            
            <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/doctors">Doctors</a></li>
                  <li><a href="/patient-guide">Patient Guide</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            
            <div className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;