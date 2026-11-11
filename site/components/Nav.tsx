"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { NAV } from "@/lib/content";
import Magnetic from "./Magnetic";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !open);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-120%" : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white"
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="font-display text-3xl leading-none tracking-tight">
          Crizgen<span className="text-ember">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm md:flex" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="group relative">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Magnetic strength={0.25}>
              <a href="#contact" className="rounded-full border border-white/70 px-5 py-2 text-sm">
                Start a project
              </a>
            </Magnetic>
          </div>
          <button
            className="md:hidden text-sm uppercase tracking-widest"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 -z-10 flex flex-col justify-center gap-4 bg-ink px-6 text-cream md:hidden"
            style={{ mixBlendMode: "normal" }}
          >
            {NAV.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="font-display text-6xl"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
