import React, { useState } from 'react';
import './about.css'
import myImage from '../../assets/camera-avatar.png'
import educationIcon from '../../assets/education.png'
import GPAIcon from '../../assets/grade.png'
import hobbiesIcon from '../../assets/hobbies.png'
import ImageModal from './ImageModal';

const About = () => {


  const carouselImages = [
    require('../../assets/Photos/Snapseed 2.jpg'),
    require('../../assets/Photos/Snapseed.jpg'),
    require('../../assets/Photos/cntower.png'),
    require('../../assets/Photos/cntowerclose.png'),
    require('../../assets/Photos/treetop.png'),
    require('../../assets/Photos/B66F5D65-1A09-40BB-94E1-647F9B9631FE_Original.jpeg'),
    require('../../assets/Photos/IMG_1285.png'),
    require('../../assets/Photos/IMG_1375.png'),
    require('../../assets/Photos/IMG_2071.png'),
    require('../../assets/Photos/IMG_2073.png'),
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={myImage}
            alt="Profile"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>Software Engineering Technology <br />@Centennial College</p>
            </div>
            <div className="details-container">
              <img
                src={GPAIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>GPA</h3>
              <p>3.66</p>
            </div>
            <div className="details-container">
              <img
                src={hobbiesIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Hobbies</h3>
              <p>Video Editing<br />Photography<br /> Exploring</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a Software Engineering student navigating the coding maze. Currently knee-deep in algorithms and projects, I'm on a mission to make tech as cool as it can get. When I'm not wrestling with code, you'll catch me snapping pics of my daily adventures. From the hustle of the city to the chill vibes of nature, my camera's always ready. Right now, I'm gearing up to dive into the world of either data analysis or web development. Currently on the lookout for an internship, so if you've got exciting projects and a spot on your team, I'm all ears. Let's connect and explore the exciting intersections of code and creativity!
            </p>
          </div>
          <div className="carousel-button-wrapper">
            {/* See My Photos! button */}
            <button className="carousel-button" onClick={handleOpenModal}>See Some Of My Photos!</button>
          </div>
          {/* Full-screen modal carousel */}
          <ImageModal images={carouselImages} show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </section >
  )
}

export default About
