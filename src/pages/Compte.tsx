import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Compte: React.FC = () => {
  useEffect(() => {
    document.title = 'Mon Compte | Cadeau Chaleureux';
  }, []);

  return (
    <div style={{ minHeight: '80vh', background: '#f8f8f8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span role="img" aria-label="utilisateur" style={{ fontSize: '3rem', color: '#b5a47e' }}>👤</span>
        </div>
        <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.3rem', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>Mon Compte</h1>
        <Card className="mb-4 shadow-sm" style={{ border: 'none', background: '#fff', padding: '1.5rem 1rem' }}>
          <Card.Body>
            <Card.Title>Historique de commandes</Card.Title>
            <Card.Text style={{ color: '#888' }}>
              Vous n'avez pas encore passé de commande.<br />
              Vos commandes s'afficheront ici.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow-sm" style={{ border: 'none', background: '#fff', padding: '1.5rem 1rem' }}>
          <Card.Body>
            <Card.Title>Mon panier</Card.Title>
            <Card.Text style={{ color: '#888' }}>
              Votre panier est vide.<br />
              Les articles ajoutés s'afficheront ici.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-4 shadow-sm" style={{ border: 'none', background: '#fff', padding: '1.5rem 1rem' }}>
          <Card.Body>
            <Card.Title>Modes de paiement</Card.Title>
            <Card.Text style={{ color: '#888' }}>
              Vous pourrez choisir votre mode de paiement ici.<br />
              (Section à compléter prochainement)
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

export default Compte; 