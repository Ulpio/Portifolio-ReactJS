import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './AboutSection.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { value: '5+', label: t('about.stats.years') },
    { value: '10+', label: t('about.stats.projects') },
    { value: '50k+', label: t('about.stats.users') },
    { value: '3', label: t('about.stats.countries') },
  ];

  const terminalLines = [
    ['location', t('about.terminal.location')],
    ['email', t('about.terminal.email')],
    ['stack', t('about.terminal.stack')],
    ['open_to', t('about.terminal.openTo')],
  ];

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-inner">
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left: text */}
          <motion.div variants={itemVariants}>
            <span className="about-label">{t('about.label')}</span>
            <h2 id="about-heading" className="about-h2">
              {t('about.title')}
            </h2>
            <p className="about-para">{t('about.p1')}</p>
            <p className="about-para">{t('about.p2')}</p>
            <p className="about-para">{t('about.p3')}</p>
          </motion.div>

          {/* Right: stats + terminal */}
          <motion.div variants={itemVariants}>
            <div className="about-stats-card">
              {/* Stats grid */}
              <div className="about-stats-grid">
                {stats.map(({ value, label }) => (
                  <div key={label} className="about-stat-cell">
                    <span className="about-stat-value">{value}</span>
                    <span className="about-stat-label">{label}</span>
                  </div>
                ))}
              </div>

              {/* Terminal block */}
              <div className="about-terminal" role="img" aria-label={t('about.terminalAria')}>
                <div className="about-terminal-header" aria-hidden="true">
                  <span className="about-terminal-dot about-terminal-dot--red" />
                  <span className="about-terminal-dot about-terminal-dot--yellow" />
                  <span className="about-terminal-dot about-terminal-dot--green" />
                </div>
                {terminalLines.map(([key, val]) => (
                  <div key={key} className="about-terminal-line">
                    <span className="about-terminal-key">{key}</span>
                    {': '}
                    <span className="about-terminal-val">{val}</span>
                    {','}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
