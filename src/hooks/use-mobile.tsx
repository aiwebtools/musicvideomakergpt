
import { useState, useEffect } from "react";

// Use standard Tailwind breakpoint for mobile
const MOBILE_BREAKPOINT = 768; // md in Tailwind

export function useIsMobile() {
  // Default to mobile for SSR
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Function to check viewport width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Run initial check
    checkMobile();
    
    // Add resize listener with basic debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle orientation changes on mobile
    window.addEventListener('orientationchange', () => {
      setTimeout(checkMobile, 200);
    });
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', checkMobile);
      clearTimeout(resizeTimer);
    };
  }, []);

  // During SSR/before mount, use mobile-first approach
  return mounted ? isMobile : true;
}
