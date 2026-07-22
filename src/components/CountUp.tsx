"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Final value, rendered zero-padded to two digits. */
  to: number;
  className?: string;
  duration?: number;
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Counts 01 -> `to` the first time it scrolls into view.
 * Renders the final value immediately under reduced motion, so the numeral
 * is never missing or mid-count.
 */
export default function CountUp({
  to,
  className = "",
  duration = 700,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setValue(1);
    let frameId = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const step = (now: number) => {
          if (!start) start = now;
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.max(1, Math.round(progress * to)));
          if (progress < 1) frameId = requestAnimationFrame(step);
        };
        frameId = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className} aria-hidden="true">
      {pad(value)}
    </span>
  );
}
