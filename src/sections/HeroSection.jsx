import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdKeyboardArrowDown, MdDownload } from 'react-icons/md';
import './HeroSection.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function HeroSection() {
  const { t, i18n } = useTranslation();
  const [cvLoading, setCvLoading] = useState(false);

  const handleDownloadCV = useCallback(async () => {
    if (cvLoading) return;
    setCvLoading(true);
    try {
      const { exportCV } = await import('../services/cvExport.js');
      await exportCV(i18n.language);
    } catch (err) {
      console.error('CV export failed:', err);
    } finally {
      setCvLoading(false);
    }
  }, [cvLoading, i18n.language]);

  const handleScroll = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Apresentação">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-gradient-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="hero-badge" role="status">
              <span className="hero-badge-dot" aria-hidden="true" />
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 variants={itemVariants} className="hero-h1">
            Ulpio Netto
          </motion.h1>

          {/* H2 */}
          <motion.h2 variants={itemVariants} className="hero-h2">
            {t('hero.subtitle')}
          </motion.h2>

          {/* Bio */}
          <motion.p variants={itemVariants} className="hero-bio">
            {t('hero.bio')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="hero-cta-row">
            <a
              href="#projects"
              className="hero-btn-primary"
              onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#contact"
              className="hero-btn-secondary"
              onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
            >
              {t('hero.getInTouch')}
            </a>
            <button
              type="button"
              className="hero-btn-secondary"
              onClick={handleDownloadCV}
              disabled={cvLoading}
              aria-busy={cvLoading}
            >
              <MdDownload size={18} aria-hidden="true" />
              {cvLoading ? t('hero.generatingCV') : t('hero.downloadCV')}
            </button>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="hero-social-row">
            <a
              href="https://github.com/Ulpio"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label={t('hero.githubAria')}
            >
              <SiGithub size={18} aria-hidden="true" />
              GitHub
            </a>
            <span className="hero-social-separator" aria-hidden="true">·</span>
            <a
              href="https://linkedin.com/in/ulpionetto"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label={t('hero.linkedinAria')}
            >
              <SiLinkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}
        aria-label={t('hero.scrollAria')}
      >
        <MdKeyboardArrowDown size={28} aria-hidden="true" />
      </a>
    </section>
  );
}

export default HeroSection;
