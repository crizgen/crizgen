import { CONTACT, NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-5 pt-16 text-cream md:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 md:flex-row">
        <p className="max-w-xs text-cream/60">
          Crizgen is a web and app studio in Chennai, building for founders and businesses
          worldwide.
        </p>
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {NAV.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ember">{l.label}</a>
            </li>
          ))}
          <li><a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-ember">GitHub</a></li>
          <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ember">LinkedIn</a></li>
        </ul>
      </div>

      <p
        aria-hidden
        className="mx-auto mt-10 max-w-[1500px] select-none text-center font-medium pb-[0.12em] leading-[0.8] tracking-[-0.06em] text-cream/[0.08] text-[clamp(5rem,26vw,28rem)]"
      >
        crizgen
      </p>

      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-2 border-t border-cream/10 py-6 pr-0 text-sm text-cream/45 md:flex-row md:pr-20">
        <p>© 2026 Crizgen. All rights reserved.</p>
        <a href="#top" className="hover:text-ember">Back to top ↑</a>
      </div>
    </footer>
  );
}
