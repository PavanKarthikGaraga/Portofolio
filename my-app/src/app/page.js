import FloatingNavbar from '../components/FloatingNavbar';
import LandingSection from '../components/sections/LandingSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content Container - 40% width on desktop, 95% on mobile */}
      <div className="w-full max-w-[95%] md:max-w-[40%] px-4 mx-auto">
        {/* Landing Section */}
        <LandingSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

      </div>
    </div>
  );
}
