'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const FloatingNavbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = React.useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
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
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg hover:border-[var(--foreground-secondary)]/40 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-lg text-[var(--foreground-secondary)]" />
            ) : (
              <FaMoon className="text-lg text-[var(--foreground-secondary)]" />
            )}
          </motion.button>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-1 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[var(--foreground)]'
                      : 'text-[var(--foreground-secondary)] hover:text-[var(--foreground)]'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-[var(--foreground)]/10 rounded-md -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
      >
        <div className="flex items-center gap-1 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-full p-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--foreground-secondary)]'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileBackground"
                    className="absolute inset-0 bg-[var(--foreground)]/10 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default FloatingNavbar;
