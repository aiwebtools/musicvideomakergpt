
import React, { useState, useEffect } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, X, Music4 } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
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

  return (
    <Drawer open={isMenuOpen} onOpenChange={onClose}>
      <DrawerContent className="bg-cyber-darker border-t border-neon-purple/30 max-h-[90vh] px-4 rounded-t-xl">
        <div className="w-full flex justify-center">
          <div className="w-12 h-1.5 bg-gray-600/50 rounded-full mt-2"></div>
        </div>
        <DrawerHeader className="px-0 relative">
          <DrawerTitle className="text-center text-neon-purple text-xl">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute right-0 top-0 text-neon-purple hover:bg-neon-purple/20 transition-all"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DrawerClose>
        </DrawerHeader>
        
        <div className="overflow-y-auto pb-10 px-2">
          <div className="flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-amber-500 to-amber-700 text-amber-900 font-bold py-4 px-4 rounded-md shadow-lg flex items-center justify-center gap-2"
              onClick={onClose}
            >
              <Music4 className="h-5 w-5" />
              <span>Music Video Maker GPT</span>
            </a>

            {/* Mobile Animate Your Scenes */}
            <div className="pt-2">
              <p className="font-medium mb-3 pl-2 text-neon-purple text-xl text-center">Animate Your Scenes:</p>
              <div className="space-y-3">
                <Collapsible open={openSection === 'video'} className="mb-3">
                  <CollapsibleTrigger 
                    className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black/50 rounded-md border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300"
                    onClick={() => toggleSection('video')}
                  >
                    <span>Image to Video Generators</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'video' ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-2 animate-accordion-down">
                    <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>Google VEO</a>
                    <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>SORA</a>
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>KLING</a>
                    <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>HAILUO</a>
                    <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>HIGGSFIELD</a>
                    <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>RunwayML</a>
                    <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>PIKA LABS</a>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible open={openSection === 'music'} className="mb-3">
                  <CollapsibleTrigger 
                    className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black/50 rounded-md border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300"
                    onClick={() => toggleSection('music')}
                  >
                    <span>Music & FX Generation</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'music' ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-2 animate-accordion-down">
                    <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>SUNO Music Generator</a>
                    <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>UDIO Music Generator</a>
                    <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>Eleven Labs Voice & Sound Effect Generator</a>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible open={openSection === 'lipsync'} className="mb-3">
                  <CollapsibleTrigger 
                    className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black/50 rounded-md border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300"
                    onClick={() => toggleSection('lipsync')}
                  >
                    <span>Lipsync</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'lipsync' ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-2 animate-accordion-down">
                    <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>HEDRA</a>
                  </CollapsibleContent>
                </Collapsible>
                
                <Collapsible open={openSection === 'editing'} className="mb-3">
                  <CollapsibleTrigger 
                    className="flex w-full items-center justify-between py-3 px-4 text-base font-medium bg-black/50 rounded-md border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300"
                    onClick={() => toggleSection('editing')}
                  >
                    <span>Editing Tools</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openSection === 'editing' ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-2 animate-accordion-down">
                    <a href="https://www.videoleapapp.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>VideoLeap</a>
                    <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>CapCut</a>
                    <a href="https://download.wondershare.com/filmora_full846.exe" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-neon-purple py-3 px-4 rounded-md hover:bg-neon-purple/10 transition-colors" onClick={onClose}>Download Filmora</a>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className="py-2">
              <p className="font-medium mb-3 text-neon-purple text-xl text-center">Other Creative Production AI Tools:</p>
              <div className="space-y-3">
                <a 
                  href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white hover:text-neon-purple transition-colors py-3 px-4 rounded-md text-center bg-black/50 border border-neon-purple/30 hover:bg-neon-purple/10"
                  onClick={onClose}
                >
                  AI Movie Production Studio
                </a>
                <a 
                  href="https://stagemasterai.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white hover:text-neon-purple transition-colors py-3 px-4 rounded-md text-center bg-black/50 border border-neon-purple/30 hover:bg-neon-purple/10"
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
              className="text-white bg-neon-purple/20 hover:bg-neon-purple/30 transition-colors py-4 text-center font-medium rounded-md border border-neon-purple/50 mt-4"
              onClick={onClose}
            >
              More AI Tools
            </a>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigation;
