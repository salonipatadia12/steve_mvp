'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface AIAvatarContextType {
  isOpen: boolean;
  togglePanel: () => void;
  openPanel: () => void;
  closePanel: () => void;
  isEmbedLoaded: boolean;
}

const AIAvatarContext = createContext<AIAvatarContextType | null>(null);

export function useAIAvatar() {
  const context = useContext(AIAvatarContext);
  if (!context) throw new Error('useAIAvatar must be used within AIAvatarProvider');
  return context;
}

export function AIAvatarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmbedLoaded, setIsEmbedLoaded] = useState(false);

  const togglePanel = useCallback(() => setIsOpen(prev => !prev), []);
  const openPanel = useCallback(() => setIsOpen(true), []);
  const closePanel = useCallback(() => setIsOpen(false), []);

  // Inject the D-ID embed script once on mount
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[data-name="did-agent"]')) {
      setIsEmbedLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v2/index.js';
    script.setAttribute('data-mode', 'fabio');
    script.setAttribute('data-client-key', 'ck_FviviQyKcjythVuhejMvt');
    script.setAttribute('data-agent-id', 'v2_agt_Hhb66tfp');
    script.setAttribute('data-name', 'did-agent');
    script.setAttribute('data-monitor', 'true');
    script.setAttribute('data-orientation', 'horizontal');
    script.setAttribute('data-position', 'right');
    script.setAttribute('data-open-mode', 'compact');

    script.onload = () => {
      console.log('D-ID embed script loaded successfully');
      setIsEmbedLoaded(true);
    };

    script.onerror = (err) => {
      console.error('D-ID embed script failed to load:', err);
    };

    document.body.appendChild(script);

    return () => {
      // Don't remove on unmount — D-ID manages its own lifecycle
    };
  }, []);

  return (
    <AIAvatarContext.Provider value={{ isOpen, togglePanel, openPanel, closePanel, isEmbedLoaded }}>
      {children}
    </AIAvatarContext.Provider>
  );
}
