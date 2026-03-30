'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="bg-[#003057] text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Contact Information */}
          <div className="space-y-3">
            <p className="text-sm">903 S. Edgemoor</p>
            <p className="text-sm">Wichita, KS 67218</p>
            <p className="text-sm mt-4">Phone: 316-973-4000</p>
            <a
              href="/contact"
              className="inline-block text-sm text-white hover:text-[#F0A832] transition-colors mt-2"
            >
              Email Us
            </a>
          </div>

          {/* Column 2: Logo */}
          <div className="flex flex-col items-center justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
            >
              {/* Apple shape - white version */}
              <circle cx="20" cy="22" r="14" fill="white" />
              {/* Leaf */}
              <path d="M20 8 C22 8, 24 10, 24 12 C24 10, 22 8, 20 8" fill="white" />
              <path
                d="M20 8 L20 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-white font-bold text-base tracking-tight text-center">
              WICHITA PUBLIC SCHOOLS
            </span>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-6">
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Visit our YouTube channel"
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Visit our Twitter page"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
            </div>

            {/* Español section */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-sm font-semibold">Español</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                aria-label="Visit our Spanish Facebook page"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded"
                aria-label="Visit our Spanish Instagram page"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
              <a href="/non-discrimination" className="hover:text-[#F0A832] transition-colors">
                Non-Discrimination Statement
              </a>
              <a href="/accessibility" className="hover:text-[#F0A832] transition-colors">
                Accessibility Statement
              </a>
              <a href="/sitemap" className="hover:text-[#F0A832] transition-colors">
                Site Map
              </a>
              <a href="/feedback" className="hover:text-[#F0A832] transition-colors">
                Questions or Feedback
              </a>
              <a href="/privacy" className="hover:text-[#F0A832] transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="text-xs text-white/40">
              Powered by Keel AI
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
