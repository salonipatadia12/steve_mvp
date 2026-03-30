'use client';

import { motion } from 'framer-motion';
import { schoolOfChoiceItems } from '@/lib/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function SchoolOfChoice() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-3">
        {/* LEFT: 3x2 Grid of Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 gap-4 lg:col-span-2"
        >
          {schoolOfChoiceItems.map((card) => (
            <motion.div
              key={card.label}
              variants={item}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003057]"
              style={{ backgroundColor: card.color }}
              tabIndex={0}
              role="button"
              aria-label={`Learn more about ${card.label}`}
            >
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">{card.label}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT: Sticky Content */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#C8102E]">
            School of Choice
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            Wichita Public Schools offers a wide variety of activities and learning opportunities for all students.
            From career and technical education to fine arts, athletics, and specialized programs, we provide
            pathways that prepare students for success in college, career, and life. Explore our programs and find
            the perfect fit for your child&apos;s interests and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
