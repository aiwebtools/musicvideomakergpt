import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNavigation from './navigation/MobileNavigation';

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

      {/* Mobile Menu */}
      {isMobile && <MobileNavigation isMenuOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />}
    </>
  );
};

export default Header;
