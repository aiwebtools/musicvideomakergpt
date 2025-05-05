
import { Button } from "@/components/ui/button";
import { AnimateScenesDropdown } from "./navigation/dropdowns/AnimateScenesDropdown";
import { Music4, Disc } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-neon-purple/30 bg-cyber-dark">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue flex items-center justify-center">
                  <Music4 className="h-5 w-5 text-white animate-pulse-soft" />
                  <div className="absolute inset-0 rounded-full flex items-center justify-center">
                    <Disc className="h-8 w-8 text-neon-blue opacity-30 animate-spin-slow" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold font-audiowide gradient-text">Music Video Maker Studio</h3>
            </div>
            <p className="text-sm text-gray-300">
              Transform your music into captivating visuals with our AI-powered music video generation tool.
            </p>
            <div className="pt-4 flex space-x-3">
              <AnimateScenesDropdown variant="footer" />
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
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
              >
                Music Video Maker Studio
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
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-gradient-to-r from-cyber-accent to-cyber-tertiary hover:opacity-90 hover:scale-105 text-white transition-all duration-300">
                  More AI Tools
                </Button>
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
