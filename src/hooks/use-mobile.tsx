
import * as React from "react"

const MOBILE_BREAKPOINT = 768

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
    
    // Add event listener for resize events
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // During SSR, assume mobile first for consistent hydration
  return mounted ? isMobile : true
}
