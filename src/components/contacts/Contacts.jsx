import React, { useState } from 'react';
import './contacts.css';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
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
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });
    alert('Thank you for reaching out!');
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
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
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