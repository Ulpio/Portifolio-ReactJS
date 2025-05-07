import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="white" expand="md" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div>
            <span className="fs-4 fw-bold">Ulpio Netto</span>
            <p className="text-muted mb-0 small">Desenvolvedor Backend | Especialista em Go</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="px-3">
              Sobre
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projetos" className="px-3">
              Projetos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/playground" className="px-3">
              Playground
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contato" className="px-3">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;