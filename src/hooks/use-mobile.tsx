
import * as React from "react"

const MOBILE_BREAKPOINT = 768 // This is the standard md breakpoint in Tailwind

export function useIsMobile() {
  // Default to true for mobile-first rendering and to avoid layout shift on hydration
  const [isMobile, setIsMobile] = React.useState<boolean>(true)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Mark as mounted to handle SSR/hydration
    setMounted(true)

    // Set actual value based on window width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener for resize events with debounce
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkMobile, 100)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  // During SSR or before hydration, assume mobile first
  return mounted ? isMobile : true
}
