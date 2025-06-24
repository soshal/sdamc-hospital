// components/Services/Services.js
import React from 'react';
import './Services.css';
import { FaClinicMedical, FaProcedures, FaFlask, FaXRay, FaAmbulance, FaPills, FaHeartbeat, FaBaby } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaClinicMedical />,
      title: '24/7 Emergency Care',
      description: 'Immediate medical attention for critical conditions with specialized emergency team.'
    },
    {
      icon: <FaPills />,
      title: '24/7 Pharmacy',
      description: 'Round-the-clock access to medications with professional pharmacist guidance.'
    },
    {
      icon: <FaBaby />,
      title: '24/7 Labour Room',
      description: 'Comprehensive maternity services with neonatal care specialists available.'
    },
    {
      icon: <FaFlask />,
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing with quick and accurate results reporting.'
    },
    {
      icon: <FaXRay />,
      title: 'Radio Diagnostics',
      description: 'State-of-the-art imaging including X-ray, CT scan, MRI and ultrasound.'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'Complete cardiac care with non-invasive and interventional procedures.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Facilities & Services</h2>
        <p className="section-subtitle">
          We offer comprehensive healthcare services with state-of-the-art facilities and compassionate care.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/services" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/services" className="btn btn-purple">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default Services;