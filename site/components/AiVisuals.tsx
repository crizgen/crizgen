"use client";

import { motion } from "motion/react";
import { Frame, Timed, useTick } from "./WorkVisuals";

const CYCLE = 7;

/** Bar that grows from 0 to `w` and resets, staggered by `a` (0..1 of the cycle). */
function Grow({ a, w, className }: { a: number; w: string; className: string }) {
  return (
    <motion.div
      className={className}
      animate={{ width: ["0%", "0%", w, w, "0%", "0%"] }}
      transition={{ duration: CYCLE, repeat: Infinity, times: [0, a, a + 0.12, 0.93, 0.98, 1], ease: "easeOut" }}
    />
  );
}

/* ----------------------------------------------------------------- Reply */
export function ReplyVisual() {
  return (
    <Frame url="inbox / draft reply">
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="rounded-xl bg-ink/[.05] p-3">
          <div className="flex items-center gap-2">
            <span className="size-5 rounded-full bg-ink/25" />
            <span className="text-[11px] font-semibold">Refund for order #1042?</span>
          </div>
          <div className="mt-2 h-1.5 w-11/12 rounded bg-ink/20" />
          <div className="mt-1.5 h-1.5 w-2/3 rounded bg-ink/20" />
        </div>

        <div className="flex-1 rounded-xl border border-ember/40 bg-ember/[.06] p-3">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-ember">AI draft</p>
          <Grow a={0.1} w="92%" className="h-1.5 rounded bg-ink/60" />
          <Grow a={0.2} w="78%" className="mt-2 h-1.5 rounded bg-ink/60" />
          <Grow a={0.3} w="85%" className="mt-2 h-1.5 rounded bg-ink/60" />
          <Grow a={0.4} w="40%" className="mt-2 h-1.5 rounded bg-ink/60" />
        </div>

        <div className="flex items-center justify-end gap-2 text-[11px]">
          <span className="rounded-full border border-ink/20 px-3 py-1.5">Edit</span>
          <motion.span
            className="rounded-full bg-ink px-3 py-1.5 text-cream"
            animate={{ scale: [1, 1, 1, 1.08, 1, 1], backgroundColor: ["#0b0b0c", "#0b0b0c", "#0b0b0c", "#ff4d1c", "#0b0b0c", "#0b0b0c"] }}
            transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.4, 0.6, 0.72, 0.8, 1] }}
          >
            Approve &amp; send
          </motion.span>
        </div>
      </div>
    </Frame>
  );
}

/* --------------------------------------------------------------- Qualify */
const LEADS = [
  { n: "Aisha K.", s: "92%", tag: "Hot", hot: true },
  { n: "Daniel R.", s: "71%", tag: "Warm", hot: false },
  { n: "Priya S.", s: "44%", tag: "Cold", hot: false },
  { n: "Marcus T.", s: "27%", tag: "Cold", hot: false },
];

export function QualifyVisual() {
  return (
    <Frame url="leads / new today">
      <div className="flex h-full flex-col gap-2.5 p-4">
        {LEADS.map((l, i) => (
          <div
            key={l.n}
            className={`rounded-xl p-3 ${l.hot ? "bg-ember/15 ring-1 ring-ember/50" : "bg-ink/[.05]"}`}
          >
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold">{l.n}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase ${
                  l.hot ? "bg-ember text-ink" : "bg-ink/10 text-ink/60"
                }`}
              >
                {l.tag}
              </span>
            </div>
            <div className="mt-2 h-1.5 rounded bg-ink/10">
              <Grow a={0.08 + i * 0.1} w={l.s} className={`h-1.5 rounded ${l.hot ? "bg-ember" : "bg-ink/50"}`} />
            </div>
          </div>
        ))}
        <Timed a={0.6} className="mt-auto self-start rounded-full bg-ink px-3 py-1.5 text-[11px] text-cream">
          Call booked · Thursday 11:00 ✓
        </Timed>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- Digest */
export function DigestVisual() {
  const rows = [
    { t: "Sales are up on last week", a: 0.18 },
    { t: "3 products running low", a: 0.34 },
    { t: "2 support tickets need you", a: 0.5 },
  ];
  const bars = [38, 52, 44, 70, 88];
  return (
    <Frame url="WhatsApp · Monday 9:00" dark>
      <div className="flex h-full flex-col justify-center p-4">
        <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#1f2a24] p-3 text-[12px] text-cream">
          <p className="font-semibold text-emerald-300">Your weekly digest</p>
          <ul className="mt-2 space-y-1.5">
            {rows.map((r) => (
              <Timed key={r.t} a={r.a} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ember" />
                {r.t}
              </Timed>
            ))}
          </ul>
          <div className="mt-3 flex h-12 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-emerald-300/70"
                animate={{ height: ["0%", "0%", `${h}%`, `${h}%`, "0%", "0%"] }}
                transition={{ duration: CYCLE, repeat: Infinity, times: [0, 0.12 + i * 0.04, 0.28 + i * 0.04, 0.93, 0.98, 1], ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------------- Recall */
const SEARCH = "What is our refund policy?";

export function RecallVisual() {
  const total = SEARCH.length + 8 + 90;
  const t = useTick(55, total, SEARCH.length + 14);
  const typed = Math.min(SEARCH.length, t);
  const show = t >= SEARCH.length + 8;
  return (
    <Frame url="ask / company files">
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="flex items-center gap-2 rounded-full border border-ink/20 px-3 py-2 text-[12px]">
          <span className="text-ink/40">⌕</span>
          <span>
            {SEARCH.slice(0, typed)}
            {typed < SEARCH.length && <span className="ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-ink" />}
          </span>
        </div>
        <div
          className={`rounded-xl bg-ink/[.05] p-3 transition-all duration-500 ${
            show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="text-[12px] leading-snug">
            Customers can return items within 14 days of delivery for a full refund, as long as
            they are unused.
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-ember/15 px-2.5 py-1 font-mono text-[9px] text-ember">
            ▤ Returns-policy.pdf · p.4
          </span>
        </div>
      </div>
    </Frame>
  );
}
