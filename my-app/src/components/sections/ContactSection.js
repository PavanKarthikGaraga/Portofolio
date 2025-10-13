'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  const email = 'pavankarthik107@gmail.com';
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/pavankarthikgaraga',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/pavankarthikgaraga',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/pavankarthikgaraga',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: `mailto:${email}`,
    }
  ];

  return (
    <section id="contact" className=" px-4 pb-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            {/* Email */}
            <div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-3">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <FaEnvelope />
                <span>{email}</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-[var(--foreground-secondary)] mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg hover:border-[var(--foreground-secondary)]/40 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="text-xl text-[var(--foreground-secondary)] hover:text-[var(--foreground)]" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
