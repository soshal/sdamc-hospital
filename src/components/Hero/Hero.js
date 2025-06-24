// components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import heroImage from '../../assets/pexels-1222300-2324837.jpg';
import { FaPlay, FaUserMd, FaCalendarAlt, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Hospital background" />
        <div className="video-overlay">
          <button className="play-btn">
            <FaPlay />
          </button>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>The Center of Excellence in Faith-Based Healthcare</h1>
            <p className="tagline">"We Treat, God Heals" - Sharing Jesus Christ's Healing Ministry</p>
            <div className="hero-buttons">
              <a href="/appointment" className="btn btn-purple">
                <FaCalendarAlt /> Book Appointment
              </a>
              <a href="/emergency" className="btn btn-teal">
                <FaPhone /> Emergency Care
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-cards">
        <div className="container">
          <div className="cards-grid">
            <div className="info-card">
              <div className="card-icon">
                <FaUserMd />
              </div>
              <h3>Find a Doctor</h3>
              <p>Our dedicated team of specialists</p>
              <a href="/doctors">View All →</a>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <FaCalendarAlt />
              </div>
              <h3>24/7 Services</h3>
              <p>Emergency, Pharmacy, Labor Room</p>
              <a href="/services">Learn More →</a>
            </div>
            
            <div className="info-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Contact Us</h3>
              <p>Have questions? We're here to help</p>
              <a href="/contact">Get In Touch →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;