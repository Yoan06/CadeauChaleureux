import React, { useEffect } from 'react';
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';

// Exemples de produits récents (à remplacer par tes vraies données plus tard)
const nouveautes = {
  Sacs: {
    Hommes: [
      { nom: 'Sac à dos cuir', date: '2024-06-01', image: require('../assets/images/sacs.jpg') },
    ],
    Femmes: [
      { nom: 'Sac cabas été', date: '2024-06-02', image: require('../assets/images/sacs.jpg') },
    ],
  },
  Bijoux: {
    Hommes: [
      { nom: 'Bracelet cuir', date: '2024-06-03', image: require('../assets/images/bijoux.jpg') },
    ],
    Femmes: [
      { nom: 'Collier perles', date: '2024-06-04', image: require('../assets/images/bijoux.jpg') },
    ],
  },
  Vetements: {
    Hommes: [
      { nom: 'Chemise lin', date: '2024-06-05', image: require('../assets/images/vetements.jpg') },
    ],
    Femmes: [
      { nom: 'Robe fleurie', date: '2024-06-06', image: require('../assets/images/vetements.jpg') },
    ],
  },
};

const Nouveautes: React.FC = () => {
  useEffect(() => {
    document.title = 'Nouveautés | Cadeau Chaleureux';
  }, []);

  return (
    <div style={{ minHeight: '80vh', background: '#f8f8f8', padding: '2.5rem 0' }}>
      <h1 className="text-center fw-bold display-5 mb-5" style={{ letterSpacing: '0.03em' }}>
        <span style={{ color: '#b5a47e', fontSize: '2.1rem', marginRight: 12, marginBottom: 6, verticalAlign: 'middle' }}>★</span>Nouveautés
      </h1>
      {Object.entries(nouveautes).map(([categorie, genres], i) => (
        <div key={categorie} className="mb-5">
          <h2 className="fw-semibold" style={{ fontSize: '1.6rem', color: '#b5a47e', marginBottom: '1.2rem', marginLeft: '1rem' }}>{categorie}</h2>
          <Row>
            {Object.entries(genres).map(([genre, produits]) => (
              <Col md={6} key={genre} className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-dark me-2" style={{ fontSize: '1rem', minWidth: 70 }}>{genre}</span>
                  <div style={{ flex: 1, height: 1, background: '#e5e5e5' }} />
                </div>
                {produits.length === 0 ? (
                  <div className="text-muted fst-italic ms-3">Aucun article pour le moment.</div>
                ) : (
                  <Row xs={1} sm={2} md={2} className="g-4">
                    {produits.map((prod, idx) => (
                      <Col key={idx}>
                        <Card className="shadow-sm h-100 border-0 nouveaute-card-hover">
                          <div style={{ position: 'relative' }}>
                            <Card.Img variant="top" src={prod.image} alt={prod.nom} style={{ objectFit: 'cover', height: 140, borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                            <Badge bg="warning" text="dark" style={{ position: 'absolute', top: 10, left: 10, fontWeight: 600, fontSize: '0.95rem' }}>Nouveau</Badge>
                          </div>
                          <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                              <Card.Title className="fw-semibold" style={{ fontSize: '1.08rem' }}>{prod.nom}</Card.Title>
                              <Card.Text className="text-secondary mb-2" style={{ fontSize: '0.97rem' }}>Ajouté le {prod.date}</Card.Text>
                            </div>
                            <Button variant="outline-dark" size="sm" className="mt-2">Voir</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            ))}
          </Row>
          {i < Object.keys(nouveautes).length - 1 && (
            <hr style={{ margin: '2.5rem 0', borderTop: '2px solid #e5e5e5' }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Nouveautes; 