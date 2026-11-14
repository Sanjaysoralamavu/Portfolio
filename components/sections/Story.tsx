"use client";

import { motion } from "framer-motion";
import { Braces, Gauge, ScanSearch } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Diagnose",
    title: "Find the decision hiding inside the data.",
    body: "I start with the user, the decision, and the failure mode—not the dashboard.",
    note: "Question → signal",
    icon: ScanSearch,
    color: "bg-[#d7ff43]",
  },
  {
    number: "02",
    label: "Engineer",
    title: "Make the answer repeatable and trustworthy.",
    body: "Clean models, validation, tests, and automation turn analysis into a system.",
    note: "Raw → reliable",
    icon: Braces,
    color: "bg-[#8c98ff]",
  },
  {
    number: "03",
    label: "Deliver",
    title: "Put the result where people can act on it.",
    body: "The output is clear, documented, and designed for the person using it next.",
    note: "Insight → action",
    icon: Gauge,
    color: "bg-[#ff6b4a]",
  },
] as const;

export default function Story() {
  return (
    <section id="story" className="bg-[#f4f0e7] text-[#111413]">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-20 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow">How I work</p>
          <h2 className="font-display mt-5 max-w-xl text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl lg:text-[6.4rem]">
            No data
            <span className="block italic text-[#6a75ef]">theatre.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#5e6965]">
            Every choice has to make the system clearer, more reliable, or more
            useful.
          </p>
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">
            <span className="h-3 w-3 rounded-full bg-[#111413]" />
            Raw → trusted → useful
          </div>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0.35, y: 48, rotate: index % 2 ? 1 : -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`${step.color} relative flex min-h-[54vh] flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:min-h-[64vh]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black tracking-[0.12em]">
                    {step.number} / {step.label}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#111413] text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="font-display max-w-2xl text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    {step.title}
                  </p>
                  <div className="mt-8 grid gap-5 border-t border-[#111413]/25 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
                    <p className="max-w-lg text-base leading-7 text-[#111413]/70">
                      {step.body}
                    </p>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.14em]">
                      {step.note}
                    </p>
                  </div>
                </div>

                <span
                  className="font-display pointer-events-none absolute -bottom-20 -right-3 text-[13rem] leading-none text-[#111413]/[0.06] sm:text-[18rem]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
