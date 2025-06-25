// components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Days of the month
    for (let i = 1; i <= totalDays; i++) {
      const isSelected = selectedDate && 
                         selectedDate.getDate() === i && 
                         selectedDate.getMonth() === currentMonth && 
                         selectedDate.getFullYear() === currentYear;
      
      days.push(
        <div 
          key={`day-${i}`}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDate(new Date(currentYear, currentMonth, i))}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>We Are Always Here To Support Your Health</h2>
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact With Us
            </button>
            <button 
              className={`tab-btn ${activeTab === 'appointment' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointment')}
            >
              Book An Appointment
            </button>
          </div>
        </div>
        
        <div className="contact-content">
          {activeTab === 'contact' ? (
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+91 12345 67890</p>
                  <p>Emergency: +91 98765 43210</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>info@sdamc.org</p>
                  <p>emergency@sdamc.org</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>9, Spencer Rd, Cleveland Town, Frazer Town, Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="appointment-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                
                <div className="calendar-container">
                  <div className="calendar-header">
                    <button type="button" className="nav-btn" onClick={handlePrevMonth}>
                      &lt;
                    </button>
                    <h4>{months[currentMonth]} {currentYear}</h4>
                    <button type="button" className="nav-btn" onClick={handleNextMonth}>
                      &gt;
                    </button>
                  </div>
                  
                  <div className="calendar-weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                  </div>
                  
                  <div className="calendar-days">
                    {renderCalendar()}
                  </div>
                </div>
                
                <div className="time-slots">
                  <h4>Available Time Slots</h4>
                  <div className="slots-grid">
                    {['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM'].map(time => (
                      <button 
                        key={time} 
                        type="button" 
                        className="time-slot"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button type="submit" className="btn btn-purple">
                  <FaCalendarAlt /> Book Appointment
                </button>
              </form>
            </div>
          )}
          
          <div className="map-container">
            <iframe 
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.527678208473!2d77.59331331530447!3d12.999518990835728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d9a7a3a4a9%3A0x6b0f6f9b9b9b9b9b!2sSeventh%20Day%20Adventist%20Medical%20Center!5e0!3m2!1sen!2sin!4v1624456789012!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;