import React from 'react';
import './Doctors.css';
import doctor1 from '../../assets/pexels-1222300-2324837.jpg';
import doctor2 from '../../assets/pexels-1222300-2324837.jpg';
import doctor3 from '../../assets/pexels-1222300-2324837.jpg';
import { FaUserMd, FaStethoscope, FaHospital, FaHeartbeat, FaChild, FaFemale } from 'react-icons/fa';

const Doctors = () => {
  const doctors = [
    {
      image: doctor1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      bio: 'Board-certified cardiologist with 15 years of experience in heart care.',
      icon: <FaHeartbeat />
    },
    {
      image: doctor2,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      bio: 'Specializing in child healthcare with a compassionate approach.',
      icon: <FaChild />
    },
    {
      image: doctor3,
      name: 'Dr. Priya Patel',
      specialty: 'Obstetrics & Gynecology',
      bio: 'Expert in women\'s health with a focus on holistic care.',
      icon: <FaFemale />
    }
  ];

  return (
    <section className="doctors-section">
      <div className="container">
        <h2 className="section-title">Our Dedicated Doctors</h2>
        <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          Meet our team of experienced healthcare professionals dedicated to your wellbeing.
        </p>
        
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-overlay">
                  <div className="overlay-content">
                    <p>{doctor.bio}</p>
                    <a href="/appointment" className="btn">Book Appointment</a>
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
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <a href="/doctors" className="btn btn-accent">View All Doctors</a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;