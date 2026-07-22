"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type ParallaxFrameProps = {
  src: string;
  alt: string;
  /** Travel in px across a full viewport of scrolling. */
  strength?: number;
  priority?: boolean;
  sizes: string;
  /** Classes for the clipping frame (aspect ratio, radius, etc.). */
  className?: string;
  /** Extra classes on the frame's inner wrapper, e.g. the hero sweep. */
  overlayClassName?: string;
};

/**
 * A clipping frame whose image drifts against the scroll direction.
 * The image is oversized by `strength` on both ends so the drift never
 * exposes an edge. No-ops entirely under prefers-reduced-motion.
 */
export default function ParallaxFrame({
  src,
  alt,
  strength = 40,
  priority = false,
  sizes,
  className = "",
  overlayClassName = "",
}: ParallaxFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;

    const update = () => {
      frameId = 0;
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewport) return;

      // -1 when the frame sits below the fold, 1 when it has scrolled past.
      const progress =
        (viewport / 2 - (rect.top + rect.height / 2)) /
        ((viewport + rect.height) / 2);
      image.style.transform = `translate3d(0, ${(progress * strength).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden bg-sand ${overlayClassName} ${className}`}
    >
      <div
        ref={imageRef}
        className="absolute will-change-transform"
        style={{ inset: `-${strength}px 0` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
