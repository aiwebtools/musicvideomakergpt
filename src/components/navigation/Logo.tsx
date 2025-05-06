
import React from 'react';
import { Music4 } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center">
      <div className="relative">
        <div className={`h-10 w-10 rounded-full bg-neon-purple flex items-center justify-center`}>
          <Music4 className={`h-5 w-5 text-white`} />
        </div>
      </div>
      {isMobile ? (
        // Mobile: Single line text
        <div className="ml-2">
          <span className="text-sm font-bold golden-text whitespace-nowrap">
            Music Video Maker Studio
          </span>
        </div>
      ) : (
        // Desktop: Stacked text
        <div className="flex flex-col ml-2">
          <span className="text-sm font-bold golden-text">Music</span>
          <span className="text-sm font-bold golden-text -mt-1">Video</span>
          <span className="text-sm font-bold golden-text -mt-1">Maker</span>
          <span className="text-sm font-bold golden-text -mt-1">Studio</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
