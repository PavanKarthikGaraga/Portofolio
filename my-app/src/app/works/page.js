import FloatingNavbar from '../../components/FloatingNavbar';
import WorksSection from '../../components/sections/WorksSection';

export default function Works() {
  return (
    <div className="min-h-screen">
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content Container - 40% width on desktop, 95% on mobile */}
      <div className="w-full max-w-[95%] md:max-w-[40%] mx-auto">
        {/* Works Section */}
        <WorksSection />
      </div>
    </div>
  );
}
