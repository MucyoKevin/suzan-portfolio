"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";

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
  /** Adds a subtle mouse-driven 3D tilt on top of the scroll parallax. */
  tilt?: boolean;
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
  tilt = false,
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

  const handleTiltMove = (event: MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!tilt || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = frame.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
  };

  const handleTiltLeave = () => {
    const frame = frameRef.current;
    if (tilt && frame) frame.style.transform = "";
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={tilt ? handleTiltMove : undefined}
      onMouseLeave={tilt ? handleTiltLeave : undefined}
      className={`relative overflow-hidden bg-sand transition-transform duration-300 ease-out will-change-transform ${overlayClassName} ${className}`}
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
