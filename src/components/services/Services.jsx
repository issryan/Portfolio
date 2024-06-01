/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React from 'react';
import './services.css';
import webDevImage from '../../assets/web-development.png'; 
import uiuxImage from '../../assets/ui-ux-design.png';
import photographyImage from '../../assets/photography.png';

const Services = () => {
  return (
    <section id="services" className="my-services-section">
      <p className="section__text__p1">What I Offer</p>
      <h1 className="title">Services</h1>
      <div className="services-details-container">
        <div className="services-containers">
          <div className="services-details color-container">
            <div className="article-container">
              <img src={webDevImage} alt="Web Development" className="service-img" />
            </div>
            <h2 className="service-title">Web Development</h2>
            <p className='service-subtitle'>I build responsive and dynamic websites using the latest technologies.</p>
          </div>
          <div className="services-details color-container">
            <div className="article-container">
              <img src={uiuxImage} alt="UI/UX Design" className="service-img" />
            </div>
            <h2 className="experience-sub-title service-title">UI/UX Design</h2>
            <p className='service-subtitle'>I design user-centered interfaces and create seamless user experiences.</p>
          </div>
          <div className="services-details color-container">
            <div className="article-container">
              <img src={photographyImage} alt="Photography" className="service-img" />
            </div>
            <h2 className="experience-sub-title service-title">Photography</h2>
            <p className='service-subtitle'>I capture moments and create stunning visual content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;