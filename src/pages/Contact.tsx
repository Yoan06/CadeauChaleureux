import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pourrez ajouter la logique d'envoi du formulaire
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contactez-nous</h1>

      <Row>
        {/* Formulaire de contact */}
        <Col md={6} className="mb-4">
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              Votre message a été envoyé avec succès !
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sujet</Form.Label>
              <Form.Select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="question">Question générale</option>
                <option value="commande">Question sur une commande</option>
                <option value="retour">Retour produit</option>
                <option value="autre">Autre</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>

        {/* Informations de contact */}
        <Col md={6}>
          <div className="bg-light p-4 rounded">
            <h3 className="mb-4">Nos Coordonnées</h3>
            <div className="mb-4">
              <h5>Adresse</h5>
              <p>123 Rue des Cadeaux<br />75000 Paris, France</p>
            </div>
            <div className="mb-4">
              <h5>Téléphone</h5>
              <p>+33 1 23 45 67 89</p>
            </div>
            <div className="mb-4">
              <h5>Email</h5>
              <p>contact@cadeauchaleureux.com</p>
            </div>
            <div>
              <h5>Horaires d'ouverture</h5>
              <p>
                Lundi - Vendredi: 9h00 - 18h00<br />
                Samedi: 10h00 - 17h00<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 