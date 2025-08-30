'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "internship",
      title: "Full-Stack Developer Intern",
      company: "TechCorp Solutions",
      location: "Hyderabad, India",
      duration: "June 2023 - August 2023",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on client projects and implemented responsive designs.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      achievements: [
        "Built a real-time chat application for internal use",
        "Improved application performance by 40%",
        "Mentored junior interns on best practices"
      ]
    },
    {
      id: 2,
      type: "internship",
      title: "Frontend Developer",
      company: "Digital Innovations Ltd",
      location: "Remote",
      duration: "January 2023 - May 2023",
      description: "Focused on creating user-friendly interfaces and improving user experience. Worked closely with UX designers to implement pixel-perfect designs.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      achievements: [
        "Redesigned company dashboard increasing user satisfaction by 30%",
        "Implemented accessibility features following WCAG guidelines",
        "Created reusable component library"
      ]
    },
    {
      id: 3,
      type: "internship",
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      location: "Bangalore, India",
      duration: "Summer 2022",
      description: "Contributed to the development of a SaaS platform. Gained experience in agile development methodologies and version control systems.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "Git"],
      achievements: [
        "Developed automated testing scripts",
        "Participated in code reviews and pair programming",
        "Deployed features to production environment"
      ]
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon Winner",
      event: "SIH 2023",
      description: "Led a team of 4 to develop an AI-powered healthcare solution for rural areas",
      date: "December 2023",
      position: "1st Place",
      technologies: ["React", "Node.js", "Machine Learning", "MongoDB"]
    },
    {
      id: 2,
      title: "Hackathon Excellence Award",
      event: "CodeFest 2023",
      description: "Built a blockchain-based voting system with real-time verification",
      date: "October 2023",
      position: "2nd Place",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum"]
    },
    {
      id: 3,
      title: "Innovation Challenge Winner",
      event: "TechCrunch Disrupt",
      description: "Developed a sustainable energy monitoring platform for smart cities",
      date: "August 2023",
      position: "Finalist",
      technologies: ["IoT", "Python", "AWS", "React"]
    },
    {
      id: 4,
      title: "Open Source Contributor",
      event: "GitHub",
      description: "Active contributor to various open-source projects and maintainer of 2 libraries",
      date: "Ongoing",
      position: "Top Contributor",
      technologies: ["JavaScript", "TypeScript", "Node.js"]
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-3">
                <FaBriefcase className="text-blue-500" />
                Professional Experience
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                My journey through various internships and roles
              </p>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-3">
                <FaTrophy className="text-yellow-500" />
                Achievements & Awards
              </h3>
              <p className="text-[var(--foreground-secondary)]">
                Recognition and accomplishments in hackathons and competitions
              </p>
            </motion.div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[var(--background-secondary)] rounded-xl p-6 border border-[var(--foreground-secondary)]/20 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-yellow-500 transition-colors mb-1">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)] mb-2">
                        <span className="font-medium">{achievement.event}</span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        achievement.position === '1st Place'
                          ? 'bg-yellow-500/20 text-yellow-600'
                          : achievement.position === '2nd Place'
                          ? 'bg-gray-500/20 text-gray-600'
                          : 'bg-blue-500/20 text-blue-600'
                      }`}>
                        {achievement.position}
                      </span>
                    </div>
                  </div>

                  <p className="text-[var(--foreground-secondary)] mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-sm"
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
