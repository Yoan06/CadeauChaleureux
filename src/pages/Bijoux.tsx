import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bijoux: React.FC = () => (
  <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8' }}>
    <h1 style={{ fontWeight: 600, fontSize: '2.2rem', marginBottom: '1rem' }}>BIJOUX</h1>
    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', maxWidth: 500, textAlign: 'center' }}>
      Explorez nos créations de bijoux raffinés pour sublimer votre style au quotidien.
    </p>
    <Link to="/">
      <Button variant="dark">Retour à l'accueil</Button>
    </Link>
  </div>
);

export default Bijoux; 