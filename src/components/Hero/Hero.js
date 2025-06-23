import React from 'react';
import './Hero.css';
import heroImage from '../../assets/pexels-pixabay-236380.jpg';
import { FaPhone, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>The Center of Excellence in Faith-Based Healthcare</h1>
            <p className="tagline">"We Treat, God Heals" - Sharing Jesus Christ's Healing Ministry</p>
            <p>Providing compassionate, high-quality healthcare services to our community since 1985.</p>
            <div className="hero-buttons">
              <a href="/appointment" className="btn btn-accent">
                <FaCalendarAlt /> Book Appointment
              </a>
              <a href="/emergency" className="btn">
                <FaPhone /> Emergency Care
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-cards">
        <div className="container">
          <div className="cards-container">
            <div className="hero-card">
              <div className="card-icon">
                <FaUserMd />
              </div>
              <h3>Find a Doctor</h3>
              <p>Our dedicated team of specialists is ready to serve you.</p>
              <a href="/doctors">View All Doctors →</a>
            </div>
            
            <div className="hero-card">
              <div className="card-icon">
                <FaCalendarAlt />
              </div>
              <h3>24/7 Services</h3>
              <p>Emergency, Pharmacy, and Labor Room available round the clock.</p>
              <a href="/services">Our Services →</a>
            </div>
            
            <div className="hero-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Contact Us</h3>
              <p>Have questions? Our team is here to help you anytime.</p>
              <a href="/contact">Get In Touch →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;