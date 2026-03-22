import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SiGithub } from 'react-icons/si';
import { MdOpenInNew } from 'react-icons/md';
import { projects } from '../data/projects';
import './ProjectsSection.css';

const TITLE_SLUG_MAP = {
  'Plataforma Registartt': 'registartt',
  'Vergo': 'vergo',
  'OxeTech': 'oxetech',
  'guIA Travel Hub': 'guia',
  'Yes Technology': 'yes',
  'SonorIA': 'sonoria',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const slug = TITLE_SLUG_MAP[project.title] || project.title.toLowerCase().replace(/\s+/g, '-');

  const isGitHub = project.demoLink && project.demoLink.includes('github.com');
  const isExternal = project.external && project.demoLink && project.demoLink !== '#';
  const hasLink = project.demoLink && project.demoLink !== '#';

  const description = t(`projectData.${slug}.description`, { defaultValue: project.description });

  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="project-card__image"
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__links" aria-label={t('projects.techAria')}>
            {hasLink && isGitHub && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__icon-btn"
                aria-label={t('projects.viewOnGithub', { name: project.title })}
              >
                <SiGithub size={15} aria-hidden="true" />
              </a>
            )}
            {hasLink && isExternal && !isGitHub && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__icon-btn"
                aria-label={t('projects.visitProject', { name: project.title })}
              >
                <MdOpenInNew size={15} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech-list" aria-label={t('projects.techAria')}>
          {project.technologies.map((tech) => (
            <li key={tech.name} className="project-card__tech-badge">
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-section__inner">
        <span className="projects-section__label">{t('projects.label')}</span>
        <h2 id="projects-heading" className="projects-section__title">
          {t('projects.title')}
        </h2>
        <p className="projects-section__subtitle">{t('projects.subtitle')}</p>

        <motion.div
          className="projects-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
