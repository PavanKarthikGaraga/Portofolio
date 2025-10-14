'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences, achievement } from '../../data/experiences';

const ExperienceSection = () => {

  return (
    <section id="experience">
      <div className="max-w-2xl mx-auto">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-8">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--foreground-secondary)]/30 pl-6 pb-4"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-[var(--foreground)]">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-[var(--foreground-secondary)]">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-[var(--foreground-secondary)]">
                    {exp.title}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-[var(--foreground-secondary)] flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--foreground-secondary)] flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Achievement</h2>
          
          <div className="bg-[var(--background-secondary)] rounded-lg p-6 border border-[var(--foreground-secondary)]/20">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  {achievement.event}
                </p>
              </div>
              <span className="px-3 py-1 bg-[var(--foreground)]/10 text-[var(--foreground)] rounded text-sm font-medium">
                {achievement.position}
              </span>
            </div>
            <p className="text-sm text-[var(--foreground-secondary)]">
              {achievement.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
