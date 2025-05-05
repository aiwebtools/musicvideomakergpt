
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-neon-purple/30">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Mobile menu button */}
          <Button onClick={toggleMenu} variant="outline" size="icon" className="md:hidden border-neon-purple bg-black/40 hover:bg-neon-purple/20">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
