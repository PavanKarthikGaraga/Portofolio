'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "internship",
      title: "Full Stack Developer Intern",
      company: "Avanflix Media & Entertainment",
      location: "Remote",
      duration: "August 2024 - Present",
      description: "Building multiple client websites using Next.js and modern web technologies.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
      achievements: [
        "Developing responsive and performant websites for multiple clients",
        "Implementing modern UI/UX designs with Tailwind CSS",
        "Collaborating with design and content teams for seamless delivery"
      ]
    },
    {
      id: 2,
      type: "internship",
      title: "Full Stack Developer Intern",
      company: "Vyuha Innovation Foundation",
      location: "Remote",
      duration: "June 2024 - August 2024",
      description: "Developed a company dashboard for internal operations management.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
      achievements: [
        "Built comprehensive dashboard for streamlining internal operations",
        "Implemented data visualization components for business metrics",
        "Integrated authentication and role-based access control"
      ]
    },
    {
      id: 3,
      type: "internship",
      title: "Full Stack Developer Intern",
      company: "Student Activity Center – KLEF",
      location: "Vijayawada, India",
      duration: "April 2024 - June 2024",
      description: "Developed a social internship management application with RBAC, serving 1,000+ daily users and 4,000+ total users.",
      technologies: ["Next.js", "MySQL", "Node.js", "Nginx"],
      achievements: [
        "Built dashboards and portals for managing student internships efficiently",
        "Implemented role-based access control for different user types",
        "Optimized application performance to handle 1,000+ daily active users"
      ]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Arbeit – AI Job Portal",
      event: "Siddhartha College Hackathon",
      description: "AI-powered resume editor with ATS scanner and mentorship matching",
      date: "2024",
      position: "2nd Place",
      technologies: ["Next.js", "MongoDB Atlas", "Gemini API", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
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
            <span className="text-[var(--foreground)]">Experience & </span>
Achievements
          </h2>
          <p className="text-lg text-[var(--foreground-secondary)] max-w-2xl mx-auto">
            My professional journey and accomplishments in software development
          </p>
          <div className="w-24 h-1 bg-[var(--foreground)] mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Experience Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-3 justify-center">
                <FaBriefcase className="text-blue-500" />
                Professional Experience
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                My journey through various internships and roles
              </p>
            </motion.div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-[var(--background-secondary)] rounded-xl p-6 border border-[var(--foreground-secondary)]/20 hover:border-[var(--accent)]/30 transition-all duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-[var(--foreground)] rounded-full border-4 border-[var(--background)]"></div>

                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                        <FaCalendarAlt />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <span className="text-blue-500 font-medium">{exp.company}</span>
                      <div className="flex items-center gap-1 text-sm text-[var(--foreground-secondary)]">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-[var(--foreground-secondary)] mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[var(--accent-secondary)]/20 text-[var(--foreground-secondary)] rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-[var(--foreground)] mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-[var(--foreground-secondary)] flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-3 justify-center">
                <FaTrophy className="text-yellow-500" />
                Achievement
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                Recognition in hackathon competition
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[var(--background-secondary)] rounded-xl p-8 border border-[var(--foreground-secondary)]/20 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-[var(--foreground)] group-hover:text-yellow-500 transition-colors mb-2">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] mb-3">
                        <span className="font-medium">{achievement.event}</span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-500/20 text-gray-600">
                        {achievement.position}
                      </span>
                    </div>
                  </div>

                  <p className="text-[var(--foreground-secondary)] mb-6 leading-relaxed text-lg">
                    {achievement.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {achievement.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[var(--foreground-secondary)] mb-6">
            Interested in working together? Let&apos;s discuss your next project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
            <FaExternalLinkAlt className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
