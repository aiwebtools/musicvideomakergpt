
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
            <div className="flex justify-between items-center">
              <Logo />
              
              <Button 
                onClick={toggleMobileMenu} 
                variant="ghost" 
                className="p-2 text-neon-purple hover:bg-transparent"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
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

      {/* Simple Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16 overflow-y-auto">
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
