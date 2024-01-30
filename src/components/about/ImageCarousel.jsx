import React from 'react';
import { Carousel } from 'react-bootstrap';
import './modal.css';


const ImageCarousel = ({ images}) => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
