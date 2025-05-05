
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
                <Button variant="outline" className="font-medium border-neon-purple/70 bg-black/40 hover:bg-neon-purple/30 hover:border-neon-purple text-white rounded-md px-4 py-2 flex items-center gap-1">
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
                        href="https://aistudio.google.com/generate-video" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Google VEO
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.sora.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        SORA
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://klingai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        KLING
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://hailuoai.video" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        HAILUO
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://higgsfield.ai" 
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
                        href="https://pika.art" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        PIKA LABS
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://texttovideoprompter.lovable.app/?via=aiwebtools" 
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
                        SUNO Music Generator
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://www.udio.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        UDIO Music Generator
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://elevenlabs.io/?from=kennybastian5304" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Eleven Labs Voice & Sound Effect Generator
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
                        href="https://www.hedra.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        HEDRA
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
                    <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
                      <a 
                        href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Download Filmora Editing Software
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
              className="font-medium bg-black/40 border border-neon-blue/70 text-white hover:bg-neon-blue/30 hover:border-neon-blue rounded-md px-4 py-2 transition-all duration-200"
            >
              Music Video Maker GPT
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="font-medium border-neon-pink/70 bg-black/40 hover:bg-neon-pink/30 hover:border-neon-pink text-white rounded-md px-4 py-2">
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
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium bg-black/40 border border-neon-yellow/70 text-white hover:bg-neon-yellow/30 hover:border-neon-yellow rounded-md px-4 py-2 transition-all duration-200"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button onClick={toggleMenu} variant="outline" size="icon" className="md:hidden border-neon-purple bg-black/40 hover:bg-neon-purple/20">
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
                    <a href="https://aistudio.google.com/generate-video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Google VEO</a>
                    <a href="https://www.sora.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SORA</a>
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">KLING</a>
                    <a href="https://hailuoai.video" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HAILUO</a>
                    <a href="https://higgsfield.ai" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HIGGSFIELD</a>
                    <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">RunwayML</a>
                    <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">PIKA LABS</a>
                    <a href="https://texttovideoprompter.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Text To Video Prompt Generator GPT</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Music & FX Generation:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://suno.com/invite/@aiwebtools" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">SUNO Music Generator</a>
                    <a href="https://www.udio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">UDIO Music Generator</a>
                    <a href="https://elevenlabs.io/?from=kennybastian5304" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Eleven Labs Voice & Sound Effect Generator</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Lipsync:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://www.hedra.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">HEDRA</a>
                  </div>
                  
                  <p className="text-sm font-medium mt-2 mb-1">Editing Tools:</p>
                  <div className="space-y-1 pl-2">
                    <a href="https://www.runway.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Runway</a>
                    <a href="https://www.capcut.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">CapCut</a>
                    <a href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-neon-purple">Download Filmora Editing Software</a>
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
