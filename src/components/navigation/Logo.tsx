
import React from 'react';
import { Music, Disc } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center">
          <Music className="h-6 w-6 text-white animate-pulse-soft" />
          <div className="absolute inset-0 rounded-full flex items-center justify-center">
            <Disc className="h-10 w-10 text-neon-blue opacity-30 animate-spin-slow" />
          </div>
        </div>
      </div>
      <a href="#" className="text-2xl font-bold font-audiowide tracking-tight gradient-text">
        Music Video Maker GPT
      </a>
    </div>
  );
};

export default Logo;
