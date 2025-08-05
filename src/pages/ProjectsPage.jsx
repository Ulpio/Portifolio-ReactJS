// src/pages/ProjectsPage.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, technologies, features, demoLink, imageUrl }) => (
  <Card className="h-100 project-card">
    {imageUrl && (
      <div className="bg-light" style={{ height: '200px' }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
    )}
    <Card.Body>
      <Card.Title as="h3" className="fw-bold mb-2">{title}</Card.Title>
      <Card.Text className="text-muted mb-3">{description}</Card.Text>
      <div className="mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`tech-badge ${tech.badge || ''}`}
          >
            {tech.name}
          </span>
        ))}
      </div>
      <p className="fw-medium mb-2">Características principais:</p>
      <ul className="ps-4 mb-3 text-muted">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {demoLink && (
        demoLink.startsWith('http') ? (
          <a
            href={demoLink}
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver demonstração interativa →
          </a>
        ) : (
          <Link to={demoLink} className="text-decoration-none">
            Ver demonstração interativa →
          </Link>
        )
      )}
    </Card.Body>
  </Card>
);

const ProjectsPage = () => {
  useEffect(() => {
    // Rolar para o topo quando a página carregar
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: 'Guia Travel Hub',
      description:
        'Sistema de geração e recomendação de roteiros de viagens usando IA para criar itinerários personalizados.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'Gemini', badge: 'gemini-badge' },
        { name: 'Amazon AWS (EC2, S3)', badge: 'aws-badge' },
        { name: 'Google Places API', badge: 'places-badge' }
      ],
      features: [
        'Geração automática de roteiros com IA Gemini',
        'Recomendações com dados da Google Places API',
        'Infraestrutura em EC2 com arquivos no S3',
        'Exportação e compartilhamento de itinerários',
        'Interface responsiva e intuitiva'
      ],
      demoLink: 'https://github.com/Ulpio/guia-travel-hub'
    },
    {
      title: 'Plataforma Registartt',
      description:
        'Desenvolvimento de backend para a plataforma online da Registartt, proporcionando um sistema robusto e escalável para gerenciamento de registros.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'PostgreSQL', badge: 'postgres-badge' },
        { name: 'Gin', badge: 'gin-badge' },
        { name: 'SQLC', badge: 'sqlc-badge' }
      ],
      features: [
        'API RESTful de alta performance',
        'Sistema de autenticação e autorização',
        'Cache distribuído para melhor desempenho',
        'Processamento assíncrono de tarefas',
        'Logs estruturados e monitoramento',
        'Documentação interativa da API'
      ],
      demoLink: '/playground#demo-registartt',
      imageUrl: 'img-registartt.png'
    },
    {
      title: 'Impulsa Brasil',
      description:
        'Sistema em desenvolvimento para impulsionar negócios brasileiros, oferecendo ferramentas digitais para crescimento e gestão.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'MongoDB', badge: 'mongo-badge' },
        { name: 'Gin', badge: 'gin-badge' },
        { name: 'Nginx', badge: 'nginx-badge' }
      ],
      features: [
        'Arquitetura de microsserviços',
        'Processamento de dados em tempo real',
        'Integrações com APIs de terceiros',
        'Dashboard analítico para métricas de negócios',
        'Sistema de notificações em tempo real',
        'Processamento de dados em lote'
      ],
      demoLink: '/playground#demo-impulsa',
      imageUrl: 'impulsa-placeholder.png'
    },
    {
      title: 'OxeTech',
      description:
        'Plataforma do Programa do Governo do Estado de Alagoas, democratizando o acesso ao ensino de tecnologia e desenvolvimento.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'JavaScript', badge: 'js-badge' },
        { name: 'Postgres', badge: 'postgres-badge' }
      ],
      features: [
        'Transcrição da API original de JS para Go',
        'Processamento de dados em tempo real',
        'Diferentes niveis de acesso e lógicas diferentes de negócio',
        'Tempos de resposta até 75% mais velozes',
        'Api organizada e Simples'
      ],
      demoLink: 'https://oxetech.al.gov.br',
      imageUrl: 'oxetechlab.png'
    }
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="text-center fw-bold mb-2">Projetos</h1>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Conheça os principais projetos que desenvolvi utilizando Go, Java e outras tecnologias modernas para 
          criar soluções robustas e escaláveis.
        </p>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        
        <div className="mt-5 text-center">
          <h2 className="fw-bold mb-3">Quer ver mais?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Além destes projetos, trabalho constantemente em novas soluções e contribuições para código aberto.
            Visite meu GitHub para ver mais projetos ou entre em contato para conversarmos sobre colaborações.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button 
              href="https://github.com/Ulpio" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="dark"
              size="lg"
            >
              Ver GitHub
            </Button>
            <Button 
              as={Link} 
              to="/contato"
              variant="primary"
              size="lg"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;