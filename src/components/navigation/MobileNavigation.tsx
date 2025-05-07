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
    console.log("MobileNavigation mounted, isMenuOpen:", isMenuOpen);
  }, []);

  // Log whenever menu state changes
  useEffect(() => {
    console.log("MobileNavigation isMenuOpen changed:", isMenuOpen);
  }, [isMenuOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Don't render anything on the server
  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black z-[9999] transition-transform duration-300 ${
        isMenuOpen 
          ? 'translate-x-0' 
          : 'translate-x-full'
      }`}
      style={{
        willChange: 'transform',
        touchAction: 'pan-y',
      }}
    >
      <div className="flex flex-col h-full max-h-screen overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-neon-purple/30 sticky top-0 bg-black">
          <Button 
            onClick={onClose} 
            variant="ghost" 
            className="p-3 text-neon-purple hover:bg-transparent"
          >
            <X className="h-6 w-6" />
          </Button>
          <h2 className="text-xl text-neon-purple font-medium">Menu</h2>
          <div className="w-6"></div> {/* Empty div for flex balance */}
        </div>
        
        <div className="p-4 space-y-4 text-sm pb-40 flex-1 overflow-y-auto">
          <a 
            href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-amber-500 to-amber-700 text-amber-900 font-bold py-3 px-3 rounded-md shadow-lg flex items-center justify-center gap-2 w-full"
            onClick={onClose}
          >
            <Music4 className="h-5 w-5" />
            <span className="text-lg">Music Video Maker GPT</span>
          </a>

          {/* Animate Your Scenes */}
          <div className="pt-2">
            <p className="font-medium mb-3 text-neon-purple text-lg">Animate Your Scenes:</p>
            
            {/* Image to Video Generators */}
            <div className="mb-3">
              <button 
                onClick={() => toggleSection('video')}
                className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black rounded-md border border-neon-purple text-white"
              >
                <span>Image to Video Generators</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'video' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'video' && (
                <div className="py-1 space-y-1 animate-fade-in">
                  <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>Google VEO</a>
                  <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>SORA</a>
                  <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>KLING</a>
                  <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>HAILUO</a>
                  <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>HIGGSFIELD</a>
                  <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>RunwayML</a>
                  <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>PIKA LABS</a>
                </div>
              )}
            </div>
            
            {/* Music & FX Generation */}
            <div className="mb-3">
              <button
                onClick={() => toggleSection('music')}
                className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black rounded-md border border-neon-purple text-white"
              >
                <span>Music & FX Generation</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'music' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'music' && (
                <div className="py-1 space-y-1 animate-fade-in">
                  <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>SUNO Music Generator</a>
                  <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>UDIO Music Generator</a>
                  <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>Eleven Labs Voice</a>
                </div>
              )}
            </div>
            
            {/* Lipsync */}
            <div className="mb-3">
              <button
                onClick={() => toggleSection('lipsync')}
                className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black rounded-md border border-neon-purple text-white"
              >
                <span>Lipsync</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'lipsync' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'lipsync' && (
                <div className="py-1 space-y-1 animate-fade-in">
                  <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>HEDRA</a>
                </div>
              )}
            </div>
            
            {/* Editing Tools */}
            <div className="mb-3">
              <button
                onClick={() => toggleSection('editing')}
                className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black rounded-md border border-neon-purple text-white"
              >
                <span>Editing Tools</span>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'editing' ? 'rotate-180' : ''}`} />
              </button>
              {openSection === 'editing' && (
                <div className="py-1 space-y-1 animate-fade-in">
                  <a href="https://www.videoleapapp.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>VideoLeap</a>
                  <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>CapCut</a>
                  <a href="https://download.wondershare.com/filmora_full846.exe" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-neon-purple py-2 px-3 text-base" onClick={onClose}>Download Filmora</a>
                </div>
              )}
            </div>
          </div>

          {/* Other Creative Production AI Tools */}
          <div className="pt-2">
            <p className="font-medium mb-3 text-neon-purple text-lg">Other Creative Production AI Tools:</p>
            <div className="space-y-3">
              <a 
                href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white py-2 px-3 rounded-md text-center bg-black border border-neon-purple text-base"
                onClick={onClose}
              >
                AI Movie Production Studio
              </a>
              <a 
                href="https://stagemasterai.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-white py-2 px-3 rounded-md text-center bg-black border border-neon-purple text-base"
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
            className="block text-white bg-neon-purple py-3 text-center font-medium rounded-md text-base mt-4"
            onClick={onClose}
          >
            More AI Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
