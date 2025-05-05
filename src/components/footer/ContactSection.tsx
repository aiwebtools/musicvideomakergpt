
import { Music4, Star } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <div className="space-y-2">
        <a 
          href="tel:4758008096" 
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          (475) 800-8096
        </a>
        <a 
          href="mailto:Contact@ai-webtools.com" 
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          Contact@ai-webtools.com
        </a>
      </div>
      <div className="pt-4">
        <a 
          href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="golden-button flex items-center gap-2 text-sm"
        >
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <Music4 className="h-4 w-4" />
          <span>Music Video Maker GPT</span>
        </a>
      </div>
    </div>
  );
};
