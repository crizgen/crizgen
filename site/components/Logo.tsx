/** Crizgen mark (open C with an ember node) + wordmark. Colour follows currentColor. */
export default function Logo({
  className = "",
  markClassName = "size-8",
  wordClassName = "text-3xl",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="6 6 52 52" className={markClassName} fill="none" aria-hidden>
        <path
          d="M44.12 44.71 A19 19 0 1 1 44.12 19.29"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="51" cy="32" r="5.2" fill="#ff4d1c" />
      </svg>
      <span className={`font-display leading-none tracking-tight ${wordClassName}`}>
        Crizgen<span className="text-ember">.</span>
      </span>
    </span>
  );
}
