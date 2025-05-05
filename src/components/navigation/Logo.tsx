
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue animate-pulse-soft"></div>
        <div className="absolute inset-0 rounded-full border border-neon-purple animate-spin-slow opacity-70"></div>
      </div>
      <a href="#" className="text-2xl font-bold tracking-tight neon-text-purple">
        Music Video Maker GPT
      </a>
    </div>
  );
};

export default Logo;
