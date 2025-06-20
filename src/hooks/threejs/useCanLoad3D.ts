import { RefObject, useEffect, useState } from 'react';

export function useCanLoad3D(
  ref: RefObject<HTMLDivElement | null>,
  options: IntersectionObserverInit = { threshold: 0.1 },
) {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let hasLoaded = false;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasLoaded) {
        setCanLoad(true);
        hasLoaded = true;
        observer.disconnect();
      }
    }, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options]);

  return canLoad;
}
