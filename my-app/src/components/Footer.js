'use client';

import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-4">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <p className="text-sm text-[var(--foreground-secondary)] mb-1">
                    Design & Developed by <span className="text-[var(--foreground)] font-semibold text-base">Karthik</span>
                </p>
                <p className="text-sm text-[var(--foreground-secondary)]/60">
                    © {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
