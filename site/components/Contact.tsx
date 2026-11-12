"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CONTACT, ENGAGE_LINE } from "@/lib/content";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const field =
  "w-full border-0 border-b border-ink/25 bg-transparent py-4 text-xl transition-colors placeholder:text-ink/60 focus:border-ember";

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);
  const [sending, setSending] = useState(false);

  // Clear a field's error as soon as the person edits it, and drop the old
  // success/failure message once they start typing again.
  function onInput(e: React.FormEvent<HTMLFormElement>) {
    const id = (e.target as HTMLElement).id as keyof Errors;
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
    setStatus((s) => (s ? null : s));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "What should we call you?";
    if (!data.email?.trim()) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      next.email = "That email doesn't look right.";
    const phone = data.phone?.trim() ?? "";
    if (phone) {
      const digits = phone.replace(/\D/g, "");
      if (!/^[+\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15)
        next.phone = "That number doesn't look right. You can leave it blank.";
    } else {
      delete data.phone;
    }
    if (!data.message?.trim() || data.message.trim().length < 10)
      next.message = "Give us a little more to go on (10+ characters).";
    setErrors(next);
    setStatus(null);
    const firstBad = (["name", "email", "phone", "message"] as const).find((k) => next[k]);
    if (firstBad) {
      document.getElementById(firstBad)?.focus();
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: CONTACT.web3formsKey,
          subject: "New Crizgen Project Inquiry",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus({ ok: true, msg: "Got it. We'll be in touch within 24 hours." });
        form.reset();
      } else {
        setStatus({ ok: false, msg: json.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Check your connection and retry." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="rounded-t-[2.5rem] bg-cream px-5 pb-28 pt-28 text-ink md:rounded-t-[4rem] md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.9] tracking-[-0.045em]">
          <SplitReveal text="Got an idea?" />
          <br />
          <SplitReveal
            text="Let's talk."
            delay={0.15}
            accent={[0, 1]}
            accentClassName="font-display italic text-ember"
          />
        </h2>

        <ol className="mt-12 flex flex-col gap-2 text-xl md:mt-16 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:text-2xl">
          {ENGAGE_LINE.map((t, i) => (
            <li key={t} className="flex items-center gap-4">
              {i > 0 && <span aria-hidden className="hidden text-ember md:inline">→</span>}
              <span>{t}</span>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 inline-block break-all font-display text-3xl italic underline decoration-ember decoration-2 underline-offset-8 md:text-4xl"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Phone</p>
              <a href={CONTACT.phoneHref} className="mt-2 inline-block text-2xl">
                {CONTACT.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">Studio</p>
              <p className="mt-2 max-w-xs text-lg leading-snug text-ink/75">{CONTACT.address}</p>
            </div>
            <Magnetic>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-cream"
              >
                Chat on WhatsApp ↗
              </a>
            </Magnetic>
          </div>

          <form onSubmit={onSubmit} onInput={onInput} noValidate className="space-y-8">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
                Your name
              </label>
              <input id="name" name="name" autoComplete="name" placeholder="Jane Doe" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name && <p id="name-error" className="mt-2 text-sm font-medium text-[#b92d08]" role="alert">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
                Email
              </label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              {errors.email && <p id="email-error" className="mt-2 text-sm font-medium text-[#b92d08]" role="alert">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
                Mobile number <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
              {errors.phone && <p id="phone-error" className="mt-2 text-sm font-medium text-[#b92d08]" role="alert">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="service" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
                I need
              </label>
              <select id="service" name="service" className={field}>
                <option>An AI solution or automation</option>
                <option>A free automation review</option>
                <option>A website or web app</option>
                <option>A mobile app</option>
                <option>UI / UX design</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.25em] text-ink/60">
                Tell us about it
              </label>
              <textarea id="message" name="message" rows={4} placeholder="What are you building, and by when?" className={`${field} resize-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
              {errors.message && <p id="message-error" className="mt-2 text-sm font-medium text-[#b92d08]" role="alert">{errors.message}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full bg-ember px-10 py-5 text-lg font-semibold text-ink disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send it ↗"}
              </motion.button>
              {status && (
                <p role="status" className={status.ok ? "text-emerald-800" : "text-[#b92d08]"}>
                  {status.msg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
