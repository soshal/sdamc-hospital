// components/Hero/Hero.js
import React, { useEffect, useState } from 'react';
import './Hero.css';
import heroImage from '../../assets/pexels-1222300-2324837.jpg';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ["Compassionate Care", "Medical Excellence", "Faith-Based Healing"];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeEffect = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 150);
    };

    typeEffect();
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Hospital background" />
        <div className="video-overlay">
          <button className="play-btn" aria-label="Play video">
            <FaPlay />
          </button>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>The Heart Behind Our Care</h1>
            <div className="typing-container">
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="tagline">
              At SDAMC, our goal is more than just providing medical care. We aim to heal the body, 
              uplift the spirit, and serve every individual with Christ's compassion.
            </p>
            <div className="hero-buttons">
              <a href="/appointment" className="btn btn-purple pulse-effect">
                Book Appointment <FaArrowRight />
              </a>
              <a href="/services" className="btn btn-teal">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;