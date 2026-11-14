"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories, skills, type SkillCategory } from "@/lib/data";

const skillColors = [
  "bg-[#d7ff43]",
  "bg-[#8c98ff]",
  "bg-[#ff6b4a]",
  "bg-[#a7ddd1]",
] as const;

export default function Skills() {
  const [skillFilter, setSkillFilter] = useState<SkillCategory>("All");
  const filtered =
    skillFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === skillFilter);

  return (
    <section id="skills" className="bg-[#f4f0e7] text-[#111413]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="eyebrow">Toolkit</p>
            <h2 className="font-display mt-5 text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl">
              Tools follow
              <span className="block italic text-[#6a75ef]">the problem.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#5e6965]">
              I choose the smallest reliable stack that can move the work from
              raw input to a maintained result.
            </p>

            <div
              className="mt-9 flex max-w-md flex-wrap gap-2"
              aria-label="Filter skills by category"
            >
              {skillCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSkillFilter(category)}
                  aria-pressed={skillFilter === category}
                  className={`rounded-full border px-3.5 py-2 font-mono text-[9px] font-black uppercase tracking-[0.1em] transition ${
                    skillFilter === category
                      ? "border-[#111413] bg-[#111413] text-white"
                      : "border-[#111413]/20 hover:border-[#111413]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-3 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((skill, index) => (
                <motion.article
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.025 }}
                  className={`${skillColors[index % skillColors.length]} group relative min-h-52 overflow-hidden rounded-[1.5rem] p-6`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[9px] font-black uppercase tracking-[0.12em] text-[#111413]/55">
                      {skill.category}
                    </p>
                    <span className="font-mono text-[9px] font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-4xl leading-none tracking-[-0.035em]">
                    {skill.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#111413]/65">
                    {skill.desc}
                  </p>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-0 bg-[#111413] transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
