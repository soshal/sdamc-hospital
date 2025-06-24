// components/About/About.js
import React from 'react';
import './About.css';
import hospitalImage from '../../assets/pexels-pixabay-139398.jpg';
import { FaHeartbeat, FaHandsHelping, FaPrayingHands, FaHospital, FaUserMd, FaUserNurse, FaProcedures } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About SDA Medical Centre</h2>
        <p className="section-subtitle">We Treat, Jesus Heals!</p>
        
        {/* Hospital Overview */}
        <div className="hospital-overview">
          <div className="hospital-image">
            <img src={hospitalImage} alt="SDA Medical Centre" />
          </div>
          <div className="hospital-description">
            <p>
              Seventh-Day Adventist Medical Centre is a 100-bedded multi-specialty hospital 
              in the heart of Bengaluru that symbolizes compassion and competence.
            </p>
            <p>
              The Seventh-Day Adventist Medical Centre, Bengaluru, started as an outpatient 
              clinic in 1978, which expanded to a fully functional multi-specialty hospital 
              by 1981, offering more than 44 years of fruitful service to the community.
            </p>
            <p>
              Currently, the hospital is NABH entry level certified and is upgraded to a 
              100-bedded facility. It is managed by the Medical Trust of Seventh-day 
              Adventists and governed by the Southern Asia Division of Seventh-Day 
              Adventists, Hosur.
            </p>
            <p>
              With a team of 32 doctors and dedicated workforce of 140 staff, the 
              Seventh-Day Adventist Medical Centre is committed to a 'patient first' 
              approach, as it strives to combine empathy with evidence-based healthcare.
            </p>
            <div className="highlight-box">
              <FaUserMd className="highlight-icon" />
              <span>Our dedicated team for you 24×7</span>
            </div>
          </div>
        </div>
        
        {/* Mission and Vision */}
        <div className="mission-vision">
          <div className="vision-card">
            <div className="card-header">
              <FaHeartbeat className="card-icon" />
              <h3>Our Vision</h3>
            </div>
            <p>
              Deliver high quality compassionate healthcare of exceptional value to all, 
              including the poor and disadvantaged, through subsidized care and community 
              outreach.
            </p>
            <div className="highlight-quote">
              "Personalized Care that You can depend on"
            </div>
          </div>
          
          <div className="mission-card">
            <div className="card-header">
              <FaPrayingHands className="card-icon" />
              <h3>Our Mission</h3>
            </div>
            <p>
              To continue the healing ministry of Jesus by caring for the body, mind 
              and spirit of everyone we encounter.
            </p>
            <div className="values-list">
              <div className="value-item">
                <FaHandsHelping className="value-icon" />
                <span>Compassionate Care</span>
              </div>
              <div className="value-item">
                <FaHospital className="value-icon" />
                <span>Evidence-Based Practice</span>
              </div>
              <div className="value-item">
                <FaUserNurse className="value-icon" />
                <span>Patient-Centered Approach</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="stats-section">
          <h3>SDA Medical Centre at a Glance</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <FaHospital className="stat-icon" />
              <div className="stat-number">100+</div>
              <div className="stat-label">Hospital Beds</div>
            </div>
            <div className="stat-item">
              <FaUserMd className="stat-icon" />
              <div className="stat-number">32</div>
              <div className="stat-label">Expert Doctors</div>
            </div>
            <div className="stat-item">
              <FaUserNurse className="stat-icon" />
              <div className="stat-number">140+</div>
              <div className="stat-label">Dedicated Staff</div>
            </div>
            <div className="stat-item">
              <FaProcedures className="stat-icon" />
              <div className="stat-number">44+</div>
              <div className="stat-label">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;