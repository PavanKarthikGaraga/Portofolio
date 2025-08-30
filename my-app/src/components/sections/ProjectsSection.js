'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from 'react-icons/fa';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data, and beautiful visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "OpenWeather API", "CSS3"],
      category: "Frontend",
      githubUrl: "https://github.com/pavankarthikgaraga/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "AI Chat Application",
      description: "Intelligent chat application powered by AI with natural language processing and context awareness.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "WebSocket"],
      category: "AI/ML",
      githubUrl: "https://github.com/pavankarthikgaraga/ai-chat-app",
      liveUrl: "https://ai-chat-demo.vercel.app",
      featured: true
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
      featured: true
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support, SEO optimization, and content management system.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "MDX", "Sanity CMS", "Tailwind CSS"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/blog-platform",
      liveUrl: "https://blog-platform-demo.vercel.app",
      featured: false
    },
    {
      id: 7,
      title: "Data Visualization Tool",
      description: "Interactive data visualization tool for analyzing and presenting complex datasets with multiple chart types.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Python", "Pandas", "Flask"],
      category: "Data Science",
      githubUrl: "https://github.com/pavankarthikgaraga/data-viz-tool",
      liveUrl: "https://data-viz-demo.vercel.app",
      featured: false
    },
    {
      id: 8,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with insights, scheduling, and performance metrics.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js", "Express"],
      category: "Full-Stack",
      githubUrl: "https://github.com/pavankarthikgaraga/social-dashboard",
      liveUrl: "https://social-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 9,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      githubUrl: "https://github.com/pavankarthikgaraga/fitness-app",
      liveUrl: "https://fitness-app-demo.vercel.app",
      featured: false
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "AI/ML", "Data Science", "Mobile"];

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
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[var(--background-secondary)] rounded-lg border border-[var(--foreground-secondary)]/20"
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
              <div className="flex gap-4 mt-4 md:mt-0">
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
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default ProjectsSection;
