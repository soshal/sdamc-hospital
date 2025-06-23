import React from 'react';
import './ChaplinCorner.css';
import chaplin from '../../assets/pexels-pixabay-236380.jpg';
import { FaPrayingHands, FaChurch, FaHandsHelping } from 'react-icons/fa';

const ChaplinCorner = () => {
  return (
    <section className="chaplin-section">
      <div className="container">
        <div className="chaplin-content">
          <div className="chaplin-image">
            <img src={chaplin} alt="Hospital Chaplain" />
          </div>
          
          <div className="chaplin-text">
            <blockquote>
              "I can do all things through him who strengthens me." 
              <cite>Philippians 4:13</cite>
            </blockquote>
            
            <h3>Chaplin's Corner</h3>
            <p>
              Our chaplaincy services provide spiritual support to patients, families, and staff. 
              We believe in holistic healing that addresses body, mind, and spirit.
            </p>
            
            <div className="chaplin-services">
              <div className="service-item">
                <div className="service-icon">
                  <FaPrayingHands />
                </div>
                <h4>Prayer Support</h4>
                <p>Available for patients and families upon request.</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaChurch />
                </div>
                <h4>Weekly Services</h4>
                <p>Join us for worship every Sabbath in our chapel.</p>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaHandsHelping />
                </div>
                <h4>Counseling</h4>
                <p>Spiritual counseling available by appointment.</p>
              </div>
            </div>
            
            <a href="/chaplaincy" className="btn">Learn More About Our Chaplaincy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaplinCorner;