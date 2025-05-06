
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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

  return (
    <header className={`fixed top-0 z-40 w-full glass border-b border-neon-purple/30 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-lg shadow-lg' : 'bg-black/40'}`}>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button - moved to left side */}
          <div className="md:hidden">
            <Button 
              onClick={toggleMenu} 
              variant="outline" 
              size="icon" 
              className="border-neon-purple bg-black/40 hover:bg-neon-purple/20 transition-all duration-300"
            >
              <Menu className="animate-fade-in" />
            </Button>
          </div>
          
          {/* Logo - centered on mobile */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Logo />
          </div>
          
          {/* Desktop Navigation - give more space for the logo */}
          <div className="hidden md:block">
            <DesktopNavigation />
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation isMenuOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
