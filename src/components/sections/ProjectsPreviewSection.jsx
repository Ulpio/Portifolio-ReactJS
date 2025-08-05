// src/components/sections/ProjectsPreviewSection.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProjectsPreviewSection.css';

// Componente de cartão de projeto
const ProjectCard = ({ title, description, technologies, features, demoLink }) => (
  <Card className="project-card h-100">
    <Card.Body>
      <Card.Title as="h3" className="fw-bold mb-2">{title}</Card.Title>
      <Card.Text className="text-muted mb-3">{description}</Card.Text>
      <div className="mb-3 project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className={`project-badge ${tech.badge || ''}`}>
            {tech.name}
          </span>
        ))}
      </div>
      <p className="fw-medium mb-2">Características principais:</p>
      <ul className="ps-4 mb-3 text-muted project-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {demoLink && (
        demoLink.startsWith('http') ? (
          <a
            href={demoLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver demonstração interativa →
          </a>
        ) : (
          <Link to={demoLink} className="project-link">
            Ver demonstração interativa →
          </Link>
        )
      )}
    </Card.Body>
  </Card>
);

const ProjectsPreviewSection = () => {
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
        'Infraestrutura escalável em EC2 e armazenamento no S3',
        'Exportação e compartilhamento de itinerários'
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
        'Processamento assíncrono de tarefas'
      ],
      demoLink: '/playground#demo-registartt'
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
        'Dashboard analítico para métricas de negócios'
      ],
      demoLink: '/playground#demo-impulsa'
    }
  ];

  return (
    <section className="projects-preview-section py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">Projetos em Destaque</h2>
        
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <Button 
            as={Link} 
            to="/projetos" 
            variant="primary" 
            size="lg"
            className="projects-btn"
          >
            Ver todos os projetos
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsPreviewSection;