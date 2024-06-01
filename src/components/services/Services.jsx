import React from 'react';
import './services.css';
import webDevImage from '../../assets/web-development.png';
import uiuxImage from '../../assets/ui-ux-design.png';
import photographyImage from '../../assets/photography.png';

const Services = () => {
  return (
    <section id="services">
      <p className="section__text__p1">What I Offer</p>
      <h1 className="title">Services</h1>
      <div className="services-container">
        <div className="service">
          <img src={webDevImage} alt="Web Development" />
          <h3>Web Development</h3>
          <p>I build responsive and dynamic websites using the latest technologies.</p>
        </div>
        <div className="service">
          <img src={uiuxImage} alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>I design user-centered interfaces and create seamless user experiences.</p>
        </div>
        <div className="service">
          <img src={photographyImage} alt="Photography" />
          <h3>Photography</h3>
          <p>I capture moments and create stunning visual content.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;