import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: options.threshold || 0.05, // Trigger earlier (5% visibility instead of 15%)
        rootMargin: options.rootMargin || '0px 0px -20px 0px' // Reduce boundary margin for mobile compatibility
      }
    );

    observer.observe(el);

    // Failsafe backup: Force reveal after 1.2 seconds to guarantee visibility under all conditions
    const failsafeTimer = setTimeout(() => {
      if (el && !el.classList.contains('revealed')) {
        el.classList.add('revealed');
      }
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(failsafeTimer);
    };
  }, []);

  return ref;
}
