import React from 'react';
import './Services.css';
import { FaClinicMedical, FaProcedures, FaFlask, FaXRay, FaAmbulance, FaPills } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaClinicMedical />,
      title: '24/7 Emergency Care',
      description: 'Our emergency department is staffed round the clock with experienced professionals.'
    },
    {
      icon: <FaPills />,
      title: '24/7 Pharmacy',
      description: 'Get your medications anytime with our 24-hour pharmacy services.'
    },
    {
      icon: <FaProcedures />,
      title: '24/7 Labour Room',
      description: 'Dedicated maternity care available at all hours for expecting mothers.'
    },
    {
      icon: <FaFlask />,
      title: 'Laboratory Services',
      description: 'State-of-the-art diagnostic lab with quick and accurate test results.'
    },
    {
      icon: <FaXRay />,
      title: 'Radio Diagnostics',
      description: 'Advanced imaging services including X-ray, CT scan, and MRI.'
    },
    {
      icon: <FaAmbulance />,
      title: 'Ambulance Services',
      description: 'Emergency ambulance available for quick patient transport.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
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
              <a href="/services">Learn More →</a>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <a href="/services" className="btn btn-accent">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default Services;