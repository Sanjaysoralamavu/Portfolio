"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, skillCategories, type SkillCategory } from "@/lib/data";

export default function Skills() {
  const [skillFilter, setSkillFilter] = useState<SkillCategory>("All");

  const filtered =
    skillFilter === "All"
      ? skills
      : skills.filter((s) => s.category === skillFilter);

  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
    >
      {/* Header row */}
      <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="What I reach for"
          title="A practical toolkit, built one problem at a time."
          copy="These are the tools I've used to turn a question into a working system, a clearer report, or an easier next step."
        />

        {/* Filter buttons */}
        <div
          className="flex max-w-xl flex-wrap gap-2"
          aria-label="Filter skills by category"
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSkillFilter(category)}
              aria-pressed={skillFilter === category}
              className={`rounded border px-3 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00899a] ${
                skillFilter === category
                  ? "border-[#00899a] bg-[#00899a] text-white"
                  : "border-[#173138]/15 bg-white text-[#52656a] hover:border-[#00899a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skill grid */}
      <motion.div
        layout
        className="grid gap-px overflow-hidden border border-[#173138]/15 bg-[#173138]/15 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filtered.map((skill) => (
          <motion.article
            layout
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-48 bg-[#f4f6f5] p-5 transition-colors hover:bg-[#e7f0ef]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#e57356]">
              {skill.category}
            </p>
            <h3 className="mt-7 text-xl font-black">{skill.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[#52656a]">
              {skill.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
