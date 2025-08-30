import FloatingNavbar from '../components/FloatingNavbar';
import LandingSection from '../components/sections/LandingSection';
import AboutSection from '../components/sections/AboutSection';
import TechStackSection from '../components/sections/TechStackSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content Container - 80% width on desktop, 95% on mobile */}
      <div className="w-full max-w-[95%] md:max-w-[80%] mx-auto">
        {/* Landing Section */}
        <LandingSection />

        {/* About Section */}
        <AboutSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
