
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <header className="fixed top-0 z-40 w-full bg-black/80">
      <div className="container mx-auto px-4 py-3">
        {isMobile ? (
          // Mobile Header Layout
          <div className="relative flex justify-center items-center">
            {/* Left: Menu button */}
            <div className="absolute left-0">
              <Button 
                onClick={toggleMenu} 
                variant="ghost" 
                className="border-neon-purple bg-transparent hover:bg-transparent p-2 rounded-md"
                aria-label="Toggle menu"
              >
                <Menu className="h-8 w-8 text-neon-purple" />
              </Button>
            </div>
            
            {/* Center: Logo */}
            <div>
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
      {isMobile && <MobileNavigation isMenuOpen={isMenuOpen} onClose={closeMenu} />}
    </header>
  );
};

export default Header;
