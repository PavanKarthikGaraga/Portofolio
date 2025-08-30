'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }

    // Force CSS variable update
    root.style.setProperty('--background', isDark ? '#000000' : '#ffffff');
    root.style.setProperty('--foreground', isDark ? '#ffffff' : '#000000');
    root.style.setProperty('--background-secondary', isDark ? '#0a0a0a' : '#f5f5f5');
    root.style.setProperty('--foreground-secondary', isDark ? '#a3a3a3' : '#666666');
    root.style.setProperty('--accent', isDark ? '#ffffff' : '#000000');
    root.style.setProperty('--accent-secondary', isDark ? '#1a1a1a' : '#e5e5e5');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
