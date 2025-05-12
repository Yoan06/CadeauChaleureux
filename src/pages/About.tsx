import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="py-5">
      {/* Section Histoire */}
      <Row className="mb-5">
        <Col md={6}>
          <h2 className="mb-4">Notre Histoire</h2>
          <p className="lead">
            CadeauChaleureux est né d'une passion pour les cadeaux qui font la différence.
          </p>
          <p>
            Fondée en 2024, notre entreprise s'est donnée pour mission de créer des moments
            inoubliables à travers des cadeaux uniques et personnalisés. Nous croyons que
            chaque occasion mérite d'être célébrée avec un cadeau qui reflète l'attention
            et l'affection que vous portez à vos proches.
          </p>
        </Col>
        <Col md={6}>
          {/* Ici, vous pourrez ajouter votre image */}
          <div className="placeholder-image bg-light" style={{ height: '300px' }}>
            <p className="text-center text-muted pt-5">Image de l'entreprise</p>
          </div>
        </Col>
      </Row>

      {/* Section Valeurs */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Nos Valeurs</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                {/* Icône à ajouter */}
                <div className="placeholder-image bg-light" style={{ height: '100px' }}></div>
              </div>
              <h4>Qualité</h4>
              <p>Nous sélectionnons uniquement les meilleurs produits pour nos clients.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                {/* Icône à ajouter */}
                <div className="placeholder-image bg-light" style={{ height: '100px' }}></div>
              </div>
              <h4>Personnalisation</h4>
              <p>Chaque cadeau est unique et reflète la personnalité du destinataire.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                {/* Icône à ajouter */}
                <div className="placeholder-image bg-light" style={{ height: '100px' }}></div>
              </div>
              <h4>Service</h4>
              <p>Notre équipe est à votre écoute pour vous accompagner dans vos choix.</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Section Équipe */}
      <Row>
        <Col>
          <h2 className="text-center mb-4">Notre Équipe</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              {/* Photo de l'équipe à ajouter */}
              <div className="placeholder-image bg-light rounded-circle mx-auto" style={{ height: '200px', width: '200px' }}>
                <p className="text-center text-muted pt-5">Photo de l'équipe</p>
              </div>
              <h4 className="mt-3">Marie Dupont</h4>
              <p>Fondatrice & Directrice</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="placeholder-image bg-light rounded-circle mx-auto" style={{ height: '200px', width: '200px' }}>
                <p className="text-center text-muted pt-5">Photo de l'équipe</p>
              </div>
              <h4 className="mt-3">Jean Martin</h4>
              <p>Directeur Artistique</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="placeholder-image bg-light rounded-circle mx-auto" style={{ height: '200px', width: '200px' }}>
                <p className="text-center text-muted pt-5">Photo de l'équipe</p>
              </div>
              <h4 className="mt-3">Sophie Bernard</h4>
              <p>Responsable Service Client</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 