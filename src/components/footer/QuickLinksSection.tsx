
import { Music4, Video, Layers, HelpCircle, AlertTriangle, Theater } from "lucide-react";

export const QuickLinksSection = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <div className="space-y-2">
        <a 
          href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm golden-text hover:scale-105 transition-transform duration-200"
        >
          <Music4 className="h-4 w-4" />
          <span>Music Video Maker GPT</span>
        </a>
        <a 
          href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          <Video className="h-4 w-4" />
          <span>AI Movie Production Studio</span>
        </a>
        <a 
          href="https://stagemasterai.lovable.app/?via=aiwebtools" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          <Theater className="h-4 w-4" />
          <span>Stage Master AI Suite for the Performing Arts</span>
        </a>
        <a 
          href="#faq" 
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          <HelpCircle className="h-4 w-4" />
          <span>FAQ</span>
        </a>
        <a 
          href="#disclaimer" 
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          <AlertTriangle className="h-4 w-4" />
          <span>Disclaimer</span>
        </a>
      </div>
    </div>
  );
};
