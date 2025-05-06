
import React from 'react';
import { Music4, Disc } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`${isMobile ? 'h-9 w-9' : 'h-10 w-10'} rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center`}>
            <Music4 className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} text-white animate-pulse-soft`} />
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <Disc className={`${isMobile ? 'h-9 w-9' : 'h-10 w-10'} text-neon-blue opacity-30 animate-spin-slow`} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} font-bold font-audiowide tracking-tight golden-text`}>
            Music Video Maker
          </span>
          <span className={`${isMobile ? 'text-xs' : 'text-sm md:text-base'} font-bold font-audiowide tracking-tight golden-text -mt-1`}>
            Studio
          </span>
        </div>
      </div>
      {!isMobile && (
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300 ml-12 -mt-1"
        >
          Presented by AiWebTools.Ai
        </a>
      )}
      {isMobile && (
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300 -mt-1"
        >
          AiWebTools.Ai
        </a>
      )}
    </div>
  );
};

export default Logo;
