'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const ContactSection = () => {
    return (
        <section id="contact" className="py-10 lg:py-12">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-2">
                        Send me a message
                    </h2>
                    <p className="text-sm text-[var(--foreground-secondary)] mb-10">
                        Fill out the form below and I will get back to you as soon as possible.
                    </p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/10 text-[var(--foreground)] placeholder:text-[var(--foreground-secondary)]/50 focus:outline-none focus:border-[var(--foreground-secondary)]/30 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-[var(--foreground)]">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+1 (123) xxx-xxxx"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/10 text-[var(--foreground)] placeholder:text-[var(--foreground-secondary)]/50 focus:outline-none focus:border-[var(--foreground-secondary)]/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/10 text-[var(--foreground)] placeholder:text-[var(--foreground-secondary)]/50 focus:outline-none focus:border-[var(--foreground-secondary)]/30 transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                placeholder="Tell me about your project or just say hello..."
                                required
                                className="w-full px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--foreground-secondary)]/10 text-[var(--foreground)] placeholder:text-[var(--foreground-secondary)]/50 focus:outline-none focus:border-[var(--foreground-secondary)]/30 transition-colors resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="group flex items-center gap-2 px-3 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-medium hover:opacity-90 transition-all shadow-lg"
                        >
                            <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            <span>Send Message</span>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
