
import { useState, useEffect } from "react";

// Use a conservative breakpoint to ensure proper mobile detection
const MOBILE_BREAKPOINT = 768; // Equivalent to md in Tailwind

export function useIsMobile() {
  // Default to true for mobile-first rendering
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to handle SSR/hydration
    setMounted(true);
    
    // Set actual value based on window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize events with debounce
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Add orientation change listener for mobile devices
    window.addEventListener('orientationchange', () => {
      // Short delay to allow orientation change to complete
      setTimeout(checkMobile, 200);
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', checkMobile);
      clearTimeout(resizeTimer);
    };
  }, []);

  // During SSR or before hydration, assume mobile first
  return mounted ? isMobile : true;
}
