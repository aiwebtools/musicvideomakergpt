
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
          {/* Left side: Mobile menu button or empty space */}
          <div className="w-10">
            {isMobile && (
              <Button 
                onClick={toggleMenu} 
                variant="outline" 
                size="icon" 
                className="border-neon-purple bg-black/40 hover:bg-neon-purple/20 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5 text-neon-purple" />
              </Button>
            )}
          </div>
          
          {/* Center: Logo always centered */}
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          
          {/* Right side: Desktop Navigation or empty space */}
          <div className="w-10 flex justify-end">
            {!isMobile && <DesktopNavigation />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;
