"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { MANIFESTO } from "@/lib/content";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.6"] });
  const words = MANIFESTO.split(" ");

  return (
    <section
      id="about"
      ref={ref}
      className="relative -mt-10 rounded-t-[2.5rem] bg-cream px-5 py-28 text-ink md:-mt-16 md:rounded-t-[4rem] md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
          (About)
        </p>
        <p className="font-display text-[clamp(2rem,5.4vw,5.5rem)] leading-[1.02] tracking-[-0.02em]">
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 3) / words.length)]}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
