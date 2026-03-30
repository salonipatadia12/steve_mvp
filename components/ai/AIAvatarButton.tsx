'use client';

import { GraduationCap, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AIAvatarButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 100px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    // Show immediately if already scrolled
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // D-ID's embed (fabio mode) creates its own FAB button at bottom-right.
  // Our custom button is hidden since D-ID handles the UI.
  // If you want to HIDE D-ID's default button and use only ours,
  // we can add CSS to hide theirs. For now, let D-ID handle it.
  return null;
}
