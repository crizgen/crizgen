"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { NAV } from "@/lib/content";
import { useMedia } from "@/lib/useMedia";
import Magnetic from "./Magnetic";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const wide = useMedia("(min-width: 1024px)");
  const menuOpen = open && !wide;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 200 && !menuOpen);
  });

  // lock page scroll behind the open menu; Escape closes it
  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference"
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 md:px-10">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-display text-3xl leading-none tracking-tight"
          >
            Crizgen<span className="text-ember">.</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm lg:flex xl:gap-9" aria-label="Primary">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="group relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden xl:block">
              <Magnetic strength={0.25}>
                <a href="#contact" className="rounded-full border border-white/70 px-5 py-2 text-sm">
                  Start a project
                </a>
              </Magnetic>
            </div>
            <button
              className="py-2 text-sm uppercase tracking-widest lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Sits outside the header: a transformed, blended parent would turn
          "fixed" into "relative to the header" and tint the links. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[45] flex flex-col justify-center gap-1 bg-ink px-6 pt-20 text-cream"
          >
            {NAV.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="border-b border-cream/10 py-3 font-display text-5xl leading-none"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              data-cursor="Go"
              onClick={() => setOpen(false)}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + NAV.length * 0.07 }}
              className="mt-8 self-start rounded-full bg-ember px-7 py-4 text-lg font-semibold text-ink"
            >
              Start a project ↗
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
