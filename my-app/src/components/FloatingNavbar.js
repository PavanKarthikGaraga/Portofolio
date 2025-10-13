'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NumberFlow, { NumberFlowGroup } from '@number-flow/react';


const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState('');
  const [prevTime, setPrevTime] = useState('');

  const navItems = React.useMemo(() => [
    { id: 'home', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ], []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const newTime = now.toLocaleTimeString('en-US', options);
      setPrevTime(currentTime);
      setCurrentTime(newTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

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
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        {/* Navigation Menu */}
        <motion.div
          className="hidden md:flex items-center bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-full p-1 overflow-hidden"
          whileHover={{
            paddingLeft: "16px",
            paddingRight: "16px",
            minWidth: "280px"
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all ${isActive
                  ? 'text-[var(--foreground)]'
                  : 'text-[var(--foreground-secondary)] hover:text-[var(--foreground)]'
                }`}
                whileHover={{ marginLeft: "8px", marginRight: "8px" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                {/* {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-[var(--foreground)]/10 rounded-md -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )} */}
              </motion.button>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Live Time Display */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 right-6 z-40">
        <div
          className="bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-full px-3 py-2 flex flex-col">
          <div className="text-xs text-[var(--foreground)] flex items-center gap-1">
            <NumberFlowGroup>
              <div
                style={{ fontVariantNumeric: 'tabular-nums', '--number-flow-char-height': '0.85em' }}
                className="flex items-baseline font-semibold"
              >
                {(() => {
                  const [hours, minutes, seconds] = currentTime.split(':');
                  return (
                    <>
                      <NumberFlow value={parseInt(hours) || 0} format={{ minimumIntegerDigits: 2 }} />
                      <NumberFlow
                        prefix=":"
                        value={parseInt(minutes) || 0}
                        digits={{ 1: { max: 5 } }}
                        format={{ minimumIntegerDigits: 2 }}
                      />
                      <NumberFlow
                        prefix=":"
                        value={parseInt(seconds) || 0}
                        digits={{ 1: { max: 5 } }}
                        format={{ minimumIntegerDigits: 2 }}
                      />
                    </>
                  );
                })()}
              </div>
            </NumberFlowGroup>
            <span>Vijayawada, IND</span>
          </div>
        </div>
      </motion.div>

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
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all ${isActive
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
