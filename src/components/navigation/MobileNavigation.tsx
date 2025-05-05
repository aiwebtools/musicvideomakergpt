
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface MobileNavigationProps {
  isMenuOpen: boolean;
}

const MobileNavigation = ({ isMenuOpen }: MobileNavigationProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden py-4 space-y-4 animate-fade-in">
      <div className="flex flex-col space-y-3">
        <a 
          href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground hover:text-neon-purple transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-neon-purple"
        >
          Music Video Maker GPT
        </a>

        {/* Mobile Animate Your Scenes */}
        <div className="py-2">
          <p className="font-medium mb-2 pl-2 text-neon-purple">Animate Your Scenes:</p>
          <div className="space-y-2 pl-2">
            <Collapsible open={openSection === 'video'}>
              <CollapsibleTrigger 
                className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300"
                onClick={() => toggleSection('video')}
              >
                <span className="text-sm font-medium">Image to Video Generators</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'video' ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Google VEO</a>
                <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">SORA</a>
                <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">KLING</a>
                <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">HAILUO</a>
                <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">HIGGSFIELD</a>
                <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">RunwayML</a>
                <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">PIKA LABS</a>
                <a href="https://texttovideoprompter.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Text To Video Prompt Generator GPT</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible open={openSection === 'music'}>
              <CollapsibleTrigger 
                className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300"
                onClick={() => toggleSection('music')}
              >
                <span className="text-sm font-medium">Music & FX Generation</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'music' ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">SUNO Music Generator</a>
                <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">UDIO Music Generator</a>
                <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Eleven Labs Voice & Sound Effect Generator</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible open={openSection === 'lipsync'}>
              <CollapsibleTrigger 
                className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300"
                onClick={() => toggleSection('lipsync')}
              >
                <span className="text-sm font-medium">Lipsync</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'lipsync' ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">HEDRA</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible open={openSection === 'editing'}>
              <CollapsibleTrigger 
                className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300"
                onClick={() => toggleSection('editing')}
              >
                <span className="text-sm font-medium">Editing Tools</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'editing' ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                <a href="https://www.videoleapapp.com/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">VideoLeap</a>
                <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">CapCut</a>
                <a href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Download Filmora Editing Software</a>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="py-2">
          <p className="font-medium mb-2 pl-2 text-neon-purple">Other Creative Production AI Tools:</p>
          <div className="space-y-2 pl-2">
            <a 
              href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-foreground hover:text-neon-purple transition-colors py-1.5 pl-2 border-l-2 border-transparent hover:border-neon-purple"
            >
              AI Movie Production Studio
            </a>
            <a 
              href="https://stagemasterai.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-foreground hover:text-neon-purple transition-colors py-1.5 pl-2 border-l-2 border-transparent hover:border-neon-purple"
            >
              Stage Master AI Suite
            </a>
          </div>
        </div>

        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground hover:text-neon-purple transition-colors py-2 pl-2 border-l-2 border-transparent hover:border-neon-purple mt-2"
        >
          More AI Tools
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
