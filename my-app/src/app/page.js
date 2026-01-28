import LandingSection from '../components/sections/LandingSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';


export default function Home() {
  return (
    <div className="w-full max-w-[95%] md:max-w-3xl px-4 mx-auto">
      <LandingSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}
