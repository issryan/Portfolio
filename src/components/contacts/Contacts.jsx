/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React, { useState } from 'react';
import './contacts.css';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Reset the form
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
    alert('Thank you for reaching out!');
    // Scroll to the top of the page after form submission
    window.location.href = '#home';
  };

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={emailIcon} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:arafehryan@gmail.com" className='contact-info'>arafehryan@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/ryanarafeh" className='contact-info'>LinkedIn</a></p>
        </div>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-color-1">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;