// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from '../theme/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { darkMode } = useTheme();
  
  return (
    <Navbar 
      bg={darkMode ? "dark" : "white"} 
      variant={darkMode ? "dark" : "light"} 
      expand="md" 
      className="shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div>
            <span className="fs-4 fw-bold">Ulpio Netto</span>
            <p className={`mb-0 small ${darkMode ? 'text-light opacity-75' : 'text-muted'}`}>
              Desenvolvedor Backend | Golang e Java
            </p>
          </div>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2" />
        </div>
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
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};

export default Header;