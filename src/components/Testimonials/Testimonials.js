import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/pexels-pixabay-139398.jpg';
import testimonial2 from '../../assets/pexels-pixabay-236380.jpg';
import testimonial3 from '../../assets/pexels-pixabay-236380.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

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
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          Hear what our patients and partners say about their experiences with us.
        </p>
        
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
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <a href="/testimonials" className="btn">View More Testimonials</a>
          <a href="/survey" className="btn btn-accent" style={{ marginLeft: '15px' }}>Share Your Experience</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;