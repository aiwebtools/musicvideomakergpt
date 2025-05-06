
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 z-40 w-full glass border-b border-neon-purple/30 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-lg shadow-lg' : 'bg-black/40'}`}>
      <div className="container mx-auto px-4 py-3">
        {isMobile ? (
          // Mobile Header Layout - Simple layout with menu on left, logo center
          <div className="flex items-center justify-between relative">
            {/* Left: Mobile menu button */}
            <Button 
              onClick={toggleMenu} 
              variant="outline" 
              size="icon" 
              className="absolute left-0 border-neon-purple bg-black/40 hover:bg-neon-purple/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-neon-purple" />
              ) : (
                <Menu className="h-5 w-5 text-neon-purple" />
              )}
            </Button>
            
            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
          </div>
        ) : (
          // Desktop Header Layout
          <div className="flex items-center justify-between">
            <div className="w-10">
              {/* Empty space for balance */}
            </div>
            
            {/* Center: Logo always centered */}
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
            
            {/* Right: Desktop Navigation */}
            <div className="w-10 flex justify-end">
              <DesktopNavigation />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
