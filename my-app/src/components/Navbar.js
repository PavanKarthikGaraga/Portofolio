'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('/');
  const { isDark, toggleTheme } = useTheme();

  const navItems = React.useMemo(() => [
    { id: '/about', label: 'About' },
    { id: '/projects', label: 'Projects' },
    { id: '/contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  const navigateToPage = (pageId) => {
    router.push(pageId);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full max-w-3xl mx-auto bg-transparent backdrop-blur-xl rounded-2xl"
    >
      <div className="max-w-7xl mx-auto flex items-end justify-between px-6 py-4">

        {/* Left Side: Logo & Navigation */}
        <div className="flex items-end gap-8">
          {/* Profile Logo */}
          <Link href="/">
           
              <Image
                className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
                src="/me.png"
                alt="Profile"
                width={100}
                height={100}
              />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-end gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`text-base font-medium transition-colors hover:underline ${isActive
                    ? 'text-[var(--foreground)]'
                    : 'text-[var(--foreground-secondary)] hover:text-[var(--foreground)]'
                    }`}

                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Search & Theme */}
        <div className="flex items-end gap-4">
          {/* Search Button */}
          {/* <button className="hidden sm:flex items-center gap-2 px-2 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
            <span className="text-xs font-medium text-[var(--foreground-secondary)] group-hover:text-[var(--foreground)]">Search</span>
            <kbd className="hidden md:inline-flex items-center gap-1 rounded bg-white/5 px-2 font-mono text-[11px] font-medium text-[var(--foreground-secondary)]">
              <span className="text-xs">Ctrl + K</span>
            </kbd>
          </button> */}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
            aria-label="Toggle theme"
          >
            Lights {isDark ? "On" : "Off"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
