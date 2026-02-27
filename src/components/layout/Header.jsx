// src/components/layout/Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ThemeToggle from '../theme/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { exportCV } from '../../services/cvExport';

const Header = () => {
  const { darkMode } = useTheme();
  const [exporting, setExporting] = useState(false);

  const handleExportCV = async () => {
    if (exporting) return;
    setExporting(true);
    try {
      await exportCV();
    } finally {
      setExporting(false);
    }
  };

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
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end className="px-3">
              Sobre
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projetos" className="px-3">
              Projetos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contato" className="px-3">
              Contato
            </Nav.Link>
            <Button
              variant={darkMode ? 'outline-light' : 'outline-primary'}
              size="sm"
              className="ms-2"
              onClick={handleExportCV}
              disabled={exporting}
              aria-label="Exportar currículo em PDF"
            >
              {exporting ? 'Gerando PDF...' : 'Exportar CV'}
            </Button>
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};

export default Header;