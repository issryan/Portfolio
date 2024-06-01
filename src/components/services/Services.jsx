import React from 'react';
import './services.css';
import webDevImage from '../../assets/web-development.png'; 
import uiuxImage from '../../assets/ui-ux-design.png';
import photographyImage from '../../assets/photography.png';

const Services = () => {
  return (
    <section id="services" className="my-projects-section">
      <p className="section__text__p1">What I Offer</p>
      <h1 className="title">Services</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={webDevImage} alt="Web Development" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Web Development</h2>
            <p>I build responsive and dynamic websites using the latest technologies.</p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={uiuxImage} alt="UI/UX Design" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">UI/UX Design</h2>
            <p>I design user-centered interfaces and create seamless user experiences.</p>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={photographyImage} alt="Photography" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Photography</h2>
            <p>I capture moments and create stunning visual content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;