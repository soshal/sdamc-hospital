import React from 'react';
import './Footer.css';
import logo from '../../assets/pexels-pixabay-236380.jpg';  /*logo*/
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone ,FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { title: 'Home', link: '/' },
    { title: 'About Us', link: '/about' },
    { title: 'Services', link: '/services' },
    { title: 'Doctors', link: '/doctors' },
    { title: 'Patient Guide', link: '/patient-guide' },
    { title: 'Contact', link: '/contact' }
  ];

  const servicesLinks = [
    { title: 'Emergency Care', link: '/emergency' },
    { title: 'Pharmacy', link: '/pharmacy' },
    { title: 'Labor Room', link: '/labor-room' },
    { title: 'Laboratory', link: '/laboratory' },
    { title: 'Radio Diagnostics', link: '/radio-diagnostics' },
    { title: 'Health Packages', link: '/health-packages' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col about-col">
              <div className="footer-logo">
                <img src={logo} alt="SDAMC Logo" />
                <div className="logo-text">
                  <h3>SDAMC</h3>
                  <p>Faith-Based Healthcare</p>
                </div>
              </div>
              <p className="footer-about">
                The Center of Excellence in Faith-Based Healthcare, Education and Lifestyle.
              </p>
              <div className="social-links">
                <a href="/facebook"><FaFacebook /></a>
                <a href="/twitter"><FaTwitter /></a>
                <a href="/instagram"><FaInstagram /></a>
                <a href="/linkedin"><FaLinkedin /></a>
                <a href="/youtube"><FaYoutube /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((item, index) => (
                  <li key={index}><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                {servicesLinks.map((item, index) => (
                  <li key={index}><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <span className="contact-icon"><FaMapMarkerAlt /></span>
                  <span>123 Healing Street, Healthville, HV 123456</span>
                </li>
                <li>
                  <span className="contact-icon"><FaPhone /></span>
                  <span>+91 1234567890</span>
                </li>
                <li>
                  <span className="contact-icon"><FaEnvelope /></span>
                  <span>info@sdamc.org</span>
                </li>
              </ul>
              
              <h4 style={{ marginTop: '20px' }}>Newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} SDAMC Hospital. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;