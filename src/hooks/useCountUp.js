import { useState, useEffect, useRef } from 'react';

/**
 * Animates a number from 0 to `end` when the element enters the viewport.
 * @param {number} end  — target value (numeric part only, e.g. 50 for "50k+")
 * @param {number} duration — animation duration in ms (default 1600)
 * @returns {{ ref, count }} — ref to attach to the element, animated count value
 */
export function useCountUp(end, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { ref, count };
}
