import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Vetements: React.FC = () => (
  <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8' }}>
    <h1 style={{ fontWeight: 600, fontSize: '2.2rem', marginBottom: '1rem' }}>VÊTEMENTS</h1>
    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', maxWidth: 500, textAlign: 'center' }}>
      Parcourez notre gamme de vêtements pour un look chic et confortable en toute saison.
    </p>
    <Link to="/">
      <Button variant="dark">Retour à l'accueil</Button>
    </Link>
  </div>
);

export default Vetements; 