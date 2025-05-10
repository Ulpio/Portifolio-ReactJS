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
  const [currentLang, setCurrentLang] = useState(() => {
    // Verificar se já existe uma tradução ativa no localStorage
    const savedLang = localStorage.getItem('googleTranslateLanguage');
    return savedLang || 'pt';
  });

  // Efeito para inicializar o Google Translate se já houver um idioma salvo
  useEffect(() => {
    const savedLang = localStorage.getItem('googleTranslateLanguage');
    if (savedLang && savedLang !== 'pt') {
      handleTranslate(savedLang, false);
    }
  }, []);

  // Manipula a tradução através do Google Translate
  const handleTranslate = (langCode, savePreference = true) => {
    // Fechar o dropdown
    setShowDropdown(false);
    
    // Atualizar o idioma atual no estado e localStorage
    if (savePreference) {
      setCurrentLang(langCode);
      localStorage.setItem('googleTranslateLanguage', langCode);
    }
    
    // Se for português, restaurar a página original
    if (langCode === 'pt') {
      // Restaurar o idioma original
      const iframe = document.querySelector('.goog-te-menu-frame');
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const restoreLink = innerDoc.querySelector('a[id=":1.restore"]');
        if (restoreLink) {
          restoreLink.click();
          return;
        }
      }
      
      // Se não conseguir encontrar o link para restaurar, recarregue a página
      if (savePreference) {
        window.location.reload();
      }
      return;
    }
    
    // Cria e dispara o evento do Google Translate
    if (!document.getElementById('google_translate_element')) {
      const googleTranslateElement = document.createElement('div');
      googleTranslateElement.id = 'google_translate_element';
      document.body.appendChild(googleTranslateElement);
    }
    
    // Adicionar o script do Google Translate se ainda não estiver carregado
    if (!window.google || !window.google.translate) {
      // Definir a função de callback que o Google Translate chamará
      window.googleTranslateElementInit = function() {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'pt',
            includedLanguages: 'en,es,pt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
        
        // Aplicar o idioma após o widget ser carregado
        setTimeout(() => {
          selectGoogleTranslateLanguage(langCode);
        }, 1000);
      };
      
      // Carregar o script do Google Translate
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    } else {
      // Se o script já estiver carregado, apenas selecionar o idioma
      selectGoogleTranslateLanguage(langCode);
    }
  };
  
  // Função para selecionar o idioma no widget do Google Translate
  const selectGoogleTranslateLanguage = (langCode) => {
    // Tentar selecionar no dropdown do Google
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // Tentar através do iframe
      const iframe = document.querySelector('.goog-te-menu-frame');
      if (iframe) {
        const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const links = innerDoc.querySelectorAll('a.goog-te-menu2-item');
        
        links.forEach(link => {
          if (link.textContent.includes(getLangLabel(langCode))) {
            link.click();
          }
        });
      }
    }
  };
  
  // Obter o nome completo do idioma pelo código
  const getLangLabel = (code) => {
    const lang = languages.find(l => l.code === code);
    return lang ? lang.label : 'Português';
  };
  
  // Obter a sigla do idioma pelo código
  const getLangName = (code) => {
    const lang = languages.find(l => l.code === code);
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
        <span className="current-language">{getLangName(currentLang)}</span>
      </button>
      
      {showDropdown && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => handleTranslate(lang.code)}
              aria-label={`Traduzir para ${lang.label}`}
            >
              <span className="language-code">{lang.name}</span>
              <span className="language-name">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Div para o widget do Google Translate (oculto visualmente) */}
      <div id="google_translate_element" className="google-translate-hidden"></div>
    </div>
  );
};

export default LanguageToggle;