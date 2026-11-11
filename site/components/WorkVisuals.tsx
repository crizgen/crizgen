"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Steps through 0..total-1 every `ms`. Freezes on `rest` when reduced motion is on. */
export function useTick(ms: number, total: number, rest: number) {
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setT((x) => (x + 1) % total), ms);
    return () => clearInterval(id);
  }, [ms, total, reduce]);
  return reduce ? rest : t;
}

export function Frame({
  children,
  url,
  dark = false,
}: {
  children: React.ReactNode;
  url: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-xl shadow-2xl ${
        dark ? "bg-[#101012] text-cream ring-1 ring-cream/10" : "bg-paper text-ink"
      }`}
    >
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-2 ${
          dark ? "border-cream/10" : "border-ink/10"
        }`}
      >
        <span className="size-2 rounded-full bg-ember" />
        <span className={`size-2 rounded-full ${dark ? "bg-cream/20" : "bg-ink/20"}`} />
        <span className={`size-2 rounded-full ${dark ? "bg-cream/20" : "bg-ink/20"}`} />
        <span
          className={`ml-2 truncate rounded-full px-3 py-0.5 font-mono text-[9px] ${
            dark ? "bg-cream/5 text-cream/50" : "bg-ink/5 text-ink/50"
          }`}
        >
          {url}
        </span>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ CRM */
export function CrmVisual() {
  const cols = [
    { name: "New", n: 3 },
    { name: "In talks", n: 2 },
    { name: "Won", n: 1 },
  ];
  return (
    <Frame url="pipeline.app/deals">
      <div className="relative grid h-full grid-cols-3 gap-3 p-4">
        {cols.map((c) => (
          <div key={c.name} className="rounded-xl bg-ink/[.06] p-2.5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ink/50">
              {c.name}
            </p>
            {Array.from({ length: c.n }).map((_, k) => (
              <div key={k} className="mb-2 rounded-lg bg-white p-2 shadow-sm">
                <div className="h-1.5 w-3/4 rounded bg-ink/70" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-ink/20" />
              </div>
            ))}
          </div>
        ))}
        <motion.div
          className="absolute top-[52px] w-[27%] rounded-lg bg-ember p-2 shadow-lg"
          animate={{
            left: ["4.5%", "4.5%", "37%", "37%", "69.5%", "69.5%"],
            y: [0, 0, 14, 14, 28, 28],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.15, 0.4, 0.6, 0.85, 1],
          }}
        >
          <div className="h-1.5 w-3/4 rounded bg-ink" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded bg-ink/40" />
        </motion.div>
      </div>
    </Frame>
  );
}

/* ----------------------------------------------------------------- Shop */
export function ShopVisual() {
  const t = useTick(900, 6, 3);
  const sel = Math.floor(t / 2) % 3;
  const count = sel + 1;
  const added = t % 2 === 1;
  const items = [
    { c: "#ff4d1c", s: "rounded-full" },
    { c: "#0b0b0c", s: "rounded-2xl" },
    { c: "#d8c7a8", s: "rounded-t-full rounded-b-md" },
  ];
  return (
    <Frame url="handmade.shop">
      <div className="relative flex h-full flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-xl italic">Hand&amp;Made</span>
          <span className="relative">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 7h12l-1 13H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <motion.span
              key={count}
              initial={{ scale: 0.4 }}
              animate={{ scale: 1 }}
              className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-ember text-[9px] font-bold text-ink"
            >
              {count}
            </motion.span>
          </span>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl bg-ink/[.05] p-2 transition-all duration-300 ${
                sel === i ? "ring-2 ring-ember" : ""
              }`}
            >
              <div className="grid flex-1 place-items-center">
                <div className={`size-[55%] ${it.s}`} style={{ background: it.c }} />
              </div>
              <div className="mt-2 h-1.5 w-3/4 rounded bg-ink/70" />
              <div className="mt-1.5 h-1.5 w-1/3 rounded bg-ink/25" />
            </div>
          ))}
        </div>
        <motion.div
          animate={{ opacity: added ? 1 : 0, y: added ? 0 : 8 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[10px] text-cream"
        >
          Added to bag ✓
        </motion.div>
      </div>
    </Frame>
  );
}

/* --------------------------------------------------------------- AI chat */
const Q = "Where's my order #1042?";
const A = "It left our warehouse this morning and will arrive tomorrow by 6 PM. Want the tracking link?";

export function AiChatVisual() {
  const total = 34 + A.length + 55;
  const t = useTick(45, total, 34 + A.length);
  const showUser = t >= 4;
  const typing = t >= 14 && t < 34;
  const chars = Math.max(0, Math.min(A.length, t - 34));
  return (
    <Frame url="your-site.com / help" dark>
      <div className="flex h-full flex-col p-4">
        <div className="mb-3 flex items-center gap-2 text-[11px] text-cream/60">
          <span className="size-2 rounded-full bg-emerald-400" /> Support assistant
        </div>
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden text-[12px] leading-snug">
          <div
            className={`ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-ember px-3 py-2 font-medium text-ink transition-opacity duration-300 ${
              showUser ? "opacity-100" : "opacity-0"
            }`}
          >
            {Q}
          </div>
          {typing && (
            <div className="flex w-14 items-center justify-center gap-1 rounded-2xl rounded-bl-sm bg-cream/10 py-3">
              {[0, 1, 2].map((d) => (
                <span key={d} className="size-1.5 animate-bounce rounded-full bg-cream/60" style={{ animationDelay: `${d * 120}ms` }} />
              ))}
            </div>
          )}
          {chars > 0 && (
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-cream/10 px-3 py-2 text-cream">
              {A.slice(0, chars)}
              {chars < A.length && <span className="ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-cream" />}
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-full border border-cream/15 px-3 py-2 text-[11px] text-cream/40">
          Ask anything…
          <span className="grid size-5 place-items-center rounded-full bg-ember text-ink">↑</span>
        </div>
      </div>
    </Frame>
  );
}

/* -------------------------------------------------------------- Delivery */
const ROUTE = "M30 215 C30 150 120 160 108 105 S150 45 158 28";

export function DeliveryVisual() {
  return (
    <div className="relative h-full">
    <div className="absolute inset-y-0 left-1/2 aspect-[9/17] -translate-x-1/2 overflow-hidden rounded-[1.6rem] border-[3px] border-ink bg-paper shadow-2xl">
      <div className="relative h-full bg-sand">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#0b0b0c14 1px, transparent 1px), linear-gradient(90deg, #0b0b0c14 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <svg viewBox="0 0 190 250" className="absolute inset-0 size-full" fill="none" aria-hidden>
          <path d={ROUTE} stroke="#0b0b0c" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round" opacity=".55" />
          <circle cx="30" cy="215" r="5" fill="#0b0b0c" />
          <circle cx="158" cy="28" r="7" fill="#ff4d1c" />
          <circle cx="158" cy="28" r="12" fill="#ff4d1c" opacity=".25" />
          <circle r="14" fill="#ff4d1c" opacity=".25">
            <animateMotion dur="7s" repeatCount="indefinite" path={ROUTE} />
          </circle>
          <circle r="6" fill="#ff4d1c" stroke="#fff" strokeWidth="2">
            <animateMotion dur="7s" repeatCount="indefinite" path={ROUTE} />
          </circle>
        </svg>
        <div className="absolute inset-x-2 bottom-2 rounded-2xl bg-ink p-3 text-cream">
          <p className="font-mono text-[9px] uppercase tracking-widest text-cream/50">On the way</p>
          <p className="mt-0.5 whitespace-nowrap text-[13px] font-semibold">Arriving in 8 min</p>
          <div className="mt-2 h-1 rounded-full bg-cream/15">
            <motion.div
              className="h-1 rounded-full bg-ember"
              animate={{ width: ["8%", "100%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

/* ------------------------------------------------------------ Doc reader */
const CYCLE = 7;
const off = "rgba(255,77,28,0)";
const on = "rgba(255,77,28,0.22)";

export function Timed({
  a,
  className,
  children,
  highlight = false,
}: {
  a: number;
  className?: string;
  children?: React.ReactNode;
  highlight?: boolean;
}) {
  const times = [0, a, a + 0.06, 0.93, 0.98, 1];
  return highlight ? (
    <motion.div
      className={className}
      animate={{ backgroundColor: [off, off, on, on, off, off] }}
      transition={{ duration: CYCLE, repeat: Infinity, times }}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      animate={{ opacity: [0, 0, 1, 1, 0, 0], x: [-12, -12, 0, 0, 0, 0] }}
      transition={{ duration: CYCLE, repeat: Infinity, times }}
    >
      {children}
    </motion.div>
  );
}

export function DocVisual() {
  const fields = [
    { k: "Vendor", v: "Northwind Traders", a: 0.2 },
    { k: "Invoice date", v: "04 Nov 2026", a: 0.36 },
    { k: "Total", v: "₹ 48,200", a: 0.52 },
  ];
  return (
    <Frame url="reader.app / inbox">
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-4 p-4">
        <div className="relative flex flex-col gap-2 overflow-hidden rounded-lg border border-ink/10 bg-white p-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-widest text-ink/50">INVOICE</span>
            <div className="h-1.5 w-8 rounded bg-ink/20" />
          </div>
          <Timed a={0.2} highlight className="rounded px-1 py-1.5">
            <div className="h-1.5 w-2/3 rounded bg-ink/70" />
          </Timed>
          <Timed a={0.36} highlight className="rounded px-1 py-1.5">
            <div className="h-1.5 w-1/2 rounded bg-ink/45" />
          </Timed>
          {[70, 85, 60].map((w, i) => (
            <div key={i} className="h-1.5 rounded bg-ink/10" style={{ width: `${w}%` }} />
          ))}
          <div className="flex-1" />
          <Timed a={0.52} highlight className="ml-auto w-2/3 rounded px-1 py-1.5">
            <div className="ml-auto h-2 w-3/4 rounded bg-ink/80" />
          </Timed>
          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-0.5 bg-ember shadow-[0_0_12px_2px_rgba(255,77,28,0.6)]"
            animate={{ top: ["4%", "96%"] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          {fields.map((f) => (
            <Timed key={f.k} a={f.a} className="rounded-lg border border-ink/10 bg-white px-3 py-2">
              <p className="font-mono text-[9px] uppercase tracking-widest text-ink/45">{f.k}</p>
              <p className="text-[13px] font-semibold">{f.v}</p>
            </Timed>
          ))}
          <Timed a={0.7} className="rounded-lg bg-ink px-3 py-2 text-[11px] text-cream">
            Sent to accounting ✓
          </Timed>
        </div>
      </div>
    </Frame>
  );
}
