// src/components/sections/HeroSection.jsx
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="display-5 fw-bold mb-3">Ulpio Netto</h2>
            <p className="fs-5 text-muted mb-4">
              Desenvolvedor Backend apaixonado por criar soluções robustas e escaláveis 
              usando Golang e tecnologias modernas.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Button 
                as={Link} 
                to="/contato" 
                variant="primary" 
                size="lg"
                className="me-2"
              >
                Entre em contato
              </Button>
              <Button 
                as={Link} 
                to="/projetos" 
                variant="outline-primary" 
                size="lg"
              >
                Ver projetos
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="terminal">
              <p>
                <span className="terminal-prompt">➜</span>{' '}
                <span className="terminal-command">go version</span>
              </p>
              <p className="terminal-output">go version go1.21.0 linux/amd64</p>
              <p>
                <span className="terminal-prompt">➜</span>{' '}
                <span className="terminal-command">cat main.go</span>
              </p>
              <pre className="terminal-output">
{`package main

import "fmt"

func main() {
    fmt.Println("Olá, sou o Ulpio Netto!")
    fmt.Println("Desenvolvedor Backend especialista em Go")
    fmt.Println("Bem-vindo ao meu portfólio interativo!")
}`}
              </pre>
              <p>
                <span className="terminal-prompt">➜</span>{' '}
                <span className="terminal-command">go run main.go</span>
              </p>
              <p className="terminal-output">Olá, sou o Ulpio Netto!</p>
              <p className="terminal-output">Desenvolvedor Backend especialista em Go</p>
              <p className="terminal-output">Bem-vindo ao meu portfólio interativo!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;