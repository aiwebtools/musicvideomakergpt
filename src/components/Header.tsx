
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    console.log("Mobile menu toggle clicked, current state:", mobileMenuOpen);
    setMobileMenuOpen(prev => !prev);
  };
  
  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black/80 shadow-md backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          {isMobile ? (
            // Mobile Header Layout
            <div className="flex flex-col space-y-2">
              <Logo />
              
              <button 
                onClick={toggleMobileMenu} 
                className="w-full py-2 px-4 rounded-md text-amber-900 font-bold animate-gold-pulse"
                style={{
                  background: "linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)",
                  boxShadow: "0 0 15px 5px rgba(255, 215, 0, 0.6), 0 0 30px 5px rgba(255, 215, 0, 0.4)",
                  textShadow: "0 1px 3px rgba(255, 255, 255, 0.3)",
                  border: "2px solid #ffd700"
                }}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? "Close Menu" : "Menu"}
              </button>
            </div>
          ) : (
            // Desktop Header Layout
            <div className="flex items-center justify-between">
              <Logo />
              <DesktopNavigation />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-20 overflow-y-auto">
          <div className="flex items-center justify-center pb-2 border-b border-neon-purple/30">
            <h2 className="text-xl text-neon-purple font-medium">Menu</h2>
            <Button 
              onClick={toggleMobileMenu} 
              variant="ghost" 
              className="absolute right-4 p-3 text-neon-purple hover:bg-transparent"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

// Simple Mobile Menu component
const MobileMenu = ({ onClose }) => {
  return (
    <nav className="px-4 py-6">
      <div className="space-y-6">
        {/* Main Navigation Links */}
        <div className="space-y-3">
          <a href="/" className="block py-2 px-4 text-lg text-white border border-neon-purple/50 rounded-md">
            Home
          </a>
          <a 
            href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block py-2 px-4 text-lg text-white border border-neon-purple/50 rounded-md"
          >
            Music Video Maker GPT
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block py-2 px-4 text-lg text-white border border-neon-purple/50 rounded-md"
          >
            More AI Tools
          </a>
        </div>

        {/* Tool Categories */}
        <div className="pt-4 border-t border-neon-purple/30">
          <h3 className="text-neon-purple text-lg mb-3">Image to Video Tools</h3>
          <div className="grid gap-2">
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Runway Gen-2</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Pika Labs</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Stable Video Diffusion</a>
          </div>
        </div>

        <div className="pt-4 border-t border-neon-purple/30">
          <h3 className="text-neon-purple text-lg mb-3">Music & FX Tools</h3>
          <div className="grid gap-2">
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Suno</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Soundraw</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">AudioCraft</a>
          </div>
        </div>

        <div className="pt-4 border-t border-neon-purple/30">
          <h3 className="text-neon-purple text-lg mb-3">Lipsync Tools</h3>
          <div className="grid gap-2">
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Wav2Lip</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Synthesia</a>
          </div>
        </div>

        <div className="pt-4 border-t border-neon-purple/30">
          <h3 className="text-neon-purple text-lg mb-3">Editing Tools</h3>
          <div className="grid gap-2">
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Runway</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">Capcut</a>
            <a href="#" className="block py-2 px-4 bg-black/30 text-white rounded">DaVinci Resolve</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
