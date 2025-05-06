
import React from 'react';
import { Music4 } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`h-12 w-12 rounded-full bg-neon-purple flex items-center justify-center`}>
            <Music4 className={`h-6 w-6 text-white`} />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold golden-text">Music</span>
          <span className="text-lg font-bold golden-text -mt-1">Video</span>
          <span className="text-lg font-bold golden-text -mt-1">Maker</span>
          <span className="text-lg font-bold golden-text -mt-1">Studio</span>
        </div>
      </div>
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300"
      >
        AiWebTools.Ai
      </a>
    </div>
  );
};

export default Logo;
