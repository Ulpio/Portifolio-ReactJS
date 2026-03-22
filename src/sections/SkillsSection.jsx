import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiNginx,
  SiSpringboot,
  SiFastapi,
  SiReact,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { MdBolt, MdStorage, MdCloud, MdCode } from 'react-icons/md';
import './SkillsSection.css';

const categories = [
  {
    id: 'languages',
    icon: MdCode,
    skills: [
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    id: 'frameworks',
    icon: MdBolt,
    skills: [
      { name: 'Gin', icon: null, color: '#00ADD8' },
      { name: 'GORM', icon: null, color: '#58a6ff' },
      { name: 'SQLC', icon: null, color: '#58a6ff' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    id: 'databases',
    icon: MdStorage,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'RDS', icon: null, color: '#FF9900' },
    ],
  },
  {
    id: 'infra',
    icon: MdCloud,
    skills: [
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'CI/CD', icon: null, color: '#58a6ff' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function SkillBadge({ skill }) {
  const Icon = skill.icon;
  return (
    <span
      className="skill-badge"
      style={{
        background: `${skill.color}14`,
        border: `1px solid ${skill.color}30`,
        '--skill-color': skill.color,
        '--skill-color-border-hover': `${skill.color}60`,
      }}
    >
      {Icon && <Icon size={13} aria-hidden="true" style={{ color: skill.color }} />}
      {skill.name}
    </span>
  );
}

function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-section__inner">
        <span className="skills-section__label">{t('skills.label')}</span>
        <h2 id="skills-heading" className="skills-section__title">
          {t('skills.title')}
        </h2>
        <p className="skills-section__subtitle">{t('skills.subtitle')}</p>

        <motion.div
          className="skills-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((cat) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className="skills-card"
              >
                <div className="skills-card__header">
                  <span className="skills-card__icon" aria-hidden="true">
                    <CategoryIcon size={18} />
                  </span>
                  <h3 className="skills-card__category-title">
                    {t(`skills.categories.${cat.id}`)}
                  </h3>
                </div>
                <div
                  className="skills-card__list"
                  role="list"
                  aria-label={t('skills.skillsInAria', { category: t(`skills.categories.${cat.id}`) })}
                >
                  {cat.skills.map((skill) => (
                    <div key={skill.name} role="listitem">
                      <SkillBadge skill={skill} />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
