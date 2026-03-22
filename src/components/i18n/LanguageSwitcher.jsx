import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('pt') ? 'pt-BR' : 'en';

  const toggle = () => {
    const next = currentLang === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <button
      className="lang-switcher"
      onClick={toggle}
      aria-label={currentLang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
      type="button"
    >
      <span className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}>EN</span>
      <span className="lang-divider" aria-hidden="true">/</span>
      <span className={`lang-option ${currentLang === 'pt-BR' ? 'active' : ''}`}>PT</span>
    </button>
  );
}

export default LanguageSwitcher;
