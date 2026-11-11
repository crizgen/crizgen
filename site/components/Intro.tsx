/** Logo-draw intro. Pure CSS (see globals.css), so it never blocks the page. */
export default function Intro() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-inner">
        <svg viewBox="0 0 64 64" width="96" height="96" fill="none">
          <path
            className="intro-c"
            d="M42 22 C37 17, 27 17, 22 22 C16 28, 16 36, 22 42 C27 47, 37 47, 42 42"
          />
          <circle className="intro-dot" cx="44" cy="32" r="3.5" />
        </svg>
        <p className="intro-word">
          Crizgen<span>.</span>
        </p>
      </div>
    </div>
  );
}
