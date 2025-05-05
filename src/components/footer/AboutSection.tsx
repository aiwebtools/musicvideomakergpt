
import { AnimateScenesDropdown } from "../navigation/dropdowns/AnimateScenesDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const AboutSection = () => {
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      <FooterLogo />
      <p className="text-sm text-gray-300">
        Transform your music into captivating visuals with our AI-powered music video generation suite.
      </p>
      <div className="pt-4">
        {!isMobile ? (
          <div className="flex space-x-3">
            <AnimateScenesDropdown variant="footer" />
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Animate Your Scenes:</h3>
            <div className="space-y-3">
              <Collapsible open={openSection === 'video'} onOpenChange={() => toggleSection('video')}>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300">
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
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible open={openSection === 'music'} onOpenChange={() => toggleSection('music')}>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300">
                  <span className="text-sm font-medium">Music & FX Generation</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'music' ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                  <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">SUNO Music Generator</a>
                  <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">UDIO Music Generator</a>
                  <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Eleven Labs Voice & Sound Effects</a>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible open={openSection === 'lipsync'} onOpenChange={() => toggleSection('lipsync')}>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300">
                  <span className="text-sm font-medium">Lipsync</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'lipsync' ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                  <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">HEDRA</a>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible open={openSection === 'editing'} onOpenChange={() => toggleSection('editing')}>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-2 text-sm font-medium bg-black/30 rounded-md border border-neon-purple/20 hover:bg-neon-purple/20 transition-all duration-300">
                  <span className="text-sm font-medium">Editing Tools</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === 'editing' ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-2 pt-2 animate-accordion-down">
                  <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">CapCut</a>
                  <a href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple py-1.5 transition-colors">Download Filmora</a>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import { FooterLogo } from './FooterLogo';
