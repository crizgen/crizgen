"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "motion/react";
import { TECH } from "@/lib/content";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // cursor-following ember glow
  const mx = useMotionValue(0.6);
  const my = useMotionValue(0.35);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const gx = useTransform(sx, (v) => `${v * 100}%`);
  const gy = useTransform(sy, (v) => `${v * 100}%`);

  // headline drifts + fades as you scroll away
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink px-5 pb-8 pt-28 md:px-10"
    >
      {/* glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute size-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[90px]"
        style={{
          left: gx,
          top: gy,
          background:
            "radial-gradient(circle, rgba(255,77,28,0.55) 0%, rgba(255,77,28,0.12) 45%, transparent 70%)",
        }}
      />
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(ellipse at 50% 40%, #000 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-cream/60"
        >
          Web &amp; app studio — Chennai, IN
        </motion.p>

        <motion.h1
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-[clamp(3.2rem,11.5vw,12rem)] font-medium leading-[0.88] tracking-[-0.04em]"
        >
          <span className="block">
            <SplitReveal text="We build" delay={0.1} />
          </span>
          <span className="block">
            <SplitReveal
              text="things people"
              delay={0.25}
              accent={[]}
            />
          </span>
          <span className="block font-display italic text-ember">
            <SplitReveal text="actually love." delay={0.4} />
          </span>
        </motion.h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-14 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-md text-lg leading-snug text-cream/70"
          >
            Websites, web apps and mobile apps for founders and businesses who want
            something that looks sharp, loads instantly and works every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex items-center gap-6"
          >
            <Magnetic>
              <a
                href="#contact"
                className="flex size-32 items-center justify-center rounded-full bg-ember text-center text-sm font-semibold leading-tight text-ink md:size-40 md:text-base"
              >
                Start a<br />project ↗
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="relative mt-14 border-y border-cream/10 py-4" aria-hidden>
        <div className="marquee-track font-display text-3xl italic text-cream/50 md:text-4xl">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {TECH.map((t) => (
                <span key={t + k} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <span className="text-ember">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
