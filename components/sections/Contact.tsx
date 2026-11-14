"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
    <section id="contact" className="relative overflow-hidden bg-[#ff6b4a] text-[#111413]">
      <span
        className="font-display pointer-events-none absolute -bottom-32 -left-12 text-[24rem] leading-none text-[#111413]/[0.05]"
        aria-hidden="true"
      >
        ?
      </span>
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="eyebrow">Available for the right problem</p>
            <h2 className="font-display mt-5 text-7xl leading-[0.82] tracking-[-0.06em] sm:text-8xl lg:text-[7rem]">
              Let&apos;s make it
              <span className="block italic">useful.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#111413]/65">
              Tell me what is unclear, manual, or not working. We can start there.
            </p>

            <div className="mt-10 space-y-3">
              {[
                {
                  href: "mailto:sanjayso@asu.edu",
                  label: "sanjayso@asu.edu",
                  icon: Mail,
                },
                { href: "tel:4803599244", label: "480 359 9244", icon: Phone },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center justify-between border-b border-[#111413]/20 py-3 text-sm font-bold"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} /> {label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ))}
              <p className="flex items-center gap-3 py-3 text-sm font-bold">
                <MapPin size={16} /> Tempe, Arizona
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] bg-[#f4f0e7] p-6 shadow-[14px_14px_0_#111413] sm:p-9"
          >
            {contactStatus === "success" ? (
              <div className="flex min-h-[30rem] flex-col items-center justify-center gap-4 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#d7ff43]">
                  <Sparkles size={28} aria-hidden="true" />
                </span>
                <p className="font-display mt-3 text-4xl">Message sent.</p>
                <p className="text-sm text-[#5e6965]">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setContactStatus("idle")}
                  className="mt-3 rounded-full border border-[#111413] px-4 py-2 text-sm font-bold"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-[#111413]/15 pb-5">
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.14em]">
                    Start a conversation
                  </p>
                  <span className="h-3 w-3 rounded-full bg-[#d7ff43]" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-label">
                    Name
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(event) =>
                        setContactForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
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
                      onChange={(event) =>
                        setContactForm((current) => ({
                          ...current,
                          email: event.target.value,
                        }))
                      }
                      className="field-input"
                    />
                  </label>
                </div>

                <label className="field-label">
                  What needs to work better?
                  <textarea
                    required
                    rows={7}
                    placeholder="A short description is enough..."
                    value={contactForm.message}
                    onChange={(event) =>
                      setContactForm((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    className="field-input resize-none"
                  />
                </label>

                {contactStatus === "error" && (
                  <p className="text-sm font-semibold">
                    That did not go through. Try again or email me directly.
                  </p>
                )}

                <div className="flex flex-col gap-4 border-t border-[#111413]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#5e6965]">
                    Usually replies in 1–2 days
                  </p>
                  <button
                    type="submit"
                    disabled={contactStatus === "loading"}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111413] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6a75ef] disabled:opacity-55"
                  >
                    {contactStatus === "loading" ? "Sending…" : "Send message"}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
