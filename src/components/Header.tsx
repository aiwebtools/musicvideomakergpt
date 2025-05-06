
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
      // Prevent pinch-zoom when menu is open
      document.documentElement.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.touchAction = '';
    };
  }, [isMenuOpen]);
  
  // Add meta viewport tag to ensure proper scaling
  useEffect(() => {
    // Check if the meta viewport tag exists
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    
    // If it doesn't exist, create it
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    
    // Set the content with user-scalable=no to prevent zooming
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    
    // Cleanup function to restore default viewport settings
    return () => {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    };
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full bg-black/80">
      <div className="container mx-auto px-4 py-3">
        {isMobile ? (
          // Mobile Header Layout
          <div className="relative flex justify-between items-center">
            {/* Left: Menu button */}
            <div>
              <Button 
                onClick={toggleMenu} 
                variant="ghost" 
                className="border-neon-purple bg-transparent hover:bg-transparent p-2 rounded-md"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-neon-purple" />
              </Button>
            </div>
            
            {/* Center: Logo with more space */}
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
            
            {/* Matching empty space on right for balance */}
            <div className="w-10"></div>
          </div>
        ) : (
          // Desktop Header Layout
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Right: Desktop Navigation */}
            <div className="flex justify-end">
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
