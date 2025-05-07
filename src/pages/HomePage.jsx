import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsPreviewSection from '../components/sections/ProjectsPreviewSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreviewSection />
    </div>
  );
};

export default HomePage;