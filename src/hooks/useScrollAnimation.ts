import {useEffect, useRef, useState} from 'react';

// Global map to track which elements have already animated (persists across remounts)
const animatedElements = new Set<string>();

/**
 * Custom hook for scroll-triggered animations that only fire once,
 * even across React Strict Mode remounts.
 */
export const useScrollAnimation = (elementId: string, threshold: number = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => animatedElements.has(elementId));

  useEffect(() => {
    // If already animated, don't set up observer
    if (animatedElements.has(elementId)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedElements.has(elementId)) {
          animatedElements.add(elementId);
          setIsVisible(true);
        }
      },
      {threshold}
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementId, threshold]);

  return {ref, isVisible};
};

/**
 * Reset all animation states (useful for testing or page transitions)
 */
export const resetAnimations = () => {
  animatedElements.clear();
};
