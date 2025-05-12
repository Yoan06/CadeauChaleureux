import React, { useState, ChangeEvent } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Exemple de produits (à remplacer par vos propres produits)
  const products: Product[] = [
    {
      id: 1,
      name: "Cadeau Premium",
      price: 49.99,
      category: "premium",
      description: "Un cadeau exceptionnel pour une occasion spéciale."
    },
    {
      id: 2,
      name: "Cadeau Personnalisé",
      price: 29.99,
      category: "personnalise",
      description: "Un cadeau unique qui reflète votre personnalité."
    },
    // Ajoutez plus de produits ici
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Nos Produits</h1>

      {/* Filtres */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Toutes les catégories</option>
            <option value="premium">Premium</option>
            <option value="personnalise">Personnalisé</option>
            <option value="occasion">Occasion spéciale</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Grille de produits */}
      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              {/* Ici, vous pourrez ajouter votre image de produit */}
              <div className="placeholder-image bg-light" style={{ height: '200px' }}>
                <p className="text-center text-muted pt-5">Image du produit</p>
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">{product.price} €</span>
                  <Button variant="primary">Ajouter au panier</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products; 