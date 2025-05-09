import { createContext, useState, useEffect, useContext} from 'react'

const ThemeContext = createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
  // Estado para armazenar o tema atual
  const [darkMode, setDarkMode] = useState(() => {
    // Tentar obter o tema salvo do localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Se não existir tema salvo, usar preferência do sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Alternar entre temas
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Efeito para aplicar o tema ao documento
  useEffect(() => {
    // Atualizar a classe no elemento HTML
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(darkMode ? 'dark-theme' : 'light-theme');
    
    // Salvar no localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Valores disponibilizados pelo contexto
  const value = {
    darkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}