"use client";

import { useEffect, useRef } from "react";
import { useMedia } from "@/lib/useMedia";

/** Silent looping demo clip. Plays only while on screen; a still for reduced motion. */
export default function LoopVideo({ name, label }: { name: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const still = useMedia("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const v = ref.current;
    if (!v || still) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [still]);

  if (still) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`/work/${name}.jpg`} alt={label} className="absolute inset-0 size-full object-cover" />;
  }

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full object-cover"
      src={`/work/${name}.mp4`}
      poster={`/work/${name}.jpg`}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
