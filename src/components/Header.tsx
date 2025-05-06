
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
        <div className="flex items-center justify-between">
          {/* Mobile menu button - always on the left */}
          {isMobile && (
            <Button 
              onClick={toggleMenu} 
              variant="outline" 
              size="icon" 
              className="border-neon-purple bg-black/40 hover:bg-neon-purple/20 transition-all duration-300 z-20"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 text-neon-purple" />
            </Button>
          )}
          
          {/* Logo - absolutely centered on mobile */}
          <div className={`${isMobile ? 'absolute left-1/2 -translate-x-1/2 w-full flex justify-center' : ''}`}>
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex-1 flex justify-end">
              <DesktopNavigation />
            </div>
          )}
          
          {/* Empty div to balance the flex layout on mobile */}
          {isMobile && <div className="w-10 h-10"></div>}
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
