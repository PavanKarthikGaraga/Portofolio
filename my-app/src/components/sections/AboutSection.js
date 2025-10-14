'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const AboutSection = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'pavankarthik107@gmail.com',
      href: 'mailto:pavankarthik107@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Vijayawada, Andhra Pradesh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/pavankarthikgaraga',
      username: '@pavankarthikgaraga'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/pavankarthikgaraga',
      username: 'Pavan Karthik Garaga'
    },
    {
      icon: BsTwitterX,
      label: 'Twitter',
      href: 'https://twitter.com/pavankarthikgaraga',
      username: '@pavankarthikgaraga'
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-6">About Me</h1>

          <div className="space-y-4 text-sm text-[var(--foreground-secondary)] leading-relaxed">
            <p>
              Hi! I&apos;m Pavan Karthik Garaga, a passionate Full-Stack Developer specializing in modern web technologies.
              I love creating dynamic, responsive, and user-friendly applications that solve real-world problems.
            </p>

            <p>
              My journey in software development began during my college years, where I discovered my passion for
              building digital solutions. I specialize in the MERN stack and have experience with various modern
              frameworks and tools.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I believe in continuous learning and staying
              up-to-date with the latest industry trends.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Contact Information</h2>

          <div className="space-y-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg"
                >
                  <Icon className="text-lg text-[var(--foreground-secondary)]" />
                  <div>
                    <p className="text-xs text-[var(--foreground-secondary)] font-medium">{contact.label}</p>
                    {contact.href !== '#' ? (
                      <a
                        href={contact.href}
                        className="text-sm text-[var(--foreground)] hover:text-[var(--foreground-secondary)] transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--foreground)]">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Connect With Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg hover:border-[var(--foreground-secondary)]/40 transition-all"
                >
                  <Icon className="text-xl text-[var(--foreground-secondary)]" />
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">{social.label}</p>
                    <p className="text-xs text-[var(--foreground-secondary)]">{social.username}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Skills/Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Interests & Goals</h2>

          <div className="space-y-3 text-sm text-[var(--foreground-secondary)] leading-relaxed">
            <p>
              I&apos;m always excited to work on challenging projects that push the boundaries of technology.
              My goal is to create meaningful digital experiences that make a positive impact on people&apos;s lives.
            </p>

            <p>
              Currently focusing on mastering advanced React patterns, exploring AI/ML integration in web applications,
              and contributing to the open-source community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
