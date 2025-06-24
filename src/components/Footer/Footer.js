// components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { title: 'About Us', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Booking', link: '/booking' },
    { title: "FAQ's", link: '/faq' },
    { title: 'Blogs', link: '/blog' },
    { title: 'Our Team', link: '/doctors' }
  ];

  const servicesLinks = [
    { title: 'Dental Care', link: '/dental' },
    { title: 'Cardiac Clinic', link: '/cardiac' },
    { title: 'Massage Therapy', link: '/therapy' },
    { title: 'Cardiology', link: '/cardiology' },
    { title: 'Precise Diagnosis', link: '/diagnosis' },
    { title: 'Ambulance Services', link: '/ambulance' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col about-col">
              <div className="footer-logo">
                <img src={logo} alt="SDAMC" />
                <div className="logo-text">
                  <h3>SDAMC</h3>
                </div>
              </div>
              <p className="footer-about">
                The Center of Excellence in Faith-Based Healthcare, Education and Lifestyle.
              </p>
              
              <div className="contact-info">
                <h4>Contact Us</h4>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+01123 456 7890</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@sdamc.org</span>
                </div>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                {servicesLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Subscribe</h4>
              <p>Stay updated with our latest news and health tips</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                />
                <button type="submit" className="btn btn-purple">
                  Subscribe Now
                </button>
              </form>
              <div className="social-links">
                <a href="/facebook"><FiFacebook /></a>
                <a href="/twitter"><FiTwitter /></a>
                <a href="/instagram"><FiInstagram /></a>
                <a href="/linkedin"><FiLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SDAMC Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;