import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
