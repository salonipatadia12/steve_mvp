'use client';

import { utilityNavItems } from '@/lib/constants';
import { useAIAvatar } from '@/components/ai/AIAvatarProvider';

export default function UtilityBar() {
  const { openPanel } = useAIAvatar();

  const handleAskAI = () => {
    openPanel();
  };

  return (
    <div className="bg-[#003057] h-10 w-full">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center gap-4 md:gap-8 px-4">
        {utilityNavItems.map((item, index) => {
          const Icon = item.icon;
          // On mobile, only show "FIND IT FAST" (first item)
          if (index > 0) {
            return (
              <button
                key={item.label}
                className="hidden md:flex items-center gap-2 text-white uppercase tracking-wider text-xs font-semibold hover:opacity-80 transition-opacity"
                aria-label={item.label}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          }
          return (
            <button
              key={item.label}
              className="flex items-center gap-2 text-white uppercase tracking-wider text-xs font-semibold hover:opacity-80 transition-opacity"
              aria-label={item.label}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={handleAskAI}
          className="ml-auto flex items-center gap-1 text-[#D4922A] hover:text-[#F0A832] font-medium text-sm transition-colors"
          aria-label="Open AI Assistant"
        >
          Ask AI ✦
        </button>
      </div>
    </div>
  );
}
