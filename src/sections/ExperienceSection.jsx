import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cvData } from '../data/cvData';
import './ExperienceSection.css';

// Slugs now come directly from cvData.experience[].slug

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const mobileVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function ExperienceSection() {
  const { t } = useTranslation();
  const { experience } = cvData;

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-section__inner">
        <span className="experience-section__label">{t('experience.label')}</span>
        <h2 id="experience-heading" className="experience-section__title">
          {t('experience.title')}
        </h2>
        <p className="experience-section__subtitle">{t('experience.subtitle')}</p>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          role="list"
          aria-label={t('experience.timelineAria')}
        >
          <div className="experience-timeline__line" aria-hidden="true" />

          {experience.map((exp, idx) => {
            const slug = exp.slug || exp.company.toLowerCase().replace(/\s+/g, '-');
            const role = t(`experience.roles.${slug}.role`, { defaultValue: typeof exp.role === 'object' ? exp.role.en : exp.role });
            const highlights = t(`experience.roles.${slug}.highlights`, { returnObjects: true });
            const highlightList = Array.isArray(highlights) ? highlights : [];

            return (
              <motion.div
                key={`${exp.company}-${idx}`}
                variants={mobileVariants}
                className="experience-timeline__item"
                role="listitem"
              >
                <div className="experience-timeline__dot" aria-hidden="true" />
                <article className="experience-card">
                  <header className="experience-card__header">
                    <h3 className="experience-card__company">{exp.company}</h3>
                    <time className="experience-card__period">{exp.period}</time>
                  </header>
                  <p className="experience-card__role">{role}</p>
                  {highlightList.length > 0 && (
                    <ul className="experience-card__highlights" aria-label={t('experience.highlightsAria')}>
                      {highlightList.map((h, i) => (
                        <li key={i} className="experience-card__highlight">
                          <span className="experience-card__highlight-dot" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ExperienceSection;
