// components/Doctors/Doctors.js
import React from 'react';
import './Doctors.css';
import doctor1 from '../../assets/image copy.png';
import doctor2 from '../../assets/image copy.png';
import doctor3 from '../../assets/image copy.png';
import doctor4 from '../../assets/image copy.png';
import { FaUserMd, FaClinicMedical, FaStethoscope } from 'react-icons/fa';

const Doctors = () => {
  const doctors = [
    {
      image: doctor1,
      name: "Dr. Shelly Johnson",
      specialty: "Dermatologist",
      bio: "Specializing in skin health with 12 years of experience",
      icon: <FaUserMd />
    },
    {
      image: doctor2,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      bio: "Expert in heart care with advanced interventional techniques",
      icon: <FaClinicMedical />
    },
    {
      image: doctor3,
      name: "Dr. Priya Patel",
      specialty: "Gynecologist",
      bio: "Compassionate care for women's health at all life stages",
      icon: <FaStethoscope />
    },
    {
      image: doctor4,
      name: "Dr. Rajesh Kumar",
      specialty: "Neurologist",
      bio: "Specialized in nervous system disorders and treatments",
      icon: <FaClinicMedical />
    }
  ];

  return (
    <section className="doctors-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Expert Doctors</h2>
          <p className="section-subtitle">
            Highly trained medical professionals providing the best possible care
          </p>
        </div>
        
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="doctor-image">
                    <img src={doctor.image} alt={doctor.name} />
                  </div>
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="specialty">{doctor.specialty}</p>
                    <div className="icon-container">
                      {doctor.icon}
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <p className="bio">{doctor.bio}</p>
                  <a href="/appointment" className="btn btn-teal">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;