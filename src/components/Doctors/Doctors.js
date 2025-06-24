// components/Doctors/Doctors.js
import React from 'react';
import './Doctors.css';
import doctor1 from '../../assets/pexels-1222300-2324837.jpg';
import doctor2 from '../../assets/pexels-pixabay-236380.jpg';
import doctor3 from '../../assets/pexels-pixabay-236380.jpg';
import { FaUserMd, FaStethoscope, FaHospital, FaHeartbeat } from 'react-icons/fa';

const Doctors = () => {
  const doctors = [
    {
      image: doctor1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      icon: <FaHeartbeat />
    },
    {
      image: doctor2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      experience: '12 years',
      icon: <FaStethoscope />
    },
    {
      image: doctor3,
      name: 'Dr. Priya Patel',
      specialty: 'Obstetrics & Gynecology',
      experience: '10 years',
      icon: <FaHospital />
    }
  ];

  return (
    <section className="doctors-section">
      <div className="container">
        <h2 className="section-title">Our Dedicated Doctors</h2>
        <p className="section-subtitle">
          Meet our team of experienced healthcare professionals dedicated to your wellbeing.
        </p>
        
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-overlay">
                  <div className="overlay-content">
                    <p>{doctor.experience} of experience</p>
                    <a href="/appointment" className="btn btn-teal">Book Appointment</a>
                  </div>
                </div>
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="doctor-icon">
                  {doctor.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/doctors" className="btn btn-purple">View All Doctors</a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;