import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePolene.css';

const Home: React.FC = () => {
  return (
    <div className="home-polene-bg position-relative" style={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Section Hero */}
      <div className="hero-section d-flex flex-column align-items-center justify-content-center">
        {/* L'image est maintenant en background via le CSS */}
        <div className="hero-overlay-content">
          <h1 className="hero-title mb-3">Découvrez l'élégance et la chaleur du cadeau parfait</h1>
          <Link to="/sacs">
            <Button variant="dark" size="lg">Voir la collection de sacs</Button>
          </Link>
        </div>
      </div>
      {/* Espace entre hero et rubriques */}
      <div style={{ height: '60px' }} />
      {/* Rubriques en grandes cartes */}
      <div className="categories-fullwidth-row">
        <Link to="/sacs" className="category-card sacs-card">
          <div className="category-card-label">SACS</div>
        </Link>
        <Link to="/bijoux" className="category-card bijoux-card">
          <div className="category-card-label">BIJOUX</div>
        </Link>
        <Link to="/vetements" className="category-card vetements-card">
          <div className="category-card-label">VÊTEMENTS</div>
        </Link>
      </div>
    </div>
  );
};

export default Home; 