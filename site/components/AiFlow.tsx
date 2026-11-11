"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { AI_FLOW } from "@/lib/ai";

const ICONS = [
  // email
  <path key="e" d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  // AI sparkle
  <path key="a" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z" />,
  // automation arrows
  <path key="m" d="M4 8h13M13 4l4 4-4 4M20 16H7M11 12l-4 4 4 4" />,
  // tools table
  <path key="t" d="M4 5h16v14H4zM4 10h16M10 10v9" />,
  // chat
  <path key="w" d="M5 5h14v10H10l-5 4z" />,
];

export default function AiFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) =>
    setActive(Math.max(0, Math.min(AI_FLOW.length - 1, Math.floor(p * AI_FLOW.length)))),
  );
  const left = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14 md:mt-20">
      {/* track (desktop) */}
      <div aria-hidden className="absolute inset-x-[10%] top-7 hidden h-px bg-cream/15 md:block">
        <motion.div className="h-px origin-left bg-ember" style={{ scaleX: fill }} />
      </div>
      <motion.span
        aria-hidden
        className="absolute top-[26px] z-20 hidden size-[9px] -translate-x-1/2 rounded-full bg-ember shadow-[0_0_16px_5px_rgba(255,77,28,0.75)] md:block"
        style={{ left }}
      />

      <ol className="grid gap-3 md:grid-cols-5 md:gap-4">
        {AI_FLOW.map((n, i) => {
          const done = i < active;
          const on = i === active;
          return (
            <li key={n.label} className="relative flex gap-4 md:flex-col md:items-center md:gap-5 md:text-center">
              <motion.span
                animate={{ scale: on ? 1.12 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                  on
                    ? "border-ember bg-ember text-ink"
                    : done
                      ? "border-ember bg-ink text-ember"
                      : "border-cream/20 bg-ink-2 text-cream/60"
                }`}
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {ICONS[i]}
                </svg>
                {on && (
                  <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-ember/40" />
                )}
              </motion.span>
              <div>
                <p className={`text-xl font-semibold transition-colors duration-300 ${on || done ? "text-cream" : "text-cream/60"}`}>
                  {n.label}
                </p>
                <p className="mt-1 max-w-[16rem] text-sm text-cream/60 md:mx-auto">{n.sub}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
