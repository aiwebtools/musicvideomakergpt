
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className={`sticky top-0 z-50 w-full glass border-b border-neon-purple/30 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-lg shadow-lg' : 'bg-black/40'}`}>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile menu button */}
          <Button 
            onClick={toggleMenu} 
            variant="outline" 
            size="icon" 
            className="md:hidden border-neon-purple bg-black/40 hover:bg-neon-purple/20 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="animate-fade-in" />
            ) : (
              <Menu className="animate-fade-in" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
