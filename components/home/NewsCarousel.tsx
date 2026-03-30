'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsItems } from '@/lib/constants';

export default function NewsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const cardWidth = 300 + 24; // card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#F5F5F5] py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#003057]">Latest News</h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003057]"
            aria-label="Previous news"
          >
            <ChevronLeft size={24} className="text-[#003057]" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003057]"
            aria-label="Next news"
          >
            <ChevronRight size={24} className="text-[#003057]" />
          </button>

          {/* Scrolling Container */}
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="min-w-[260px] md:min-w-[300px] snap-start overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                {/* Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${item.imageGradient}`} />

                {/* Content */}
                <div className="p-5">
                  <time className="text-xs uppercase text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-[#003057]">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="mt-3 inline-block text-sm font-medium text-[#C8102E] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8102E]"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
