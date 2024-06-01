/**
 * Student's Name: Ryan Arafeh
 * StudentID: 301239052
 * Date: May 31st 2024
 */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './modal.css';


const ImageCarousel = ({ images}) => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block mx-auto" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
