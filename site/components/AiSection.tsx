"use client";

import { motion, MotionConfig } from "motion/react";
import {
  AI_INTRO,
  AI_FLOW,
  AI_CAPS,
  AI_AREAS,
  AI_TOOLS,
  AI_STEPS,
  AI_SAFE,
  AI_CONCEPTS,
  AI_FAQ,
} from "@/lib/ai";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";
import { ReplyVisual, QualifyVisual, DigestVisual, RecallVisual } from "./AiVisuals";

const VISUALS = {
  reply: ReplyVisual,
  qualify: QualifyVisual,
  digest: DigestVisual,
  recall: RecallVisual,
} as const;

const BG = [
  "bg-gradient-to-br from-sand to-[#cdbd9f]",
  "bg-gradient-to-br from-ember/90 to-[#c93a12]",
  "bg-gradient-to-br from-[#1b2a24] to-[#0f1512]",
  "bg-gradient-to-br from-[#e9e0cf] to-sand",
];

const label = "font-mono text-xs uppercase tracking-[0.25em] text-cream/50";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
        className="relative -mt-10 overflow-hidden rounded-t-[2.5rem] bg-ink px-5 pb-36 pt-24 text-cream md:-mt-16 md:rounded-t-[4rem] md:px-10 md:pb-52 md:pt-36"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 size-[50rem] rounded-full opacity-40 blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(255,77,28,0.45), transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-[1500px]">
          {/* heading + intro */}
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

          {/* flow diagram */}
          <Reveal className="mt-16 md:mt-24">
            <p className={`${label} mb-6`}>What it looks like</p>
            <div className="relative grid gap-3 md:grid-cols-4 md:gap-5">
              <div aria-hidden className="absolute inset-x-[12%] top-1/2 hidden h-px bg-cream/15 md:block">
                <motion.span
                  className="absolute -top-[3px] size-[7px] rounded-full bg-ember shadow-[0_0_14px_4px_rgba(255,77,28,0.7)]"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
              {AI_FLOW.map((n, i) => (
                <div
                  key={n.label}
                  className={`relative rounded-[1.5rem] border p-6 ${
                    n.ai ? "z-10 border-ember bg-[#2a1610]" : "z-10 border-cream/15 bg-ink-2"
                  }`}
                >
                  <span className="font-mono text-[11px] text-cream/40">0{i + 1}</span>
                  <p className="mt-3 text-xl font-semibold">{n.label}</p>
                  <p className="mt-1 text-sm text-cream/60">{n.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* capabilities */}
          <div className="mt-24 md:mt-36">
            <p className={`${label} mb-8`}>What we build</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AI_CAPS.map((c, i) => (
                <Reveal key={c.title} delay={(i % 4) * 0.07}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-[1.75rem] border border-cream/12 bg-ink-2 p-6 transition-colors hover:border-ember/60"
                  >
                    <span className="font-display text-4xl italic text-ember">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-5 text-xl font-semibold leading-tight">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{c.body}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* where it helps + tools */}
          <div className="mt-24 grid gap-14 md:mt-36 md:grid-cols-2">
            <Reveal>
              <p className={`${label} mb-6`}>Where it helps</p>
              <ul className="flex flex-wrap gap-2.5">
                {AI_AREAS.map((a) => (
                  <li key={a} className="rounded-full border border-cream/20 px-5 py-2.5 text-lg">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={`${label} mb-6`}>Built with</p>
              <p className="max-w-lg text-cream/70">
                We build with leading models and automation platforms and choose what fits
                your needs, not what&rsquo;s fashionable.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {AI_TOOLS.map((t) => (
                  <li key={t} className="rounded-full bg-cream px-5 py-2.5 text-lg font-medium text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* process */}
          <div className="mt-24 md:mt-36">
            <p className={`${label} mb-8`}>How an AI project runs</p>
            <ol className="grid gap-4 md:grid-cols-4">
              {AI_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <li className="h-full rounded-[1.75rem] bg-cream p-6 text-ink">
                    <span className="font-display text-6xl italic leading-none text-ember">{s.n}</span>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-ink/65">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* safe + reliable */}
          <div className="mt-24 md:mt-36">
            <p className={`${label} mb-8`}>How we keep it safe and reliable</p>
            <div className="grid gap-x-12 md:grid-cols-2">
              {AI_SAFE.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.08}>
                  <div className="flex gap-4 border-t border-cream/15 py-7">
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-ember text-xs font-bold text-ink">
                      ✓
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                      <p className="mt-1.5 max-w-md text-cream/65">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* concept projects */}
          <div className="mt-24 md:mt-36">
            <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <p className={label}>AI concept projects</p>
              <p className="max-w-sm text-cream/55">Concepts we designed to show how AI fits into everyday work.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              {AI_CONCEPTS.map((p, i) => {
                const Visual = VISUALS[p.visual];
                return (
                  <Reveal key={p.title} delay={(i % 2) * 0.08}>
                    <motion.article
                      whileHover={{ y: -6 }}
                      className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-cream/10 bg-ink-2"
                    >
                      <div className={`relative aspect-[16/11] p-5 md:p-7 ${BG[i]}`}>
                        <Visual />
                        <span className="absolute right-4 top-4 z-10 rounded-full bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cream backdrop-blur">
                          Concept
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{p.kind}</p>
                        <h3 className="mt-3 font-display text-4xl italic leading-none md:text-5xl">{p.title}</h3>
                        <p className="mt-4 text-cream/65">{p.desc}</p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <li key={t} className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/70">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-24 grid gap-10 md:mt-36 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className={`${label} mb-4`}>Questions</p>
              <h3 className="text-4xl font-medium leading-none tracking-[-0.03em] md:text-5xl">
                Things people ask <span className="font-display italic text-ember">first.</span>
              </h3>
            </div>
            <div className="border-t border-cream/15">
              {AI_FAQ.map((f) => (
                <details key={f.q} className="group border-b border-cream/15 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span aria-hidden className="text-3xl leading-none text-ember transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-xl text-cream/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal className="mt-24 rounded-[2.5rem] bg-ember p-8 text-ink md:mt-36 md:p-14">
            <h3 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Not sure where AI fits?
            </h3>
            <p className="mt-5 max-w-2xl text-lg md:text-xl">
              Book a free automation review. We&rsquo;ll look at how your team works and tell
              you what is worth automating, and what isn&rsquo;t.
            </p>
            <div className="mt-8">
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
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
