import React from 'react';
import { Carousel } from 'react-bootstrap';
import './about.css'
import image1 from '../../assets/Photos/IMG_0843.jpg';
import image2 from '../../assets/Photos/Snapseed 2.jpg';
import image3 from '../../assets/Photos/Snapseed.jpg';

const ImageCarousel = () => {
    const images = [image1, image2, image3];
  
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