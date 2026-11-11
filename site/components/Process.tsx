"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROCESS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Process() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const dist = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            pin: true,
            scrub: 0.6,
            start: "top top",
            end: () => "+=" + dist(),
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      id="process"
      ref={root}
      className="relative overflow-hidden bg-ink py-24 text-cream md:flex md:h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-[clamp(2.6rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.04em]">
            How it <span className="font-display italic text-ember">works.</span>
          </h2>
          <p className="hidden font-mono text-xs uppercase tracking-[0.25em] text-cream/50 md:block">
            Scroll →
          </p>
        </div>
        <div className="mt-8 hidden h-px w-full bg-cream/15 md:block">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-ember" />
        </div>
      </div>

      <div
        ref={track}
        className="mt-12 flex flex-col gap-4 px-5 md:w-max md:flex-row md:gap-6 md:px-10"
      >
        {PROCESS.map((s) => (
          <article
            key={s.n}
            className="relative flex min-h-72 flex-col justify-between rounded-[2rem] border border-cream/15 bg-ink-2 p-8 md:h-[52vh] md:w-[32vw] md:min-w-[22rem] md:max-w-[30rem]"
          >
            <span className="font-display text-[7rem] italic leading-none text-ember md:text-[9rem]">
              {s.n}
            </span>
            <div>
              <h3 className="text-4xl font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 max-w-sm text-cream/65">{s.body}</p>
            </div>
          </article>
        ))}
        <div className="hidden w-[10vw] shrink-0 md:block" aria-hidden />
      </div>
    </section>
  );
}
