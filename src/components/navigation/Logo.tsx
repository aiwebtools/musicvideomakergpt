
import React from 'react';
import { Music4, Disc } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center">
            <Music4 className="h-6 w-6 text-white animate-pulse-soft" />
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <Disc className="h-10 w-10 text-neon-blue opacity-30 animate-spin-slow" />
            </div>
          </div>
        </div>
        <a href="#" className="text-lg md:text-2xl font-bold font-audiowide tracking-tight golden-text">
          Music Video Maker
        </a>
      </div>
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300 ml-0 md:ml-12 -mt-1"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};

export default Logo;
