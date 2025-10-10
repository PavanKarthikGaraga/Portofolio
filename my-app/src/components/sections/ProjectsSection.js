'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from 'react-icons/fa';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Arbeit – AI Job Portal",
      description: "AI-powered resume editor with ATS scanner and mentorship matching. Achieved 2nd Place at Siddhartha College Hackathon.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "MongoDB Atlas", "Gemini API", "AWS", "Tailwind CSS"],
      category: "AI/ML",
      githubUrl: "https://github.com/pavankarthikgaraga/arbeit",
      featured: true
    },
    {
      id: 4,
      title: "Company Dashboard",
      description: "Internal operations management dashboard with data visualization and role-based access control.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express.js", "Chart.js"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/company-dashboard",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with theme switching, animations, and optimized performance.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "Frontend",
      githubUrl: "https://github.com/pavankarthikgaraga/portfolio",
      liveUrl: "https://pavankarthikgaraga.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Client Websites Collection",
      description: "Multiple client websites built for Avanflix Media & Entertainment with modern web technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/client-websites",
      featured: false
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "AI/ML"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Featured </span>
Projects
          </h2>
          <p className="text-lg text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="w-24 h-1 bg-[var(--foreground)] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--foreground-secondary)]/20"
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
          {project.title}
        </h3>
        <p className="text-[var(--foreground-secondary)] mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[var(--accent-secondary)] text-[var(--foreground-secondary)] rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-[var(--background)] border border-[var(--foreground-secondary)] rounded hover:border-[var(--foreground)] transition-colors"
        >
          <FaGithub className="text-lg text-[var(--foreground-secondary)]" />
        </motion.a>
        {project.liveUrl && (
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-[var(--background)] border border-[var(--foreground-secondary)] rounded hover:border-[var(--foreground)] transition-colors"
        >
          <FaExternalLinkAlt className="text-lg text-[var(--foreground-secondary)]" />
        </motion.a>
        )}
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
