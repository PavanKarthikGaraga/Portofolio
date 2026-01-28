'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';

const WorksSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto">
        {/* Works Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Projects</h1>
          <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
            A collection of projects I&apos;ve worked on, showcasing my skills in full-stack development,
            UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[var(--background-secondary)] rounded-lg border border-[var(--foreground-secondary)]/20 hover:border-[var(--foreground-secondary)]/40 transition-all overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-[var(--foreground)]/5 to-[var(--foreground)]/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--foreground)]/5 backdrop-blur-sm"></div>
                <div className="relative z-10 text-[var(--foreground-secondary)] text-sm font-mono">
                  {project.title}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 ml-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <FaGithub className="text-lg" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[var(--foreground-secondary)] mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[var(--foreground)]/10 text-[var(--foreground-secondary)] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
