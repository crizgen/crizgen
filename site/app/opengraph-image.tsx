import { ImageResponse } from "next/og";

export const alt = "Crizgen - AI, web and mobile studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 85% 15%, rgba(255,77,28,0.55) 0%, rgba(255,77,28,0.08) 45%, #0b0b0c 70%)",
          backgroundColor: "#0b0b0c",
          color: "#f3ede2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 48, fontWeight: 700 }}>
          <svg width="58" height="58" viewBox="6 6 52 52">
            <path d="M44.12 44.71 A19 19 0 1 1 44.12 19.29" fill="none" stroke="#f3ede2" strokeWidth="8" strokeLinecap="round" />
            <circle cx="51" cy="32" r="5.2" fill="#ff4d1c" />
          </svg>
          <div style={{ display: "flex" }}>
            Crizgen<span style={{ color: "#ff4d1c" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>
          <div style={{ display: "flex" }}>We build things</div>
          <div style={{ display: "flex" }}>people</div>
          <div style={{ display: "flex", color: "#ff4d1c" }}>actually love.</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "rgba(243,237,226,0.7)" }}>
          <div style={{ display: "flex" }}>AI solutions · Websites · Web apps · Mobile apps</div>
          <div style={{ display: "flex" }}>crizgen.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
