
import React from 'react';
import { Music4, Disc } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`h-8 w-8 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center`}>
            <Music4 className={`h-5 w-5 text-white animate-pulse-soft`} />
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <Disc className={`h-8 w-8 text-neon-blue opacity-30 animate-spin-slow`} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className={`text-sm font-bold font-audiowide tracking-tight golden-text`}>
            Music Video Maker
          </span>
          <span className={`text-xs font-bold font-audiowide tracking-tight golden-text -mt-1`}>
            Studio
          </span>
        </div>
      </div>
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300 -mt-1"
      >
        AiWebTools.Ai
      </a>
    </div>
  );
};

export default Logo;
