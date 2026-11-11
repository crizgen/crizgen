"use client";

import { motion } from "motion/react";
import { BUILDS } from "@/lib/content";
import SplitReveal from "./SplitReveal";

export default function Builds() {
  return (
    <section id="builds" className="bg-cream px-5 pb-28 text-ink md:px-10 md:pb-44">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="mb-14 text-[clamp(2.6rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          <SplitReveal text="Things we" />
          <br />
          <SplitReveal
            text="build."
            delay={0.15}
            accent={[0]}
            accentClassName="font-display italic text-ember"
          />
        </h2>

        <div className="space-y-16">
          {BUILDS.map((g) => (
            <div key={g.group} className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
                ({g.group})
              </p>
              <ul className="border-t border-ink/15">
                {g.items.map((it, i) => (
                  <motion.li
                    key={it.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group border-b border-ink/15"
                  >
                    <div className="flex flex-col gap-2 py-6 transition-transform duration-500 ease-out group-hover:translate-x-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                      <h3 className="font-display text-3xl italic leading-tight transition-colors group-hover:text-ember md:text-5xl">
                        {it.name}
                      </h3>
                      <p className="max-w-md text-ink/65 md:text-right">{it.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 max-w-xl text-xl leading-snug">
          Don&rsquo;t see yours?{" "}
          <a
            href="#contact"
            className="font-display text-3xl italic underline decoration-ember decoration-2 underline-offset-8"
          >
            Tell us what you need ↗
          </a>
          <span className="mt-3 block text-base text-ink/60">
            If we&rsquo;re not the right fit, we&rsquo;ll say so.
          </span>
        </p>
      </div>
    </section>
  );
}
