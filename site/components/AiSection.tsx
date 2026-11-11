"use client";

import { motion, MotionConfig } from "motion/react";
import { AI_INTRO, AI_CAPS, AI_TOOLS, AI_TRUST } from "@/lib/ai";
import AiFlow from "./AiFlow";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";

const label = "font-mono text-xs uppercase tracking-[0.25em] text-cream/50";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AiSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="ai"
        className="relative -mt-10 overflow-hidden rounded-t-[2.5rem] bg-ink px-5 pb-32 pt-24 text-cream md:-mt-16 md:rounded-t-[4rem] md:px-10 md:pb-44 md:pt-36"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 size-[50rem] rounded-full opacity-40 blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(255,77,28,0.45), transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          <p className={`${label} mb-8`}>(AI &amp; Automation)</p>
          <h2 className="text-[clamp(2.8rem,8vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.045em]">
            <SplitReveal text="AI that does" />
            <br />
            <SplitReveal
              text="real work."
              delay={0.15}
              accent={[0, 1]}
              accentClassName="font-display italic text-ember"
            />
          </h2>
          <Reveal className="mt-10 max-w-3xl">
            <p className="text-xl leading-snug text-cream/75 md:text-2xl">{AI_INTRO}</p>
          </Reveal>

          <AiFlow />

          {/* capabilities */}
          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-28">
            {AI_CAPS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.07}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="h-full rounded-[1.75rem] border border-cream/12 bg-ink-2 p-7 transition-colors hover:border-ember/60"
                >
                  <span className="font-display text-4xl italic text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-3 text-cream/65">{c.body}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>

          {/* tools + trust */}
          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className={`${label} mb-5`}>Built with</p>
              <ul className="flex flex-wrap gap-2.5">
                {AI_TOOLS.map((t) => (
                  <li key={t} className="rounded-full bg-cream px-5 py-2.5 text-lg font-medium text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="flex gap-4 font-display text-3xl italic leading-tight md:text-4xl">
                <span className="mt-2 grid size-7 shrink-0 place-items-center rounded-full bg-ember text-sm font-bold not-italic text-ink">
                  ✓
                </span>
                {AI_TRUST}
              </p>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal className="mt-20 rounded-[2.5rem] bg-ember p-8 text-ink md:mt-28 md:p-14">
            <h3 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Not sure where AI fits?
            </h3>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">
              Book a free automation review. We&rsquo;ll tell you what&rsquo;s worth
              automating, and what isn&rsquo;t.
            </p>
            <div className="mt-8">
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  data-cursor="Book"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-lg font-semibold text-cream"
                >
                  Book a free automation review ↗
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </MotionConfig>
  );
}
