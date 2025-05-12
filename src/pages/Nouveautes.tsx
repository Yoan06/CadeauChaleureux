import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Exemple de structure pour les articles (à remplacer par des données dynamiques plus tard)
const articles: { titre: string; date: string; }[] = [];

const Nouveautes: React.FC = () => {
  useEffect(() => {
    document.title = 'Nouveautés | Cadeau Chaleureux';
  }, []);

  return (
    <div style={{ minHeight: '80vh', background: '#f8f8f8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0' }}>
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
        {/* Illustration ou icône */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span role="img" aria-label="étoile" style={{ fontSize: '3rem', color: '#e0b973' }}>★</span>
        </div>
        <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.3rem', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>Nouveautés</h1>
        {articles.length === 0 ? (
          <Card className="shadow-sm" style={{ border: 'none', background: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
            <Card.Body>
              <Card.Text style={{ color: '#888', fontSize: '1.15rem' }}>
                Aucun article n'a encore été ajouté.<br />
                <span style={{ color: '#b5a47e' }}>Revenez bientôt pour découvrir nos nouveautés !</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            {articles.map((article, idx) => (
              <Card key={idx} className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{article.titre}</Card.Title>
                  <Card.Text style={{ color: '#888', fontSize: '0.95rem' }}>Ajouté le {article.date}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/">
            <Button variant="dark">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nouveautes; 