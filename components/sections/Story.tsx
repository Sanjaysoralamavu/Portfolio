"use client";

import { motion } from "framer-motion";
import { Database, Search, ShieldCheck, Workflow } from "lucide-react";

const steps = [
  {
    number: "01",
    kicker: "Gather",
    title: "Start with what is actually there.",
    body: "Source data rarely arrives cleanly. I bring together systems, spreadsheets, and operational context before deciding what the solution should be.",
    icon: Database,
  },
  {
    number: "02",
    kicker: "Trust",
    title: "Make the foundation reliable.",
    body: "Cleaning, validation, and thoughtful structure turn a one-off answer into a process people can trust again tomorrow.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    kicker: "Signal",
    title: "Bring the useful pattern forward.",
    body: "Analysis, models, and visual storytelling separate the important signal from the noise so a decision feels obvious, not overwhelming.",
    icon: Search,
  },
  {
    number: "04",
    kicker: "Handoff",
    title: "Leave the work usable.",
    body: "Automation, documentation, and clear ownership help the system continue delivering value after the first presentation is over.",
    icon: Workflow,
  },
] as const;

export default function Story() {
  return (
    <section id="story" className="relative bg-[#f4f6f5]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow">The thread through my work</p>
          <h2 className="mt-5 max-w-lg text-4xl font-black leading-[1.04] text-[#173138] sm:text-5xl lg:text-6xl">
            Complexity in.
            <span className="block text-[#00899a]">Clarity out.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#52656a]">
            Every project follows the same human-centered rhythm. Scroll through
            the four moves that turn ambiguity into something useful.
          </p>
          <div className="mt-10 hidden items-center gap-3 lg:flex" aria-hidden="true">
            <span className="h-px w-12 bg-[#e57356]" />
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#7b8c90]">
              Four moves
            </span>
          </div>
        </div>

        <ol className="relative border-l border-[#173138]/15 pl-6 sm:pl-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0.25, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.55 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex min-h-[52vh] items-center border-b border-[#173138]/10 py-14 last:border-b-0 lg:min-h-[64vh]"
              >
                <span
                  className="absolute -left-[2.05rem] grid h-7 w-7 place-items-center rounded-full border border-[#00899a]/30 bg-[#f4f6f5] text-[10px] font-black text-[#00899a] sm:-left-[3.15rem]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded bg-[#173138] text-[#a7d9d7]">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e57356]">
                      {step.kicker}
                    </p>
                  </div>
                  <h3 className="mt-7 max-w-xl text-3xl font-black leading-tight text-[#173138] sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-[#52656a]">
                    {step.body}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ amount: 0.7 }}
                    transition={{ duration: 0.7 }}
                    className="mt-8 h-1 w-24 origin-left bg-[#00899a]"
                  />
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
