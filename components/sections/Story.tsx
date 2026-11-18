"use client";

import { motion } from "framer-motion";
import { Braces, Gauge, ScanSearch } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Diagnose",
    title: "Find the decision hiding inside the data.",
    body: "I use Claude Code to trace unfamiliar systems, test assumptions, and find the decision before choosing a direction.",
    tool: "Claude Code",
    note: "Context → direction",
    icon: ScanSearch,
    color: "bg-[#d7ff43]",
  },
  {
    number: "02",
    label: "Engineer",
    title: "Make the answer repeatable and trustworthy.",
    body: "I use Codex to implement focused changes with clean models, validation, tests, and automation.",
    tool: "Codex",
    note: "Design → tested change",
    icon: Braces,
    color: "bg-[#8c98ff]",
  },
  {
    number: "03",
    label: "Deliver",
    title: "Prove it, then put it where people can act.",
    body: "I review the diff, run edge cases, document the result, and make the final engineering call.",
    tool: "Me + evidence",
    note: "Evidence → action",
    icon: Gauge,
    color: "bg-[#ff6b4a]",
  },
] as const;

export default function Story() {
  return (
    <section id="story" className="bg-[#f4f0e7] text-[#111413]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-8 border-b border-[#111413]/20 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">01 / How I work · AI in the loop</p>
            <h2 className="font-display mt-5 max-w-xl text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl">
              AI accelerates.
              <span className="block italic text-[#6a75ef]">I decide.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-lg text-lg leading-8 text-[#5e6965]">
              No data theatre. Claude Code and Codex move me faster through
              context and implementation; I review, test, and own the outcome.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
              <span className="h-3 w-3 rounded-full bg-[#111413]" />
              Explore → build → verify → deliver
            </div>
          </div>
        </div>

        <ol className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] md:grid md:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0.35, y: 48, rotate: index % 2 ? 1 : -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`${step.color} relative flex min-h-[22rem] w-[88%] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:w-auto sm:p-8`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs font-black tracking-[0.12em]">
                      {step.number} / {step.label}
                    </p>
                    <p className="mt-3 inline-flex rounded-full border border-[#111413]/25 px-3 py-1.5 font-mono text-[8px] font-black uppercase tracking-[0.12em]">
                      {step.tool}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#111413] text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="font-display max-w-2xl text-3xl leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                    {step.title}
                  </p>
                  <div className="mt-6 border-t border-[#111413]/25 pt-5">
                    <p className="max-w-lg text-base leading-7 text-[#111413]/70">
                      {step.body}
                    </p>
                    <p className="mt-4 font-mono text-[9px] font-black uppercase tracking-[0.14em]">
                      {step.note}
                    </p>
                  </div>
                </div>

                <span
                  className="font-display pointer-events-none absolute -bottom-14 -right-2 text-[11rem] leading-none text-[#111413]/[0.06]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </motion.li>
            );
          })}
        </ol>
        <p className="mt-4 font-mono text-[9px] font-black uppercase tracking-[0.14em] text-[#5e6965] md:hidden">
          Swipe to see the process →
        </p>
      </div>
    </section>
  );
}
