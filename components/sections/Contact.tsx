"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleContactSubmit(event: React.FormEvent) {
    event.preventDefault();
    setContactStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "0c3ff25b-bd2a-4a6f-9d46-dfbef0a6969c",
          ...contactForm,
        }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setContactStatus("success");
      setContactForm({ name: "", email: "", message: "" });
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

      {/* ── Section label ───────────────────────────────────── */}
      <p className="eyebrow">Let&apos;s talk</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

        {/* ── Left column ─────────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-black leading-snug text-[#173138] sm:text-3xl">
            Have a question, a problem to untangle, or an idea in progress?
          </h2>

          <p className="text-sm leading-7 text-[#52656a]">
            Send me a note. I&apos;d be glad to hear what you&apos;re working on and
            see whether I can help.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:sanjayso@asu.edu"
              className="group flex items-center gap-3 text-sm font-semibold text-[#52656a] transition hover:text-[#00899a]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-[#173138]/15 text-[#173138] transition group-hover:border-[#00899a] group-hover:text-[#00899a]">
                <Mail size={15} aria-hidden="true" />
              </span>
              sanjayso@asu.edu
            </a>

            <a
              href="tel:4803599244"
              className="group flex items-center gap-3 text-sm font-semibold text-[#52656a] transition hover:text-[#00899a]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-[#173138]/15 text-[#173138] transition group-hover:border-[#00899a] group-hover:text-[#00899a]">
                <Phone size={15} aria-hidden="true" />
              </span>
              480 359 9244
            </a>

            <span className="flex items-center gap-3 text-sm font-semibold text-[#52656a]">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded border border-[#173138]/15 text-[#173138]">
                <MapPin size={15} aria-hidden="true" />
              </span>
              Tempe, Arizona
            </span>
          </div>
        </div>

        {/* ── Right column — form ─────────────────────────────── */}
        <div>
          {contactStatus === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded border border-[#173138]/12 bg-[#fdfefd] py-16 text-center">
              <Sparkles className="text-[#00899a]" size={32} aria-hidden="true" />
              <p className="text-lg font-black text-[#173138]">Your note is on its way.</p>
              <p className="text-sm text-[#52656a]">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setContactStatus("idle")}
                className="mt-2 text-sm font-bold text-[#00899a] underline underline-offset-4"
              >
                Write another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Name
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm((c) => ({ ...c, name: e.target.value }))
                    }
                    className="field-input"
                  />
                </label>
                <label className="field-label">
                  Email
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm((c) => ({ ...c, email: e.target.value }))
                    }
                    className="field-input"
                  />
                </label>
              </div>

              {/* Message */}
              <label className="field-label">
                What&apos;s on your mind?
                <textarea
                  required
                  rows={7}
                  placeholder="Tell me a little about what you're working on..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((c) => ({ ...c, message: e.target.value }))
                  }
                  className="field-input resize-none"
                />
              </label>

              {/* Error */}
              {contactStatus === "error" && (
                <p className="text-sm font-semibold text-red-700">
                  That didn&apos;t go through. Please try again or email me directly at{" "}
                  <a href="mailto:sanjayso@asu.edu" className="underline">
                    sanjayso@asu.edu
                  </a>
                  .
                </p>
              )}

              {/* Submit */}
              <div className="flex items-center justify-between gap-4 border-t border-[#173138]/10 pt-5">
                <p className="text-xs text-[#7b8c90]">
                  I usually reply within a day or two.
                </p>
                <button
                  type="submit"
                  disabled={contactStatus === "loading"}
                  className="inline-flex shrink-0 items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
                >
                  {contactStatus === "loading" ? "Sending…" : "Send a note"}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
