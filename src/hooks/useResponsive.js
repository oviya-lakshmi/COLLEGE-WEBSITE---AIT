import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    fontSize: '16px' // Default base size
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let fontSize = '16px';
      
      if (width < 480) { // Small mobile
        fontSize = '14px';
      } else if (width < 768) { // Larger mobile
        fontSize = '15px';
      } else if (width < 1024) { // Tablet
        fontSize = '16px';
      } else { // Desktop
        fontSize = '18px';
      }

      setWindowSize({
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        fontSize
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useResponsive;