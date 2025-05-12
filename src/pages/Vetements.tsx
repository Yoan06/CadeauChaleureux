import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Vetements: React.FC = () => {
  useEffect(() => {
    document.title = 'Vêtements | Cadeau Chaleureux';
  }, []);

  return (
    <div style={{ minHeight: '80vh', background: '#f8f8f8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span role="img" aria-label="vêtements" style={{ fontSize: '3rem', color: '#b5a47e' }}>👗</span>
        </div>
        <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.3rem', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>VÊTEMENTS</h1>
        <Card className="shadow-sm" style={{ border: 'none', background: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <Card.Body>
            <Card.Text style={{ color: '#555', fontSize: '1.15rem' }}>
              Parcourez notre gamme de vêtements pour un look chic et confortable en toute saison.
            </Card.Text>
          </Card.Body>
        </Card>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/">
            <Button variant="dark">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vetements; 