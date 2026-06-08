import * as React from 'react'

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1024

export function useResponsive() {
  const [screenType, setScreenType] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  React.useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth
      if (width < MOBILE_BREAKPOINT) {
        setScreenType('mobile')
      } else if (width < TABLET_BREAKPOINT) {
        setScreenType('tablet')
      } else {
        setScreenType('desktop')
      }
    }

    updateScreenType()
    window.addEventListener('resize', updateScreenType)
    return () => window.removeEventListener('resize', updateScreenType)
  }, [])

  return {
    screenType,
    isMobile: screenType === 'mobile',
    isTablet: screenType === 'tablet',
    isDesktop: screenType === 'desktop',
    isMobileOrTablet: screenType === 'mobile' || screenType === 'tablet'
  }
}

// Keep existing hook for backward compatibility
export function useIsMobile() {
  const { isMobile } = useResponsive()
  return isMobile
}