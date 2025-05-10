import { useState, useEffect } from 'react';
import './LanguageToggle.css';

const LanguageToggle = () => {
  // Lista de idiomas disponíveis
  const languages = [
    { code: 'pt', name: 'PT', label: 'Português' },
    { code: 'en', name: 'EN', label: 'English' },
    { code: 'es', name: 'ES', label: 'Español' }
  ];

  // Estado para controlar a exibição do dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Estado para armazenar o idioma atual
  const [currentLang, setCurrentLang] = useState('pt');
  
  // Estado para verificar se o Google Translate foi inicializado
  const [isTranslateInitialized, setIsTranslateInitialized] = useState(false);

  // Efeito para verificar se há um idioma salvo no cookie do Google Translate
  useEffect(() => {
    // Tentar detectar o idioma do cookie do Google Translate
    const googleCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('googtrans='));
      
    if (googleCookie) {
      const langCode = googleCookie.split('/')[2];
      if (langCode && languages.some(l => l.code === langCode)) {
        setCurrentLang(langCode);
      }
    }

    // Verificar se o script do Google Translate já foi carregado
    if (window.google && window.google.translate) {
      setIsTranslateInitialized(true);
    }
  }, []);

  // Função para inicializar o Google Translate
  const initGoogleTranslate = (callback) => {
    if (window.google && window.google.translate) {
      // Se o Google Translate já estiver carregado, execute o callback
      if (callback) callback();
      return;
    }

    // Definir a função de callback do Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'pt',
          includedLanguages: 'en,es',
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
      
      setIsTranslateInitialized(true);
      if (callback) callback();
    };
    
    // Verificar se o script já está carregado
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      // Carregar o script do Google Translate
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    } else {
      // Se o script já estiver no DOM mas não inicializado, chamar a função de inicialização
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
    }
  };

  // Função para aplicar a tradução
  const applyTranslation = (langCode) => {
    if (langCode === 'pt') {
      // Restaurar para o idioma original (português)
      const iframe = document.querySelector('.goog-te-menu-frame');
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const restore = innerDoc.querySelector('a[id*=":"].goog-te-menu2-item[data-gt-at="0"]');
        if (restore) {
          restore.click();
          return;
        }
      }
      
      // Método alternativo: manipular o cookie diretamente
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
      window.location.reload();
      return;
    }
    
    // Para outros idiomas, tentar selecionar no dropdown do Google
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // Método alternativo: manipular o cookie diretamente
      const domain = window.location.hostname;
      document.cookie = `googtrans=/pt/${langCode}; path=/;`;
      document.cookie = `googtrans=/pt/${langCode}; path=/; domain=.${domain}`;
      window.location.reload();
    }
  };

  // Manipulador principal para mudança de idioma
  const handleLanguageChange = (langCode) => {
    // Fechar o dropdown
    setShowDropdown(false);
    
    // Atualizar o estado do idioma atual
    setCurrentLang(langCode);
    
    if (isTranslateInitialized) {
      // Se o Google Translate já estiver inicializado, aplicar a tradução
      applyTranslation(langCode);
    } else {
      // Inicializar o Google Translate e depois aplicar a tradução
      initGoogleTranslate(() => {
        setTimeout(() => {
          applyTranslation(langCode);
        }, 1000);
      });
    }
  };

  // Função para obter a sigla do idioma atual
  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === currentLang);
    return lang ? lang.name : 'PT';
  };

  return (
    <div className="language-toggle-wrapper">
      <button 
        className="language-toggle-button" 
        onClick={() => setShowDropdown(!showDropdown)}
        aria-label="Mudar idioma"
        aria-expanded={showDropdown}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
        <span className="current-language">{getCurrentLanguageName()}</span>
      </button>
      
      {showDropdown && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={`Traduzir para ${lang.label}`}
            >
              <span className="language-code">{lang.name}</span>
              <span className="language-name">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Div oculta para o Google Translate */}
      <div id="google_translate_element" className="google-translate-hidden"></div>
    </div>
  );
};

export default LanguageToggle;