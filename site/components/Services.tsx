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
      className={`relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:min-h-[24rem] md:p-9 ${className}`}
    >
      {children}
    </motion.article>
  );
}

function Chips({ items, tone }: { items: string[]; tone: string }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className={`rounded-full border px-3.5 py-1.5 text-sm ${tone}`}>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative -mt-10 rounded-t-[2.5rem] bg-cream px-5 pb-28 pt-24 text-ink md:-mt-16 md:rounded-t-[4rem] md:px-10 md:pb-44 md:pt-36"
    >
      <div className="mx-auto max-w-[1500px]">
        <h2 className="mb-14 text-[clamp(2.6rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          <SplitReveal text="What we" />
          <br />
          <SplitReveal
            text="make."
            delay={0.15}
            accent={[0]}
            accentClassName="font-display italic text-ember"
          />
        </h2>

        <div className="grid gap-4 md:grid-cols-6 md:gap-5">
          {/* AI */}
          <Card className="bg-ink text-cream md:col-span-4">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-cream/50">01</span>
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
              <h3 className="font-display text-5xl italic md:text-7xl">AI solutions</h3>
              <p className="mt-4 max-w-lg text-lg text-cream/70">
                Assistants and automations that save real time.
              </p>
              <Chips
                tone="border-cream/25 text-cream/80"
                items={["Chatbots", "Document reading", "Workflow automation", "Search"]}
              />
            </div>
          </Card>

          {/* Web */}
          <Card className="bg-ember text-ink md:col-span-2" delay={0.1}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60">02</span>
              <svg viewBox="0 0 120 80" className="w-24" fill="none" aria-hidden>
                <rect x="2" y="2" width="116" height="76" rx="8" stroke="#0b0b0c" strokeWidth="3" />
                <path d="M2 18h116" stroke="#0b0b0c" strokeWidth="3" />
                <rect x="12" y="30" width="56" height="8" rx="3" fill="#0b0b0c" />
                <rect x="12" y="44" width="38" height="8" rx="3" fill="#0b0b0c" fillOpacity=".5" />
                <rect x="78" y="30" width="30" height="34" rx="4" fill="#0b0b0c" fillOpacity=".25" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-4xl italic md:text-5xl">Websites &amp; web apps</h3>
              <p className="mt-4 text-ink/75">Fast sites and the tools behind them.</p>
              <Chips
                tone="border-ink/35 text-ink"
                items={["Business websites", "E-commerce", "CRM", "Dashboards", "Booking", "Customer portals"]}
              />
            </div>
          </Card>

          {/* Mobile */}
          <Card className="bg-sand md:col-span-3" delay={0.05}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50">03</span>
              <motion.svg
                viewBox="0 0 70 120"
                className="w-16"
                fill="none"
                aria-hidden
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="2" y="2" width="66" height="116" rx="14" stroke="#0b0b0c" strokeWidth="3" />
                <rect x="25" y="8" width="20" height="5" rx="2.5" fill="#0b0b0c" />
                <rect x="12" y="28" width="46" height="26" rx="6" fill="#ff4d1c" />
                <rect x="12" y="62" width="30" height="8" rx="4" fill="#0b0b0c" fillOpacity=".5" />
                <rect x="12" y="76" width="46" height="8" rx="4" fill="#0b0b0c" fillOpacity=".25" />
              </motion.svg>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-6xl">Mobile apps</h3>
              <p className="mt-4 text-ink/70">iOS and Android from one codebase.</p>
              <Chips
                tone="border-ink/25 text-ink/80"
                items={["Delivery & on-demand", "Field-team apps", "Customer apps"]}
              />
            </div>
          </Card>

          {/* Design */}
          <Card className="bg-paper md:col-span-3" delay={0.1}>
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50">04</span>
              <div className="flex">
                {["#ff4d1c", "#0b0b0c", "#e7dcc8"].map((c, i) => (
                  <span
                    key={c}
                    className="-ml-3 size-12 rounded-full border-2 border-paper first:ml-0"
                    style={{ background: c, zIndex: 3 - i }}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-5xl italic md:text-6xl">UI / UX design</h3>
              <p className="mt-4 text-ink/70">Interfaces people enjoy using.</p>
              <Chips tone="border-ink/25 text-ink/80" items={["Prototypes", "Design systems"]} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
