import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';
import './SkillsSection.css';

const SkillsSection = () => {
  const { darkMode } = useTheme();

  const skills = {
    languages: [
      { name: 'Go', level: 95, badge: 'go-badge' },
      { name: 'Java', level: 85, badge: 'java-badge' },
      { name: 'JavaScript', level: 80, badge: 'js-badge' }
    ],
    databases: [
      { name: 'PostgreSQL', level: 90, badge: 'postgres-badge' },
      { name: 'MongoDB', level: 80, badge: 'mongo-badge' }
    ],
    frameworks: [
      { name: 'Gin', level: 90, badge: 'gin-badge' },
      { name: 'SQLC', level: 85, badge: 'sqlc-badge' },
      { name: 'Spring', level: 80, badge: 'spring-badge' },
      { name: 'React', level: 75, badge: 'react-badge' }
    ],
    devops: [
      { name: 'Nginx', level: 85, badge: 'nginx-badge' },
      { name: 'Docker', level: 80, badge: 'docker-badge' },
      { name: 'CI/CD', level: 75, badge: 'cicd-badge' }
    ],
    softSkills: [
      { name: 'Comunicação', level: 90, badge: 'communication-badge' },
      { name: 'Resolução de Problemas', level: 85, badge: 'problem-solving-badge' }
    ],
    certifications: [
      { name: 'AWS Certified Cloud Practitioner', level: 100, badge: 'aws-badge' },
      { name: 'Scrum Master', level: 100, badge: 'scrum-badge' }
    ]
  };

  const renderSkillCategory = (title, skills) => (
    <Card className="skills-card h-100">
      <Card.Body>
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <div className="mb-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`tech-badge ${skill.badge}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
        {skills.map((skill) => (
          <div className="mb-3" key={`progress-${skill.name}`}>
            <div className="d-flex justify-content-between mb-1">
              <span>{skill.name}</span>
              <span className={darkMode ? 'text-light opacity-75 small' : 'text-muted small'}>
                {skill.level >= 90 ? 'Avançado' : skill.level >= 80 ? 'Intermed/Avançado' : 'Intermediário'}
              </span>
            </div>
            <div className="skill-progress-container">
              <div
                className="skill-progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );

  return (
    <section id="habilidades" className="skills-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Habilidades Técnicas</h2>

        <Row className="g-4">
          <Col md={6} lg={3}>
            {renderSkillCategory('Linguagens', skills.languages)}
          </Col>
          <Col md={6} lg={3}>
            {renderSkillCategory('Bancos de Dados', skills.databases)}
          </Col>
          <Col md={6} lg={3}>
            {renderSkillCategory('Frameworks', skills.frameworks)}
          </Col>
          <Col md={6} lg={3}>
            {renderSkillCategory('DevOps', skills.devops)}
          </Col>
        </Row>

        <h2 className="text-center fw-bold mt-5 mb-4">Soft Skills & Certificações</h2>
        <Row className="g-4 justify-content-center">
          <Col md={6} lg={3}>
            {renderSkillCategory('Soft Skills', skills.softSkills)}
          </Col>
          <Col md={6} lg={3}>
            {renderSkillCategory('Certificações', skills.certifications)}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
