"use client";

import { motion, MotionConfig } from "motion/react";
import { WORK } from "@/lib/content";
import SplitReveal from "./SplitReveal";
import { CrmVisual, AiChatVisual, DeliveryVisual, DocVisual } from "./WorkVisuals";

const VISUALS = {
  crm: CrmVisual,
  chat: AiChatVisual,
  delivery: DeliveryVisual,
  doc: DocVisual,
} as const;

const BG = [
  "bg-gradient-to-br from-[#16161a] via-[#1d1410] to-ink-2",
  "bg-gradient-to-br from-[#e9e0cf] to-sand",
  "bg-gradient-to-br from-[#2a1a14] via-[#1a1210] to-ink-2",
  "bg-gradient-to-br from-ember/90 to-[#c93a12]",
];

export default function Work() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="work"
        className="relative -mt-10 rounded-t-[2.5rem] bg-ink px-5 pb-24 pt-24 text-cream md:-mt-16 md:rounded-t-[4rem] md:px-10 md:pb-32 md:pt-36"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[clamp(2.6rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
              <SplitReveal text="Selected" />
              <br />
              <SplitReveal
                text="work."
                delay={0.15}
                accent={[0]}
                accentClassName="font-display italic text-ember"
              />
            </h2>
            <p className="max-w-sm text-cream/65">
              Concept projects showing how we approach real problems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {WORK.map((p, i) => {
              const Visual = VISUALS[p.visual];
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col overflow-hidden rounded-[2rem] border border-cream/10 bg-ink-2"
                >
                  <div className={`relative aspect-[16/11] p-5 md:p-7 ${BG[i]}`}>
                    <Visual />
                    <span className="absolute right-4 top-4 z-10 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream backdrop-blur">
                      Concept
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{p.kind}</p>
                    <h3 className="mt-3 font-display text-4xl italic leading-none md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-md text-cream/65">{p.desc}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-14 text-xl">
            Want something like one of these?{" "}
            <a
              href="#contact"
              className="font-display text-3xl italic underline decoration-ember decoration-2 underline-offset-8"
            >
              Let&rsquo;s talk ↗
            </a>
          </p>
        </div>
      </section>
    </MotionConfig>
  );
}
