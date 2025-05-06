import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Music4 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isMenuOpen, onClose }: MobileNavigationProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Handle mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Don't render anything on the server
  if (!mounted) return null;

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b border-neon-purple/30">
        <Button 
          onClick={onClose} 
          variant="ghost" 
          className="p-2 text-neon-purple hover:bg-transparent"
        >
          <X className="h-8 w-8" />
        </Button>
        <h2 className="text-2xl text-neon-purple font-medium">Menu</h2>
        <div className="w-8"></div> {/* Empty div for flex balance */}
      </div>
      
      <div className="p-4 space-y-6">
        <a 
          href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-amber-500 to-amber-700 text-amber-900 font-bold py-4 px-4 rounded-md shadow-lg flex items-center justify-center gap-2 w-full"
          onClick={onClose}
        >
          <Music4 className="h-6 w-6" />
          <span className="text-xl">Music Video Maker GPT</span>
        </a>

        {/* Animate Your Scenes */}
        <div className="pt-4">
          <p className="font-medium mb-4 text-neon-purple text-2xl">Animate Your Scenes:</p>
          
          {/* Image to Video Generators */}
          <div className="mb-4">
            <button 
              onClick={() => toggleSection('video')}
              className="flex w-full items-center justify-between py-4 px-4 text-xl font-medium bg-black rounded-md border border-neon-purple text-white"
            >
              <span>Image to Video Generators</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openSection === 'video' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'video' && (
              <div className="py-2 space-y-2 animate-fade-in">
                <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>Google VEO</a>
                <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>SORA</a>
                <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>KLING</a>
                <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>HAILUO</a>
                <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>HIGGSFIELD</a>
                <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>RunwayML</a>
                <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>PIKA LABS</a>
              </div>
            )}
          </div>
          
          {/* Music & FX Generation */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('music')}
              className="flex w-full items-center justify-between py-4 px-4 text-xl font-medium bg-black rounded-md border border-neon-purple text-white"
            >
              <span>Music & FX Generation</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openSection === 'music' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'music' && (
              <div className="py-2 space-y-2 animate-fade-in">
                <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>SUNO Music Generator</a>
                <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>UDIO Music Generator</a>
                <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>Eleven Labs Voice & Sound Effect Generator</a>
              </div>
            )}
          </div>
          
          {/* Lipsync */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('lipsync')}
              className="flex w-full items-center justify-between py-4 px-4 text-xl font-medium bg-black rounded-md border border-neon-purple text-white"
            >
              <span>Lipsync</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openSection === 'lipsync' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'lipsync' && (
              <div className="py-2 space-y-2 animate-fade-in">
                <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>HEDRA</a>
              </div>
            )}
          </div>
          
          {/* Editing Tools */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('editing')}
              className="flex w-full items-center justify-between py-4 px-4 text-xl font-medium bg-black rounded-md border border-neon-purple text-white"
            >
              <span>Editing Tools</span>
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openSection === 'editing' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'editing' && (
              <div className="py-2 space-y-2 animate-fade-in">
                <a href="https://www.videoleapapp.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>VideoLeap</a>
                <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>CapCut</a>
                <a href="https://download.wondershare.com/filmora_full846.exe" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-3 px-4 text-lg" onClick={onClose}>Download Filmora</a>
              </div>
            )}
          </div>
        </div>

        {/* Other Creative Production AI Tools */}
        <div className="pt-4">
          <p className="font-medium mb-4 text-neon-purple text-2xl">Other Creative Production AI Tools:</p>
          <div className="space-y-4">
            <a 
              href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-white py-4 px-4 rounded-md text-center bg-black border border-neon-purple text-xl"
              onClick={onClose}
            >
              AI Movie Production Studio
            </a>
            <a 
              href="https://stagemasterai.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-white py-4 px-4 rounded-md text-center bg-black border border-neon-purple text-xl"
              onClick={onClose}
            >
              Stage Master AI Suite
            </a>
          </div>
        </div>

        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-white bg-neon-purple py-4 text-center font-medium rounded-md text-xl mt-6"
          onClick={onClose}
        >
          More AI Tools
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
