'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaLinux
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiExpress, SiVercel,SiMysql } from 'react-icons/si';

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      category: "Frontend",
      level: "Expert"
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      category: "Language",
      level: "Intermediate"
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933",
      category: "Backend",
      level: "Expert"
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      category: "Backend",
      level: "Expert"
    },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      category: "Language",
      level: "Intermediate"
    },
    {
      name: "Java",
      icon: FaJava,
      color: "#ED8B00",
      category: "Language",
      level: "Intermediate"
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      category: "Database",
      level: "Intermediate"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4169E1",
      category: "Database",
      level: "Intermediate"
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "Styling",
      level: "Expert"
    },
    // {
    //   name: "HTML5",
    //   icon: FaHtml5,
    //   color: "#E34F26",
    //   category: "Frontend",
    //   level: "Expert"
    // },
    // {
    //   name: "CSS3",
    //   icon: FaCss3Alt,
    //   color: "#1572B6",
    //   category: "Styling",
    //   level: "Expert"
    // },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      category: "Language",
      level: "Expert"
    },
    // {
    //   name: "Git",
    //   icon: FaGitAlt,
    //   color: "#F05032",
    //   category: "Tools",
    //   level: "Expert"
    // },
    // {
    //   name: "GitHub",
    //   icon: FaGithub,
    //   color: "#181717",
    //   category: "Tools",
    //   level: "Expert"
    // },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ED",
      category: "DevOps",
      level: "Intermediate"
    },
    // {
    //   name: "AWS",
    //   icon: FaAws,
    //   color: "#FF9900",
    //   category: "Cloud",
    //   level: "Beginner"
    // },
    {
      name: "Linux",
      icon: FaLinux,
      color: "#FCC624",
      category: "Tools",
      level: "Intermediate"
    },
    // {
    //   name: "Vercel",
    //   icon: SiVercel,
    //   color: "#000000",
    //   category: "Deployment",
    //   level: "Intermediate"
    // },
    // {
    //   name: "Figma",
    //   icon: FaFigma,
    //   color: "#F24E1E",
    //   category: "Design",
    //   level: "Intermediate"
    // }
  ];

  const categories = ["All", "Frontend", "Backend", "Language", "Database", "Styling", "Tools", "DevOps", "Cloud", "Deployment", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech = selectedCategory === "All"
    ? techStack
    : techStack.filter(tech => tech.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Beginner": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4">
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
            <span className="text-[var(--foreground)]">Tech </span>
Stack
          </h2>
          <p className="text-lg text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-[var(--foreground)] mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Tech Stack - Simple Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.slice(0, 15).map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <Icon className="text-3xl text-[var(--foreground-secondary)] mb-2" />
                  <span className="text-sm text-[var(--foreground-secondary)] text-center">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default TechStackSection;
