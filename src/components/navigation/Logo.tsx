
import React from 'react';
import { Music4 } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-neon-purple flex items-center justify-center">
            <Music4 className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="ml-2">
          <span className="text-sm font-bold golden-text whitespace-nowrap">
            Music Video Maker Studio
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
