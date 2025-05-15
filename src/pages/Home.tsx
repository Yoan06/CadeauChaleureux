import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePolene.css';

const carouselImages = [
  require('../assets/images/ppp.png'),
  require('../assets/images/bijoux.jpg'),
  require('../assets/images/vetements.jpg'),
];

const categories = [
  {
    label: 'NOUVEAUTÉS',
    to: '/nouveautes',
    img: require('../assets/images/nouveautes.jpg'),
  },
  {
    label: 'SACS',
    to: '/sacs',
    img: require('../assets/images/sacs.jpg'),
  },
  {
    label: 'BIJOUX',
    to: '/bijoux',
    img: require('../assets/images/bijoux.jpg'),
  },
  {
    label: 'VÊTEMENTS',
    to: '/vetements',
    img: require('../assets/images/vetements.jpg'),
  },
  {
    label: 'HOMMES',
    to: '/hommes',
    img: require('../assets/images/hommes.jpg'),
  },
  {
    label: 'FEMMES',
    to: '/femmes',
    img: require('../assets/images/femmes.jpg'),
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-polene-bg position-relative" style={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Barre de message défilant */}
      <div className="marquee-bar">
        <div className="marquee-content">
          Bienvenue sur notre boutique ! Profitez de nos nouveautés.
        </div>
      </div>
      <Carousel fade interval={5000} className="home-carousel">
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 home-carousel-img"
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ maxHeight: '100vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Section catégories sous le carrousel */}
      <div className="categories-fullwidth-row" style={{ marginTop: 0, background: '#fff', padding: '2.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {categories.map((cat, idx) => (
          <Link to={cat.to} key={cat.label} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ width: 220, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', borderRadius: 12, overflow: 'hidden', background: '#fafafa', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <img src={cat.img} alt={cat.label} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: '1.1rem 0.5rem', textAlign: 'center', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em' }}>{cat.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home; 