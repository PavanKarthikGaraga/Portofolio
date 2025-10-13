'use client';

import Image from 'next/image'; 
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedinIn , FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { SiNextdotjs, SiTypescript, SiMongodb, SiMysql, SiTailwindcss, SiExpress, SiJavascript, SiLeetcode } from 'react-icons/si';

const LandingSection = () => {
  const techStack = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FAFAFA" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FAFAFA" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:pavankarthik107@gmail.com",
      icon: FaEnvelope,
      target: "_blank"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/pavankarthikgaraga",
      icon: FaLinkedinIn ,
      target: "_blank"
    },
    {
      name: "GitHub",
      href: "https://github.com/pavankarthikgaraga",
      icon: FaGithub,
      target: "_blank"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/pavankarthikgaraga",
      icon: BsTwitterX,
      target: "_blank"
    }
  ];

  return (
    <section
      id="home"
      className="px-4 pt-16"
    >
      <div className="max-w-3xl mx-auto">
        {/* Profile Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-2xl text-white font-bold">PK</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-bold text-[var(--foreground)] mb-1"
        >
          Pavan Karthik Garaga
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-[var(--foreground)] mb-1"
        >
          Full-Stack Developer
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-[var(--foreground-secondary)] mb-6 flex items-center gap-1"
        >
          Vijayawada, India 
          <Image src="/indiaflag.svg" alt="India" width={22} height={18} />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base text-[var(--foreground-secondary)] max-w-2xl mb-6 leading-relaxed"
        >
          Specializing in frontend development with{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--foreground)]/10 rounded text-[var(--foreground)] font-medium">
            <SiNextdotjs className="text-sm" />
            Next.js(React.js)
          </span>
          . I am passionate about building dynamic, responsive web applications. Alongside my frontend expertise, I also have experience in backend development with{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--foreground)]/10 rounded text-[var(--foreground)] font-medium">
            <FaNodeJs className="text-sm" />
            Spring Boot
          </span>
          {' '}and{' '}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[var(--foreground)]/10 rounded text-[var(--foreground)] font-medium">
            <SiJavascript className="text-sm" />
            Java
          </span>
          .
        </motion.p>

        {/* Resume and Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-3 flex-wrap mb-8"
        >
          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Resume
            <FaDownload className="text-xs" />
          </motion.a>

          {/* Social Links with background */}
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.target}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20  rounded-full hover:border-[var(--foreground-secondary)]/40  transition-colors"
            >
              <link.icon className="text-lg text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* LeetCode Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          {/* <div className="flex items-center gap-2 mb-4">
            <SiLeetcode className="text-lg text-[var(--foreground-secondary)]" />
            <h3 className="text-base font-semibold text-[var(--foreground)]">
              Recent Leetcode Submissions
            </h3>
          </div> */}

          {/* LeetCode Submission Card */}
          {/* <div className="bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-[var(--foreground-secondary)]">#1464</span>
                  <h4 className="text-sm font-medium text-[var(--foreground)]">
                    Maximum Product of Two Elements in an Array
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-[var(--foreground)]/10 text-[var(--foreground-secondary)] rounded">
                    Array
                  </span>
                  <span className="px-2 py-1 bg-[var(--foreground)]/10 text-[var(--foreground-secondary)] rounded">
                    Sorting
                  </span>
                  <span className="text-[var(--foreground-secondary)]">Oct 10, 2025</span>
                </div>
              </div>
            </div>
          </div> */}
        </motion.div>

        {/* Tech Stack - Monochrome */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-base font-semibold text-[var(--foreground)] mb-4">
            Tech Stack
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="group relative"
                  title={tech.name}
                >
                  <Icon 
                    className="text-4xl text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
