
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

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
          <nav className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-4 py-2 hover:bg-neon-purple/20">
                  Animate Your Scenes <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-neon-purple w-72 bg-black/90 backdrop-blur-md">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
                    <span>Image to Video Generators</span>
                    <ChevronDown className="h-5 w-5 ml-2 transition-transform rotate-[-90deg]" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="glass border-neon-purple bg-black/90 backdrop-blur-md min-w-[240px]">
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://veo.google" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Google Veo 2
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://sora.openai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        SORA
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.kling.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        KLING
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.hailuo.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        HAILUO
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.higgsfield.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        HIGGSFIELD
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://runwayml.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        RunwayML
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.pika.art" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        PIKA LABS
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://chatgpt.com/g/g-3y5VbXUyL-text-to-video-prompt-generator" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Text To Video Prompt Generator GPT
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
                    <span>Music & FX Generation</span>
                    <ChevronDown className="h-5 w-5 ml-2 transition-transform rotate-[-90deg]" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="glass border-neon-purple bg-black/90 backdrop-blur-md">
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://suno.com/invite/@aiwebtools" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        SUNO
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.udio.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        UDIO
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
                    <span>Lipsync</span>
                    <ChevronDown className="h-5 w-5 ml-2 transition-transform rotate-[-90deg]" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="glass border-neon-purple bg-black/90 backdrop-blur-md">
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.hedra.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Hedra
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="flex items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
                    <span>Editing Tools</span>
                    <ChevronDown className="h-5 w-5 ml-2 transition-transform rotate-[-90deg]" />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="glass border-neon-purple bg-black/90 backdrop-blur-md">
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.runway.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Runway
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.capcut.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        CapCut
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              <DropdownMenuContent className="glass border-neon-purple w-56 bg-black/90 backdrop-blur-md">
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

              {/* Mobile Animate Your Scenes */}
              <div className="py-2">
                <p className="font-medium mb-2">Animate Your Scenes:</p>
                <div className="space-y-2 pl-4">
                  <p className="text-sm font-medium mt-2 mb-1">Image to Video Generators:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://veo.google" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Google Veo 2</a>
                    <a href="https://sora.openai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SORA</a>
                    <a href="https://www.kling.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">KLING</a>
                    <a href="https://www.hailuo.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HAILUO</a>
                    <a href="https://www.higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HIGGSFIELD</a>
                    <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">RunwayML</a>
                    <a href="https://www.pika.art" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">PIKA LABS</a>
                    <a href="https://chatgpt.com/g/g-3y5VbXUyL-text-to-video-prompt-generator" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Text To Video Prompt Generator GPT</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Music & FX Generation:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SUNO</a>
                    <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">UDIO</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Lipsync:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://www.hedra.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Hedra</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Editing Tools:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://www.runway.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Runway</a>
                    <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">CapCut</a>
                  </div>
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
