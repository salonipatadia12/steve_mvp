'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { quickLinks } from '@/lib/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QuickLinksBar() {
  return (
    <div className="w-full border-y border-gray-100 bg-white py-8 shadow-sm">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="mx-auto grid max-w-7xl grid-cols-4 gap-4 px-4 md:grid-cols-8"
      >
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <motion.div key={link.label} variants={item}>
              <Link
                href={link.href}
                className="group flex flex-col items-center transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003057] rounded-lg"
              >
                <Icon
                  size={36}
                  className="text-[#003057] transition-colors group-hover:text-[#C8102E]"
                  aria-hidden="true"
                />
                <span className="mt-2 text-center text-xs font-medium md:text-sm">
                  {link.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
