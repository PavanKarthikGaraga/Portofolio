'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = 'garagapavankarthik@gmail.com';
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/pavankarthikgaraga',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/pavankarthikgaraga',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/pavankarthikgaraga',
      color: 'hover:text-blue-300'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: `mailto:${email}`,
      color: 'hover:text-red-400'
    }
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4">
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
            <span className="text-[var(--foreground)]">Get In </span>
Touch
          </h2>
          <div className="w-24 h-1 bg-[var(--foreground)] mx-auto rounded-full mb-12"></div>
        </motion.div>

        {/* Simple Contact Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Email Me</h3>
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-lg hover:bg-[var(--accent-secondary)] transition-colors"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg font-medium">{email}</span>
              </motion.a>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Connect With Me</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/20 rounded-lg hover:border-[var(--foreground)] transition-colors"
                    >
                      <Icon className="text-2xl text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactSection;
