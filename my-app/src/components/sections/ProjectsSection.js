'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Arbeit – AI Job Portal",
      description: "AI-powered resume editor with ATS scanner and mentorship matching. Achieved 2nd Place at Siddhartha College Hackathon.",
      technologies: ["Next.js", "MongoDB Atlas", "Gemini API", "AWS"],
      githubUrl: "https://github.com/pavankarthikgaraga/arbeit",
    },
    {
      id: 2,
      title: "Company Dashboard",
      description: "Internal operations management dashboard with data visualization and role-based access control.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/pavankarthikgaraga/company-dashboard",
    },
    {
      id: 3,
      title: "Social Internship Platform",
      description: "Web platform for managing university social internships with dashboards and RBAC serving 4,000+ users.",
      technologies: ["Next.js", "MySQL", "Node.js", "Nginx"],
      githubUrl: "https://github.com/pavankarthikgaraga/social-internship",
    }
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[var(--background-secondary)] rounded-lg overflow-hidden border border-[var(--foreground-secondary)]/20 hover:border-[var(--foreground-secondary)]/40 transition-all"
              >
                {/* Project Preview */}
                <div className="h-40 bg-gradient-to-br from-[var(--foreground)]/5 to-[var(--foreground)]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--foreground)]/5 backdrop-blur-sm"></div>
                  <div className="relative z-10 text-[var(--foreground-secondary)] text-sm font-mono">
                    {project.title}
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-secondary)] mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[var(--foreground)]/10 text-[var(--foreground-secondary)] rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
