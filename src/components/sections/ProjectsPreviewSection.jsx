// src/components/sections/ProjectsPreviewSection.jsx
import { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { previewProjects } from '../../data/projects';
import './ProjectsPreviewSection.css';

const ProjectCard = ({ title, description, technologies, features, demoLink, external }) => (
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
      {demoLink === '#' ? null : external ? (
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
          Ver projeto →
        </a>
      ) : (
        <Link to={demoLink} className="project-link">
          Ver demonstração interativa →
        </Link>
      )}
    </Card.Body>
  </Card>
);

const ProjectsPreviewSection = () => {
  const projects = previewProjects;
  const [index, setIndex] = useState(0);

  if (!projects.length) return null;

  const current = projects[index];
  const goPrev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section className="projects-preview-section py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">Projetos em Destaque</h2>

        <div className="projects-carousel-wrapper">
          <button
            type="button"
            className="projects-carousel-btn projects-carousel-prev"
            onClick={goPrev}
            aria-label="Projeto anterior"
          >
            ‹
          </button>

          <div className="projects-carousel-content">
            <ProjectCard key={current.title} {...current} />
          </div>

          <button
            type="button"
            className="projects-carousel-btn projects-carousel-next"
            onClick={goNext}
            aria-label="Próximo projeto"
          >
            ›
          </button>
        </div>

        <div className="projects-carousel-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`projects-carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir para projeto ${i + 1}`}
            />
          ))}
        </div>

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
