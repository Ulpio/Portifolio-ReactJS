// src/components/sections/AboutSection.jsx
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">Sobre Mim</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="text-muted">
              <p className="mb-3">
                Meu nome é Ulpio Netto, um desenvolvedor backend especializado em Go (Golang) e Java. 
                Com experiência sólida no desenvolvimento de sistemas escaláveis e de alta performance, tenho trabalhado 
                em projetos que exigem robustez e eficiência.
              </p>
              
              <p className="mb-3">
                Atualmente, estou envolvido com o desenvolvimento de software para a plataforma Registartt e no projeto 
                Impulsa Brasil. Minha abordagem para resolver problemas complexos é baseada em código limpo, documentação 
                clara e práticas de engenharia de software modernas.
              </p>
              
              <p>
                Tenho um forte interesse em microsserviços, APIs RESTful, bancos de dados relacionais e não-relacionais, 
                além de práticas DevOps para garantir implantações confiáveis e monitoramento eficiente.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;