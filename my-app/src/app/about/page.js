'use client';
import FloatingNavbar from '../../components/FloatingNavbar';
import AboutSection from '../../components/sections/AboutSection';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content Container - 40% width on desktop, 95% on mobile */}
      <div className="w-full max-w-[95%] md:max-w-[40%] mx-auto">
        {/* About Section */}
        <AboutSection />
      </div>
    </div>
  );
}
