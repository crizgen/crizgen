/** Logo-draw intro. Pure CSS (see globals.css), so it never blocks the page. */
export default function Intro() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-inner">
        <svg viewBox="6 6 52 52" width="104" height="104" fill="none">
          <path
            className="intro-c"
            d="M44.12 44.71 A19 19 0 1 1 44.12 19.29"
          />
          <circle className="intro-dot" cx="51" cy="32" r="5.2" />
        </svg>
        <p className="intro-word">
          Crizgen<span>.</span>
        </p>
      </div>
    </div>
  );
}
