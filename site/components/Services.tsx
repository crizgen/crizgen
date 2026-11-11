"use client";

import { motion } from "motion/react";
import SplitReveal from "./SplitReveal";

const spring = { type: "spring", stiffness: 260, damping: 18 } as const;

function Card({
  className,
  children,
  delay = 0,
}: {
  className: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotate: 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: -0.6, transition: spring }}
      className={`relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:p-9 ${className}`}
    >
      {children}
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-cream px-5 pb-28 pt-4 text-ink md:px-10 md:pb-44">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-[clamp(2.6rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
            <SplitReveal text="What we" />
            <br />
            <SplitReveal
              text="make."
              delay={0.15}
              accent={[0]}
              accentClassName="font-display italic text-ember"
            />
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-6 md:gap-5">
          {/* Web */}
          <Card className="min-h-[26rem] bg-ink text-cream md:col-span-4" >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-cream/50">01</span>
              <svg viewBox="0 0 220 130" className="w-44 md:w-64" fill="none" aria-hidden>
                <rect x="1" y="1" width="218" height="128" rx="12" stroke="#f3ede2" strokeOpacity=".3" strokeWidth="2" />
                <path d="M1 26h218" stroke="#f3ede2" strokeOpacity=".3" strokeWidth="2" />
                <circle cx="16" cy="13" r="3" fill="#ff4d1c" />
                <circle cx="28" cy="13" r="3" fill="#f3ede2" fillOpacity=".4" />
                <circle cx="40" cy="13" r="3" fill="#f3ede2" fillOpacity=".4" />
                <rect x="16" y="42" width="110" height="12" rx="4" fill="#f3ede2" fillOpacity=".85" />
                <rect x="16" y="62" width="76" height="12" rx="4" fill="#ff4d1c" />
                <rect x="16" y="92" width="52" height="18" rx="9" fill="#f3ede2" fillOpacity=".2" />
                <rect x="140" y="40" width="64" height="70" rx="8" fill="#f3ede2" fillOpacity=".1" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-7xl">Websites &amp; web apps</h3>
              <p className="mt-4 max-w-lg text-cream/65">
                Marketing sites that convert, dashboards your team lives in, client portals,
                booking tools, APIs and integrations. React, Next.js and Node under the hood.
              </p>
            </div>
          </Card>

          {/* Mobile */}
          <Card className="min-h-[26rem] bg-ember text-ink md:col-span-2" delay={0.1}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60">02</span>
              <motion.svg
                viewBox="0 0 70 120"
                className="w-20"
                fill="none"
                aria-hidden
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="2" y="2" width="66" height="116" rx="14" stroke="#0b0b0c" strokeWidth="3" />
                <rect x="25" y="8" width="20" height="5" rx="2.5" fill="#0b0b0c" />
                <rect x="12" y="28" width="46" height="26" rx="6" fill="#0b0b0c" />
                <rect x="12" y="62" width="30" height="8" rx="4" fill="#0b0b0c" fillOpacity=".5" />
                <rect x="12" y="76" width="46" height="8" rx="4" fill="#0b0b0c" fillOpacity=".25" />
              </motion.svg>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-6xl">Mobile apps</h3>
              <p className="mt-4 text-ink/75">
                iOS and Android from one codebase with Flutter or React Native. Store
                submission included.
              </p>
            </div>
          </Card>

          {/* Design */}
          <Card className="min-h-[22rem] bg-sand md:col-span-2" delay={0.05}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50">03</span>
              <div className="flex">
                {["#ff4d1c", "#0b0b0c", "#f3ede2"].map((c, i) => (
                  <span
                    key={c}
                    className="-ml-3 size-12 rounded-full border-2 border-sand first:ml-0"
                    style={{ background: c, zIndex: 3 - i }}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-6xl">UI / UX design</h3>
              <p className="mt-4 text-ink/70">
                Research, wireframes, prototypes and design systems your developers will
                actually enjoy.
              </p>
            </div>
          </Card>

          {/* AI */}
          <Card className="min-h-[22rem] bg-ink-2 text-cream md:col-span-4" delay={0.1}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-cream/50">04</span>
              <svg viewBox="0 0 200 110" className="w-44 md:w-56" fill="none" aria-hidden>
                {[[20,25,70,55],[20,85,70,55],[70,55,130,30],[70,55,130,80],[130,30,180,55],[130,80,180,55]].map(([x1,y1,x2,y2],i)=>(
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f3ede2" strokeOpacity=".25" strokeWidth="1.5" />
                ))}
                {[[20,25],[20,85],[70,55],[130,30],[130,80],[180,55]].map(([cx,cy],i)=>(
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="7"
                    fill={i===5 ? "#ff4d1c" : "#f3ede2"}
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </svg>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-6xl">AI solutions</h3>
              <p className="mt-4 max-w-lg text-cream/65">
                Assistants that answer from your own content, tools that read documents and automate repetitive work, AI features inside your product, and the automations that keep your business running on its own. Practical, measured, and built to save real time.
              </p>
            </div>
          </Card>

          {/* Support strip */}
          <Card className="min-h-[16rem] bg-paper md:col-span-6" delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
              Also
            </span>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Cloud & hosting",
                "API integrations",
                "Performance audits",
                "SEO foundations",
                "Analytics",
                "Maintenance & support",
                "Security patching",
                "Accessibility",
              ].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.08, rotate: i % 2 ? 2 : -2 }}
                  className="rounded-full border border-ink/20 px-5 py-2.5 text-base md:text-lg"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 self-start font-display text-3xl italic underline decoration-ember decoration-2 underline-offset-8"
            >
              Tell us what you need ↗
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
