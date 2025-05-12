import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
    <Navbar expand="lg" className="navbar-polene position-absolute w-100" style={{background: 'transparent', zIndex: 10}}>
      <Container fluid className="px-5">
        <Nav className="me-auto d-none d-lg-flex align-items-center gap-4">
          <Nav.Link as={Link} to="/nouveautes">NOUVEAUTÉS</Nav.Link>
          <Nav.Link as={Link} to="/sacs">SACS</Nav.Link>
          <Nav.Link as={Link} to="/bijoux">BIJOUX</Nav.Link>
          <Nav.Link as={Link} to="/vetements">VÊTEMENTS</Nav.Link>
          <Nav.Link as={Link} to="/a-propos">À PROPOS</Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to="/" className="mx-auto polene-logo">CADEAU CHALEUREUX</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center gap-4">
          <Nav.Link as={Link} to="#">FR | EN</Nav.Link>
          <Nav.Link as={Link} to="#">BOUTIQUES</Nav.Link>
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
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 