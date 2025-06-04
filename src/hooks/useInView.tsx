import { useState, useEffect, useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseInViewReturn {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export const useInView = (options: UseInViewOptions = {}): UseInViewReturn => {
  const {
    threshold = 0.1,
    triggerOnce = false,
    rootMargin = '0px',
  } = options;
  
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const wasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && wasTriggered.current) return;
        
        const isInView = entry.isIntersecting;
        setInView(isInView);
        
        if (isInView && triggerOnce) {
          wasTriggered.current = true;
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, inView };
};