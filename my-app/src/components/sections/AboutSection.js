'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutSection = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working effectively in team environments"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Staying updated with latest technologies and trends"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
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
            <span className="text-[var(--foreground)]">About </span>
Me
          </h2>
          <div className="w-24 h-1 bg-[var(--foreground)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed">
              I&apos;m a passionate full-stack developer with a love for creating innovative web applications
              that solve real-world problems. With expertise in modern web technologies, I enjoy building
              scalable and user-friendly solutions that make a difference.
            </p>

            {/* <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed">
              My journey in software development began with curiosity and has evolved into a deep commitment
              to crafting high-quality digital experiences. I believe in writing clean, maintainable code
              and staying up-to-date with the latest industry trends and best practices.
            </p> */}

            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or participating in hackathons. I thrive in collaborative environments and enjoy
              working with diverse teams to bring creative ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[var(--accent-secondary)]/20 text-[var(--foreground-secondary)] rounded-full text-sm font-medium"
              >
                Problem Solver
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[var(--accent-secondary)]/20 text-[var(--foreground-secondary)] rounded-full text-sm font-medium"
              >
                Team Player
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[var(--accent-secondary)]/20 text-[var(--foreground-secondary)] rounded-full text-sm font-medium"
              >
                Continuous Learner
              </motion.span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-[var(--background-secondary)] rounded-xl border border-[var(--foreground-secondary)]/20 hover:border-[var(--accent)]/30 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-[var(--background-secondary)] rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg"
                  >
                    <Icon className="text-[var(--foreground)] text-xl" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
            >
              2+
            </motion.div>
            <p className="text-[var(--foreground-secondary)] font-medium">Years Experience</p>
          </div>

          <div className="text-center">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.6, type: "spring", delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
            >
              15+
            </motion.div>
            <p className="text-[var(--foreground-secondary)] font-medium">Projects Completed</p>
          </div>

          <div className="text-center">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
            >
              5+
            </motion.div>
            <p className="text-[var(--foreground-secondary)] font-medium">Technologies</p>
          </div>

          {/* <div className="text-center">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2"
            >
              3+
            </motion.div>
            <p className="text-[var(--foreground-secondary)] font-medium">Hackathons Won</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
