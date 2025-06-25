// components/Testimonials/Testimonials.js
import React, { useEffect } from 'react';
import './Testimonials.css';
import testimonialBg from '../../assets/pexels-pixabay-236380.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.testimonial-parallax');
      if (parallax) {
        const scrollPosition = window.pageYOffset;
        parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Anita J.",
      role: "Cardiology Patient",
      quote: "The doctors at SDAMC treated me with care and kindness. I felt God's presence throughout my recovery."
    },
    {
      name: "Robert K.",
      role: "Neurology Patient",
      quote: "Exceptional care from skilled professionals who truly understand holistic healing."
    },
    {
      name: "Priya M.",
      role: "Maternity Patient",
      quote: "The compassionate care during my delivery made it a blessed experience for our family."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonial-parallax">
        <img src={testimonialBg} alt="Testimonial background" />
      </div>
      
      <div className="testimonial-overlay">
        <div className="container">
          <div className="section-header">
            <h2>Patient Experiences</h2>
            <p className="section-subtitle">
              Hear what our patients say about their experiences with us
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <FaQuoteLeft className="quote-icon" />
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;