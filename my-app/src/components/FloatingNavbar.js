'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const FloatingNavbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = React.useMemo(() => [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'tech-stack', label: 'Tech Stack', icon: FaCode },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
  
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); 

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="bg-[var(--background-secondary)]/80 backdrop-blur-md border border-[var(--foreground-secondary)]/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-secondary)]/20'
                      : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-secondary)]/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-lg" />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full border-2 border-[var(--accent)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-secondary)]/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 right-6 z-50 md:hidden"
      >
        <div className="bg-[var(--background-secondary)]/80 backdrop-blur-md border border-[var(--foreground-secondary)]/20 rounded-full p-3 shadow-lg">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="absolute right-0 top-0 h-full w-80 bg-[var(--background)] border-l border-[var(--foreground-secondary)]/20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">Menu</h3>
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-secondary)]/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDark ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </motion.button>
              </div>

              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-[var(--accent)] bg-[var(--accent-secondary)]/20'
                        : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-secondary)]/10'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingNavbar;
