import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Crizgen",
  description: "How Crizgen collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "Who we are",
    body: (
      <p>
        This website is run by Crizgen (&ldquo;we&rdquo;, &ldquo;us&rdquo;), an AI, web
        and mobile studio based in Chennai, India. You can reach us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
    ),
  },
  {
    h: "What we collect",
    body: (
      <>
        <p>
          <strong>Contact form.</strong> When you send us a message we collect your name,
          email address, the service you are interested in and the message you write.
        </p>
        <p>
          <strong>WhatsApp, email and phone.</strong> If you contact us this way we see the
          details you share, such as your number or email address, and the conversation.
        </p>
        <p>
          <strong>Basic usage data.</strong> We use Vercel Web Analytics and Speed Insights
          to understand how the site performs. They measure page views and loading speed
          in aggregate. They do not use cookies to track you across other websites and we
          do not use them to identify you personally.
        </p>
      </>
    ),
  },
  {
    h: "How we use it",
    body: (
      <ul>
        <li>To reply to your enquiry and prepare a proposal.</li>
        <li>To manage and deliver any project we agree to work on together.</li>
        <li>To keep the website secure and working well.</li>
      </ul>
    ),
  },
  {
    h: "What we do not do",
    body: (
      <p>
        We do not sell your personal information and we do not send marketing emails unless
        you have asked us to.
      </p>
    ),
  },
  {
    h: "Who processes your data for us",
    body: (
      <ul>
        <li>
          <strong>Web3Forms</strong> receives the contact form submission and delivers it
          to our inbox as an email.
        </li>
        <li>
          <strong>Vercel</strong> hosts this website and provides the analytics described
          above.
        </li>
        <li>
          <strong>WhatsApp (Meta)</strong> processes messages if you choose to contact us
          there, under its own privacy policy.
        </li>
      </ul>
    ),
  },
  {
    h: "How long we keep it",
    body: (
      <p>
        We keep enquiry emails for as long as needed to respond and to keep a record of our
        conversation, and for the duration of any project plus the period required by law
        for business records. If you would like us to delete your details sooner, ask and
        we will.
      </p>
    ),
  },
  {
    h: "Cookies",
    body: (
      <p>
        This website does not set advertising or tracking cookies. Our theme and layout do
        not need any cookies to work.
      </p>
    ),
  },
  {
    h: "Your choices",
    body: (
      <p>
        You can ask us at any time to tell you what personal information we hold about you,
        to correct it, or to delete it. Email{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we will respond within
        a reasonable time.
      </p>
    ),
  },
  {
    h: "Children",
    body: <p>This website is intended for businesses and adults, not for children.</p>,
  },
  {
    h: "Changes to this policy",
    body: (
      <p>
        If we change how we handle personal information we will update this page and the
        date below.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
        <Link href="/" className="font-display text-3xl leading-none">
          Crizgen<span className="text-ember">.</span>
        </Link>
        <Link href="/" className="text-sm underline underline-offset-4">
          ← Back to site
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 md:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Legal</p>
        <h1 className="mt-3 text-5xl font-medium leading-none tracking-[-0.04em] md:text-7xl">
          Privacy <span className="font-display italic text-ember">policy.</span>
        </h1>
        <p className="mt-6 text-ink/60">Last updated: 11 November 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-ink/75 [&_a]:underline [&_a]:decoration-ember [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
