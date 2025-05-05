import { Button } from "@/components/ui/button";
import { AnimateScenesDropdown } from "./navigation/dropdowns/AnimateScenesDropdown";
import { Music4, Disc } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const isMobile = useIsMobile();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="mt-24 border-t border-neon-purple/30 bg-cyber-dark">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
            <p className="text-sm text-gray-300">
              Transform your music into captivating visuals with our AI-powered music video generation tool.
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
            <div className="pt-2">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-white transition-colors duration-300"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
          </div>

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

          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <div className="space-y-2">
              <a 
                href="https://openai.com/policies/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
              >
                Privacy Policy
              </a>
              <a 
                href="https://aiwebtools.ai/terms-of-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
              >
                Terms of Service
              </a>
            </div>
          </div>

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
                <Music4 className="h-4 w-4" />
                <span>Music Video Maker GPT</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neon-purple/20 flex flex-col md:flex-row items-center justify-between">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-transform hover:scale-110 duration-300"
              aria-label="AiWebTools.Ai"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
