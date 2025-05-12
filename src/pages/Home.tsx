import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomePolene.css';

const carouselImages = [
  require('../assets/images/ppp.png'),
  require('../assets/images/bijoux.jpg'),
  require('../assets/images/vetements.jpg'),
];

const Home: React.FC = () => {
  return (
    <div className="home-polene-bg position-relative" style={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Carousel fade interval={5000} className="home-carousel">
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 home-carousel-img"
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ maxHeight: 420, objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home; 