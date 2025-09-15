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
                Meu nome é Ulpio Netto, desenvolvedor backend especializado em Go (Golang) e Java.
                Em uma recente migração de monólito para microsserviços em Go, reduzi o uso de CPU em 30% e cortei os custos de infraestrutura em 20%.
              </p>

              <p className="mb-3">
                Atualmente, colaboro com o desenvolvimento da plataforma Registartt e do projeto Impulsa Brasil.
                Sou conhecido por comunicar decisões técnicas de forma clara, liderar squads multidisciplinares e promover um ambiente de cooperação contínua.
              </p>

              <ul className="mb-3">
                <li>Otimização de consultas que acelerou respostas de API em 45%.</li>
                <li>Automação de deploys com CI/CD, diminuindo o tempo de entrega em 50%.</li>
                <li>Mentoria de 3 novos desenvolvedores até o nível pleno.</li>
              </ul>

              <p>
                Tenho forte interesse em microsserviços, APIs RESTful, bancos de dados relacionais e não-relacionais,
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
