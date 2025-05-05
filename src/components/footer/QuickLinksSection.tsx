
import { Music4 } from "lucide-react";

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
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          AI Movie Production Studio
        </a>
        <a 
          href="https://stagemasterai.lovable.app/?via=aiwebtools" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          Stage Master AI Suite
        </a>
        <a 
          href="#faq" 
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          FAQ
        </a>
        <a 
          href="#disclaimer" 
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          Disclaimer
        </a>
      </div>
    </div>
  );
};
