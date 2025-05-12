import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>CadeauChaleureux</h5>
            <p>Votre destination pour des cadeaux uniques et personnalisés.</p>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Accueil</Link></li>
              <li><Link to="/products" className="text-light">Produits</Link></li>
              <li><Link to="/about" className="text-light">À propos</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@cadeauchaleureux.com</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
              <li>Adresse: 123 Rue des Cadeaux, Paris</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="mb-0">&copy; {new Date().getFullYear()} CadeauChaleureux. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 