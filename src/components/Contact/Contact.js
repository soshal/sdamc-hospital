// components/Contact/Contact.js
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We're here to answer your questions and provide the care you need.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>123 Healing Street, Healthville, HV 123456</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 123 456 7890 (General)</p>
                <p>+91 987 654 3210 (Emergency)</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>info@sdamc.org</p>
                <p>appointments@sdamc.org</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-text">
                <h4>Hours</h4>
                <p>24/7 Emergency Services</p>
                <p>OPD: Mon-Sat, 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Department</option>
                  <option value="general">General Inquiry</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="obgyn">Obstetrics & Gynecology</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-purple">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566218148689!2d77.22702231508238!3d28.61743098242576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9db4d07%3A0x5a1e6e6b199e5353!2sAIIMS%20Hospital!5e0!3m2!1sen!2sin!4v1624456789012!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default Contact;