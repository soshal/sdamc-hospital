// components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/pexels-pixabay-139398.jpg';
import testimonial2 from '../../assets/pexels-pixabay-139398.jpg';
import testimonial3 from '../../assets/pexels-pixabay-40568.jpg';
import { FaQuoteLeft, FaPlay } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: 'Rajesh Kumar',
      role: 'Patient',
      quote: 'The care I received at SDAMC was exceptional. The doctors took time to listen and explain everything clearly.'
    },
    {
      image: testimonial2,
      name: 'Priya Sharma',
      role: 'Patient',
      quote: 'The spiritual atmosphere combined with excellent medical care made my recovery peaceful and complete.'
    },
    {
      image: testimonial3,
      name: 'Dr. Amit Patel',
      role: 'Referring Physician',
      quote: 'I confidently refer my patients to SDAMC knowing they will receive compassionate, high-quality care.'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Patient Experiences</h2>
        <p className="section-subtitle">
          Hear what our patients and partners say about their experiences with us.
        </p>
        
        <div className="testimonials-content">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="video-testimonials">
            <h3>Video Testimonials</h3>
            <div className="video-grid">
              <div className="video-thumbnail">
                <div className="play-overlay">
                  <FaPlay />
                </div>
              </div>
              <div className="video-thumbnail">
                <div className="play-overlay">
                  <FaPlay />
                </div>
              </div>
            </div>
            <a href="/testimonials" className="btn btn-teal">View More Videos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;