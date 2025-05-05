
import { Music4, Disc } from "lucide-react";

export const FooterLogo = () => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center">
            <Music4 className="h-5 w-5 text-white animate-pulse-soft" />
            <div className="absolute inset-0 rounded-full flex items-center justify-center">
              <Disc className="h-8 w-8 text-neon-blue opacity-30 animate-spin-slow" />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold font-audiowide golden-text">Music Video Maker Studio</h3>
      </div>
      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs text-gray-400 hover:text-neon-purple transition-colors duration-300 ml-10 -mt-1"
      >
        Presented by AiWebTools.Ai
      </a>
    </div>
  );
};
