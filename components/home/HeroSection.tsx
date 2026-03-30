'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted');
  };

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-gradient-to-br from-[#003057] to-[#00566B]">
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 37px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, white 35px, white 37px)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] items-center justify-center px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <p className="mb-4 md:mb-6 text-xs md:text-sm font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D4922A]">
            USD 259 — WICHITA, KANSAS
          </p>

          {/* Heading */}
          <h1 className="mb-4 md:mb-6 font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Welcome to Wichita Public Schools
          </h1>

          {/* Subtext */}
          <p className="mb-8 md:mb-10 text-base md:text-lg text-white/70">
            Empowering nearly 50,000 students across 90+ schools
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="mx-auto max-w-xl">
            <div className="flex items-center gap-2 md:gap-4 rounded-full bg-white px-4 md:px-6 py-3 md:py-4 shadow-xl">
              <Search className="text-gray-400 flex-shrink-0" size={20} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search schools, programs, resources..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
                aria-label="Search"
              />
              <button
                type="submit"
                className="rounded-full bg-[#C8102E] px-4 md:px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A00D24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Submit search"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
