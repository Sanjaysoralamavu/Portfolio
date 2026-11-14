"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Database,
  Download,
  Gauge,
  Linkedin,
  Mail,
  Phone,
  Workflow,
  X,
} from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const capabilities = [
  {
    label: "Messy inputs",
    detail: "Exports · streams",
    icon: Database,
  },
  {
    label: "Trusted systems",
    detail: "Models · automation",
    icon: Workflow,
  },
  {
    label: "Clear action",
    detail: "Tools · decisions",
    icon: Gauge,
  },
] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contactMenuRef = useRef<HTMLDivElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, -70]);
  const portraitY = useTransform(scrollYProgress, [0, 0.75], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.78], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.82], [1, 0.16]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 5]);

  useEffect(() => {
    if (!contactOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setContactOpen(false);
    }

    function closeOnOutsideClick(event: PointerEvent) {
      if (
        contactMenuRef.current &&
        !contactMenuRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [contactOpen]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[155svh] bg-[#111413] text-[#f4f0e7]"
    >
      <div className="sticky top-[65px] flex min-h-[calc(100svh-65px)] items-center overflow-hidden">
        <div className="story-grid absolute inset-0" aria-hidden="true" />
        <motion.div
          style={{
            scale: reduceMotion ? 1 : scale,
            opacity: reduceMotion ? 1 : opacity,
          }}
          className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16"
        >
          <motion.div
            style={{ y: reduceMotion ? 0 : contentY }}
            className="relative z-10 min-w-0"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
              <span className="rounded-full border border-white/20 px-3 py-2 text-[#d7ff43]">
                Sanjay S Dev
              </span>
              <span>Data · ML · Automation</span>
            </div>

            <h1 className="font-display mt-7 max-w-4xl text-[clamp(4.3rem,9.2vw,8.7rem)] font-normal leading-[0.78] tracking-[-0.065em]">
              I make data
              <span className="block italic text-[#d7ff43]">usable.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/68 sm:text-xl">
              I build data systems and machine-learning products that turn
              messy inputs into clear decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-between gap-5 rounded-full bg-[#d7ff43] px-5 py-3.5 text-sm font-bold text-[#111413] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View selected work
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a
                href={`${BASE_PATH}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-5 rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#8c98ff] hover:text-[#8c98ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Résumé <Download size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/15">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="relative min-w-0 border-r border-white/15 px-2 py-4 first:pl-0 last:border-r-0 sm:px-4 sm:py-5"
                  >
                    <div className="flex items-center gap-2 text-[#d7ff43]">
                      <Icon size={15} aria-hidden="true" />
                      <span className="font-mono text-[8px] font-black uppercase tracking-[0.1em] sm:text-[9px]">
                        {item.label}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[7px] uppercase leading-4 tracking-[0.08em] text-white/40 sm:text-[8px]">
                      {item.detail}
                    </p>
                    {index < capabilities.length - 1 && (
                      <ArrowUpRight
                        size={12}
                        className="absolute right-1 top-1 text-white/25"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            style={{
              y: reduceMotion ? 0 : portraitY,
              rotate: reduceMotion ? 0 : rotate,
            }}
            className="relative mx-auto hidden w-full max-w-[27rem] sm:block"
          >
            <div
              className="absolute -inset-5 translate-x-6 translate-y-6 rounded-[2.5rem] bg-[#8c98ff]"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#f4f0e7]">
              <Image
                src={`${BASE_PATH}/profile-photo.png`}
                alt="Sanjay S Dev"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 430px"
                className="object-cover object-center grayscale-[18%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111413] via-[#111413]/65 to-transparent p-6 pt-24">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d7ff43]">
                  Based in Tempe, Arizona
                </p>
                <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#d7ff43]/35 bg-[#d7ff43]/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#d7ff43]">
                  <span className="h-2 w-2 rounded-full bg-[#d7ff43]" />
                  Open to work
                </p>
              </div>
            </div>
            <div
              ref={contactMenuRef}
              className="absolute -bottom-5 -left-5 z-20"
            >
              <button
                type="button"
                aria-expanded={contactOpen}
                aria-controls="hero-contact-options"
                onClick={() => setContactOpen((open) => !open)}
                className="flex items-center gap-2 rounded-full bg-[#ff6b4a] px-5 py-3 text-sm font-black text-[#111413] shadow-xl transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Let&apos;s talk{" "}
                <ArrowUpRight
                  size={16}
                  className={`transition-transform ${contactOpen ? "rotate-90" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    id="hero-contact-options"
                    role="dialog"
                    aria-label="Contact options"
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-16 left-0 w-72 overflow-hidden rounded-[1.5rem] border border-[#111413]/10 bg-[#f4f0e7] p-3 text-[#111413] shadow-2xl"
                  >
                    <div className="flex items-center justify-between px-2 pb-2">
                      <p className="font-mono text-[9px] font-black uppercase tracking-[0.14em] text-[#5e6965]">
                        Choose a channel
                      </p>
                      <button
                        type="button"
                        onClick={() => setContactOpen(false)}
                        aria-label="Close contact options"
                        className="grid h-7 w-7 place-items-center rounded-full hover:bg-[#111413]/10"
                      >
                        <X size={14} aria-hidden="true" />
                      </button>
                    </div>

                    {[
                      {
                        href: "mailto:sanjayso@asu.edu",
                        label: "Email",
                        detail: "sanjayso@asu.edu",
                        icon: Mail,
                      },
                      {
                        href: "tel:4803599244",
                        label: "Phone",
                        detail: "480 359 9244",
                        icon: Phone,
                      },
                      {
                        href: "https://linkedin.com/in/sanjay-soralamavu-dev",
                        label: "LinkedIn",
                        detail: "View profile",
                        icon: Linkedin,
                        external: true,
                      },
                    ].map(({ href, label, detail, icon: Icon, external }) => (
                      <a
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        onClick={() => setContactOpen(false)}
                        className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-[#d7ff43]"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#111413] text-[#d7ff43]">
                          <Icon size={15} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-black">{label}</span>
                          <span className="mt-0.5 block text-xs text-[#5e6965] group-hover:text-[#111413]/65">
                            {detail}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="ml-auto opacity-45"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <a
          href="#story"
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/45"
        >
          Scroll to see the system
          <ArrowDownRight size={13} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
