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
                href="/UlpioNetto_CV.pdf"
                variant="outline-primary"
                size="lg"
              >
                Baixar CV
              </Button>
              <Button
                href="https://www.linkedin.com/in/ulpionetto/"
                variant="outline-primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <p className="fs-5 text-muted">
              Desenvolvedor Backend com 5 anos de experiência, reduzindo em 30% o
              tempo de processamento e suportando aplicações que atendem mais de
              50&nbsp;mil usuários.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
