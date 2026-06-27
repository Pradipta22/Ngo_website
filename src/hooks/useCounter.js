import { useEffect, useRef, useState } from 'react';

export default function useCounter(target, options = {}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = options.duration || 2000;
          const start = performance.now();
          const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(target * easeOutExpo(progress)));
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { ref, count };
}
