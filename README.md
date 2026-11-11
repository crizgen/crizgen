# Crizgen website

Marketing site for Crizgen, an AI, web and app studio.

## Layout

| Folder | What it is |
| --- | --- |
| `site/` | The website. Next.js (App Router), Tailwind CSS 4, Motion, GSAP, Lenis, three.js. |
| `reel/` | HyperFrames project for the 30-second studio reel and the Work-card demo clips. |
| `brand/` | Logo kit (`final/`) and the rejected logo directions (`concepts/`). |
| `SITE-CONTENT.md` | All copy on the site, in page order, for review. |

## Run the site

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

- **Copy and contact details:** `site/lib/content.ts` (page copy, contact info, form key) and `site/lib/ai.ts` (AI section).
- **Sections:** `site/components/`. The page order is set in `site/app/page.tsx`.
- **Colours and fonts:** CSS variables at the top of `site/app/globals.css`.
- **Contact form:** posts to Web3Forms from `site/components/Contact.tsx`. Send a real test message before launch.
- **Work-card videos:** `site/public/work/*.mp4` (6 s loops with posters).

## Rebuild the videos

```bash
cd reel
npx hyperframes check
npx hyperframes render -o renders/crizgen-reel.mp4
```

The four Work clips are cut from the reel (scenes at 3–9 s, 9–15 s, 15–21 s and 21–27 s), cropped to 1570×1080 and scaled to 1200 px wide.

## Deploy (Vercel)

The Next.js app is in `site/`, so set the project's **Root Directory** to `site`. No build settings need changing. Vercel Analytics and Speed Insights are already wired in.
