"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  href: string;
  className?: string;
  /** Fraction of cursor offset the element travels; kept small so it reads as a nudge. */
  strength?: number;
};

/**
 * Wraps a link so it drifts toward the cursor on hover and springs back on
 * leave. No-ops under prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  href,
  className = "",
  strength = 0.3,
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (node) node.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`ease-out will-change-transform ${className}`}
    >
      {children}
    </a>
  );
}
