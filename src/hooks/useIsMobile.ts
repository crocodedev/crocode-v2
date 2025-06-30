import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [state, setState] = useState<{ isMobile: boolean; isReady: boolean }>({
    isMobile: false,
    isReady: false,
  });

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice =
        typeof window !== 'undefined' &&
        (window.innerWidth <= 768 ||
          'ontouchstart' in window ||
          mobileRegex.test(navigator.userAgent));
      setState({ isMobile: isMobileDevice, isReady: true });
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return state;
}
