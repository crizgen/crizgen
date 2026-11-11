"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMedia } from "@/lib/useMedia";

type Mode = { kind: "idle" | "link" | "label"; label: string };

/** Follower ring + dot. Grows on links, shows a label on [data-cursor]. */
export default function Cursor() {
  const fine = useMedia("(pointer: fine)");
  const still = useMedia("(prefers-reduced-motion: reduce)");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });
  const [mode, setMode] = useState<Mode>({ kind: "idle", label: "" });

  useEffect(() => {
    if (!fine || still) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const labelled = t?.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        setMode({ kind: "label", label: labelled.dataset.cursor ?? "" });
      } else if (t?.closest("a,button,summary,select,input,textarea")) {
        setMode({ kind: "link", label: "" });
      } else {
        setMode({ kind: "idle", label: "" });
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [fine, still, x, y]);

  if (!fine || still) return null;

  const size = mode.kind === "label" ? 92 : mode.kind === "link" ? 56 : 34;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[150] grid place-items-center rounded-full border text-[13px] font-semibold"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: size,
          height: size,
          backgroundColor: mode.kind === "label" ? "#ff4d1c" : "rgba(255,255,255,0)",
          borderColor: mode.kind === "label" ? "#ff4d1c" : "rgba(255,255,255,0.85)",
          color: "#0b0b0c",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {mode.kind === "label" && mode.label}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[150] size-1.5 rounded-full bg-ember"
        style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: mode.kind === "label" ? 0 : 1 }}
      />
    </>
  );
}
