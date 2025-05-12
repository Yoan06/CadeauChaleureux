import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FaRegHeart, FaShoppingBag, FaSearch, FaUser } from 'react-icons/fa';
// import { IconType } from 'react-icons';
import './NavbarCustom.css';

const NavigationBar: React.FC = () => {
  // const IconWrapper: React.FC<{ icon: IconType }> = ({ icon: Icon }) => (
  //   <span className="icon">
  //     <Icon />
  //   </span>
  // );

  return (
    <Navbar expand="lg" className="navbar-polene w-100" style={{background: 'transparent', zIndex: 10}}>
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/" className="mx-auto polene-logo">CADEAU CHALEUREUX</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto align-items-center gap-4">
            <Nav.Link as={Link} to="/nouveautes">NOUVEAUTÉS</Nav.Link>
            <Nav.Link as={Link} to="/sacs">SACS</Nav.Link>
            <Nav.Link as={Link} to="/bijoux">BIJOUX</Nav.Link>
            <Nav.Link as={Link} to="/vetements">VÊTEMENTS</Nav.Link>
            <Nav.Link as={Link} to="/boutiques">BOUTIQUES</Nav.Link>
            <Nav.Link as={Link} to="/a-propos">À PROPOS</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center gap-4">
            <Nav.Link as={Link} to="#">FR | EN</Nav.Link>
            <Nav.Link as={Link} to="/compte">
              <Button variant="outline-dark" size="sm">Se connecter</Button>
            </Nav.Link>
            {/* <Nav.Link as={Link} to="#">
              <IconWrapper icon={FaUser} />
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <IconWrapper icon={FaSearch} />
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <IconWrapper icon={FaRegHeart} />
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              <IconWrapper icon={FaShoppingBag} />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 