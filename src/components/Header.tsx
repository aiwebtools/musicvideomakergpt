
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-neon-purple/30">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue animate-pulse-soft"></div>
              <div className="absolute inset-0 rounded-full border border-neon-purple animate-spin-slow opacity-70"></div>
            </div>
            <a href="#" className="text-2xl font-bold tracking-tight neon-text-purple">
              Music Video Maker GPT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a 
              href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whitespace-nowrap px-3 py-2 rounded-md hover:bg-neon-purple/20 transition-colors"
            >
              Music Video Maker GPT
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="whitespace-nowrap px-3 py-2">
                  Other Creative Production AI Tools
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-neon-purple w-56">
                <DropdownMenuItem className="hover:bg-neon-purple/20">
                  <a 
                    href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    AI Movie Production Studio
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-neon-purple/20">
                  <a 
                    href="https://stagemasterai.lovable.app/?via=aiwebtools" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    Stage Master AI Suite
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a 
              href="#faq" 
              className="px-3 py-2 rounded-md hover:bg-neon-purple/20 transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="px-3 py-2 rounded-md hover:bg-neon-purple/20 transition-colors"
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-md hover:bg-neon-purple/20 transition-colors"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
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
                href="#faq" 
                className="text-foreground hover:text-neon-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-foreground hover:text-neon-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Disclaimer
              </a>
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
        )}
      </div>
    </header>
  );
};

export default Header;
