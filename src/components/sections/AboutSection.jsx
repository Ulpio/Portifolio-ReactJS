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
                Meu nome é Ulpio Netto — desenvolvedor e engenheiro de software com foco em backend. Minhas principais stacks são Go (Golang) e Java, com as quais construí do zero o backend de plataformas como a Registartt e o guIA Travel Hub. Hoje sigo colaborando na implementação de soluções em projetos como OxeTech, SonorIA e Yes Technology.
              </p>

              <p className="mb-3">
                Nos últimos anos, tenho me dedicado à arquitetura de microsserviços e à migração de bases legadas em stacks menos performáticas, como Node. Além da implementação de pipelines de CI/CD, atuo na gestão de times como team lead no SonorIA, acompanhando e orientando o desenvolvimento de forma direta.
              </p>

              <p className="mb-0">
                No dia a dia, trabalho com ecossistema AWS, bancos de dados relacionais e não relacionais, e aplico práticas sólidas de DevOps e CI/CD para entregas mais seguras e previsíveis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
