// components/About/About.js
import React from 'react';
import './About.css';
import { FaHeart, FaHandsHelping, FaClinicMedical, FaUserMd , FaArrowRight} from 'react-icons/fa';

const About = () => {
  const commitments = [
    {
      icon: <FaHeart />,
      title: "Compassionate Care",
      description: "Provide care with love and compassion following Christ's example"
    },
    {
      icon: <FaClinicMedical />,
      title: "Affordable Services",
      description: "Quality healthcare at reasonable costs for all community members"
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Health",
      description: "Support the holistic health of our entire community"
    },
    {
      icon: <FaUserMd />,
      title: "Modern Technology",
      description: "Combine advanced medical tech with faith-based values"
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Commitment to You</h2>
          <p className="section-subtitle">
            We combine cutting-edge healthcare with unwavering faith to bring hope and healing
          </p>
        </div>
        
        <div className="commitments-grid">
          {commitments.map((item, index) => (
            <div 
              className="commitment-card" 
              key={index}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="expertise-section">
          <h3>Expert Care in Every Department</h3>
          <p className="expertise-description">
            Serving with skill, compassion, and a Christ-centered heart from cardiology to women's health
          </p>
          
          <div className="department-cards">
            <div className="department-card">
              <h4>Cardiology</h4>
              <p>Comprehensive heart care with advanced diagnostics</p>
              <a href="/cardiology" className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
            
            <div className="department-card">
              <h4>Pediatrics</h4>
              <p>Specialized care for our youngest patients</p>
              <a href="/pediatrics" className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
            
            <div className="department-card">
              <h4>Gynecology & Maternity</h4>
              <p>Complete women's health services</p>
              <a href="/gynecology" className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
            
            <div className="department-card">
              <h4>Neurology</h4>
              <p>Expert care for nervous system disorders</p>
              <a href="/neurology" className="learn-more">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;