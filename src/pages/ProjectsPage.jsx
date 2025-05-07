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
      <Link 
        to={demoLink}
        className="text-decoration-none"
      >
        Ver demonstração interativa →
      </Link>
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
      title: 'Plataforma Registartt',
      description: 'Desenvolvimento de backend para a plataforma online da Registartt, proporcionando um sistema robusto e escalável para gerenciamento de registros.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'PostgreSQL', badge: 'postgres-badge' },
        { name: 'Gin', badge: '' },
        { name: 'SQLC', badge: '' }
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
      imageUrl: '/placeholder-project.jpg'
    },
    {
      title: 'Impulsa Brasil',
      description: 'Sistema em desenvolvimento para impulsionar negócios brasileiros, oferecendo ferramentas digitais para crescimento e gestão.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'MongoDB', badge: 'mongo-badge' },
        { name: 'Gin', badge: '' },
        { name: 'Nginx', badge: '' }
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
      imageUrl: '/placeholder-project.jpg'
    },
    {
      title: 'Sistema de Monitoramento',
      description: 'Biblioteca de código aberto para monitoramento de aplicações Go, com integrações para sistemas de observabilidade populares.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'Prometheus', badge: '' },
        { name: 'Grafana', badge: '' }
      ],
      features: [
        'Métricas de performance customizáveis',
        'Instrumentação automática de HTTP e gRPC',
        'Exportadores para diferentes sistemas de monitoramento',
        'Baixo overhead em produção',
        'Facilmente extensível'
      ],
      demoLink: '/playground#demo-monitoring',
      imageUrl: '/placeholder-project.jpg'
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
              href="https://github.com/seu-usuario" 
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