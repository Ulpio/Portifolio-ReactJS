import { useTranslation } from 'react-i18next';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__name">Ulpio Netto</span>
          <span className="footer__copy">&copy; {year} — {t('footer.rights')}</span>
          <span className="footer__built">{t('footer.builtWith')}</span>
        </div>

        <nav aria-label={t('footer.socialAria')} className="footer__socials">
          <a
            href="https://github.com/Ulpio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            aria-label={t('footer.githubAria')}
          >
            <SiGithub size={17} aria-hidden="true" />
          </a>

          <a
            href="https://linkedin.com/in/ulpionetto"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon-link"
            aria-label={t('footer.linkedinAria')}
          >
            <SiLinkedin size={17} aria-hidden="true" />
          </a>

          <a
            href="mailto:ulpionetto0@gmail.com"
            className="footer__icon-link"
            aria-label={t('footer.emailAria')}
          >
            <MdEmail size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
