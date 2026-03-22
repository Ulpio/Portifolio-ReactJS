import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import ThemeToggle from '../theme/ThemeToggle';
import './Header.css';

const NAV_LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
];

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact'];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut', staggerChildren: 0.04 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
        <div className="header__inner">
          <a
            href="#hero"
            className="header__logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label={t('nav.backToTop')}
          >
            UN
          </a>

          {/* Desktop Nav — hidden via CSS on mobile */}
          <nav aria-label="Main navigation" className="header__nav">
            {NAV_LINKS.map(({ key, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`header__nav-link${isActive ? ' header__nav-link--active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {t(key)}
                </a>
              );
            })}
            <div className="header__actions">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>

          {/* Hamburger — hidden via CSS on desktop */}
          <div className="header__mobile-controls">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="header__hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className={`header__bar${menuOpen ? ' header__bar--open-top' : ''}`} />
              <span className={`header__bar${menuOpen ? ' header__bar--open-mid' : ''}`} />
              <span className={`header__bar${menuOpen ? ' header__bar--open-bottom' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="header__mobile-menu"
            aria-label="Mobile navigation"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map(({ key, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={href}
                  href={href}
                  className={`header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  variants={mobileLinkVariants}
                >
                  {t(key)}
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
