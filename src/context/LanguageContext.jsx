import { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  // Estado para armazenar o idioma atual (pt-BR, en, es)
  const [language, setLanguage] = useState(() => {
    // Tentar obter o idioma salvo do localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Se não existir idioma salvo, usar o português como padrão
    return 'pt-BR';
  });

  // Função para alternar entre idiomas
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Efeito para salvar o idioma no localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    // Atualiza o atributo lang do documento HTML
    document.documentElement.lang = language.split('-')[0];
  }, [language]);

  // Valores disponibilizados pelo contexto
  const value = {
    language,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}