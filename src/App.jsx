import { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import './styles/theme.css';

/* Header, Footer and Hero load eagerly (above the fold) */
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';

/* Below-the-fold sections are lazy-loaded */
const AboutSection = lazy(() => import('./sections/AboutSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function AppContent() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith('pt') ? 'pt-BR' : 'en';
  }, [i18n.language]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language?.startsWith('pt') ? 'pt-BR' : 'en'} />
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <link rel="alternate" hrefLang="en" href="https://ulpionetto.dev/?lang=en" />
        <link rel="alternate" hrefLang="pt-BR" href="https://ulpionetto.dev/?lang=pt-BR" />
        <link rel="alternate" hrefLang="x-default" href="https://ulpionetto.dev/" />
      </Helmet>

      <a href="#main-content" className="skip-link">
        {t('a11y.skipToContent')}
      </a>

      <Header />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
