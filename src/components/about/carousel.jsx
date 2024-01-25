import React from 'react';
import { Carousel } from 'react-bootstrap';
import './about.css'
import image1 from '../../assets/Photos/B66F5D65-1A09-40BB-94E1-647F9B9631FE_Original.jpeg';
import image2 from '../../assets/Photos/Snapseed 2.jpg';
import image3 from '../../assets/Photos/Snapseed.jpg';
import image4 from '../../assets/Photos/cntower.png';
import image5 from '../../assets/Photos/cntowerclose.png';
import image6 from '../../assets/Photos/IMG_1116.jpg';
import image7 from '../../assets/Photos/IMG_1286.jpg';
import image8 from '../../assets/Photos/IMG_1375.jpg';
import image9 from '../../assets/Photos/IMG_2071.jpg';
import image10 from '../../assets/Photos/treetop.png';


const ImageCarousel = () => {
    const images = [image1, image2, image3,image3,image4,image5,image6,image7,image8,image9,image10];
  
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