import React from 'react';
import './About.css';
import aboutImage from '../../assets/pexels-pixabay-139398.jpg';
import { FaHeartbeat, FaHandsHelping, FaPrayingHands } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About SDAMC</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="SDAMC Hospital" />
          </div>
          
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>To provide quality healthcare services in a compassionate, Christ-like manner, promoting wellness and healing for the whole person - body, mind, and spirit.</p>
            
            <h3>Our Values</h3>
            <div className="values">
              <div className="value-item">
                <div className="value-icon">
                  <FaHeartbeat />
                </div>
                <h4>Compassionate Care</h4>
                <p>Treating every patient with dignity, respect, and empathy.</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <FaHandsHelping />
                </div>
                <h4>Service Excellence</h4>
                <p>Delivering the highest standard of medical care with integrity.</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <FaPrayingHands />
                </div>
                <h4>Faith Integration</h4>
                <p>Incorporating spiritual care into our healing ministry.</p>
              </div>
            </div>
            
            <a href="/about" className="btn">Learn More About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;