'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <nav
      className={`sticky top-0 z-40 bg-white border-b border-gray-200 h-20 transition-shadow ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-10 md:h-10"
            aria-hidden="true"
          >
            {/* Apple shape */}
            <circle cx="20" cy="22" r="14" fill="#C8102E" />
            {/* Leaf */}
            <path
              d="M20 8 C22 8, 24 10, 24 12 C24 10, 22 8, 20 8"
              fill="#C8102E"
            />
            <path
              d="M20 8 L20 12"
              stroke="#C8102E"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[#003057] font-bold text-sm md:text-lg tracking-tight">
            WICHITA PUBLIC SCHOOLS
          </span>
        </div>

        {/* Menu button */}
        <button
          onClick={handleMenuClick}
          className="flex items-center gap-2 text-[#003057] font-semibold cursor-pointer hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003057]"
          aria-label="Open navigation menu"
        >
          <span className="hidden sm:inline">Menu</span>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
