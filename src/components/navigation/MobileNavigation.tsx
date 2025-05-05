
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
          className="text-foreground hover:text-neon-purple transition-colors py-2"
        >
          Music Video Maker GPT
        </a>

        {/* Mobile Animate Your Scenes */}
        <div className="py-2">
          <p className="font-medium mb-2">Animate Your Scenes:</p>
          <div className="space-y-2 pl-4">
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-sm font-medium">
                <span className="text-sm font-medium">Image to Video Generators</span>
                <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-2 space-y-1 pt-1">
                <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Google VEO</a>
                <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SORA</a>
                <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">KLING</a>
                <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HAILUO</a>
                <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HIGGSFIELD</a>
                <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">RunwayML</a>
                <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">PIKA LABS</a>
                <a href="https://texttovideoprompter.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Text To Video Prompt Generator GPT</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-sm font-medium">
                <span className="text-sm font-medium">Music & FX Generation</span>
                <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-2 space-y-1 pt-1">
                <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SUNO Music Generator</a>
                <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">UDIO Music Generator</a>
                <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Eleven Labs Voice & Sound Effect Generator</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-sm font-medium">
                <span className="text-sm font-medium">Lipsync</span>
                <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-2 space-y-1 pt-1">
                <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HEDRA</a>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-1 text-sm font-medium">
                <span className="text-sm font-medium">Editing Tools</span>
                <ChevronDown className="h-4 w-4 transition-transform ui-open:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-2 space-y-1 pt-1">
                <a href="https://www.runway.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Runway</a>
                <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">CapCut</a>
                <a href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Download Filmora Editing Software</a>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="py-2">
          <p className="font-medium mb-2">Other Creative Production AI Tools:</p>
          <div className="space-y-2 pl-4">
            <a 
              href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-foreground hover:text-neon-purple transition-colors"
            >
              AI Movie Production Studio
            </a>
            <a 
              href="https://stagemasterai.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-foreground hover:text-neon-purple transition-colors"
            >
              Stage Master AI Suite
            </a>
          </div>
        </div>

        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-foreground hover:text-neon-purple transition-colors py-2"
        >
          More AI Tools
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
