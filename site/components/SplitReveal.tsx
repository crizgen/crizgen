"use client";

import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  /** words (by index) rendered with the given className, e.g. italic serif accent */
  accent?: number[];
  accentClassName?: string;
};

/** Words slide up from behind a mask, staggered. */
export default function SplitReveal({
  text,
  className = "",
  delay = 0,
  accent = [],
  accentClassName = "",
}: Props) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]" aria-hidden>
          <motion.span
            className={`inline-block ${accent.includes(i) ? accentClassName : ""}`}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
