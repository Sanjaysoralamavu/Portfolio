"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const projectColors = [
  "bg-[#d7ff43]",
  "bg-[#8c98ff]",
  "bg-[#f4f0e7]",
  "bg-[#ff6b4a]",
  "bg-[#a7ddd1]",
] as const;

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#111413] text-[#f4f0e7]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-[#d7ff43]">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="font-display mt-5 max-w-xl text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              Evidence,<br />
              not decoration.
            </h2>
          </div>
          <p className="max-w-xl border-l border-[#ff6b4a] pl-6 text-lg leading-8 text-white/65">
            Five projects. Each one shows the problem, the system, and the result.
            Open any card for the full case study.
          </p>
        </div>

        {/* Project cards become a stacked, scroll-led case-study deck. */}
        <div className="mt-12 space-y-8 pb-10">
          {projects.map((project, index) => {
            const isOpen = openSlug === project.slug;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                style={{ top: `calc(5.25rem + ${index * 10}px)`, zIndex: index + 1 }}
                className="relative bg-[#111413] lg:sticky"
              >
                <div
                  className={`group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 p-7 text-left text-[#111413] shadow-[0_-18px_55px_rgba(0,0,0,0.2)] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-10 lg:min-h-[390px] ${projectColors[index % projectColors.length]}`}
                >
                  <span
                    className="font-display pointer-events-none absolute -bottom-14 right-3 text-[12rem] leading-none text-[#111413]/[0.06] sm:text-[17rem]"
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>
                  <span
                    className="absolute right-0 top-0 h-28 w-28 translate-x-12 -translate-y-12 rounded-full bg-[#111413]/10 transition-transform duration-300 group-hover:translate-x-7 group-hover:-translate-y-7"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-[#111413]/60">
                          Project {project.number}
                        </p>
                        <h3 className="font-display mt-5 max-w-3xl text-4xl leading-[0.95] tracking-[-0.04em] text-[#111413] sm:text-5xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#111413]/65">
                          {project.org} · {project.teaser}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${project.title} project details`}
                        aria-expanded={isOpen}
                        aria-controls={`project-${project.slug}`}
                        onClick={() => setOpenSlug(isOpen ? null : project.slug)}
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#111413]/30 text-[#111413] transition hover:bg-[#111413] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111413]"
                      >
                        <ArrowDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <div className="mt-auto pt-8">
                      <div className="flex flex-wrap items-center gap-3 border-t border-[#111413]/20 pt-5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#111413]/60">
                        <span>{project.date}</span>
                        <span className="h-1 w-1 rounded-full bg-[#111413]" />
                        <span>{project.feedback}</span>
                      </div>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`project-${project.slug}`}
                          onClick={() => setOpenSlug(isOpen ? null : project.slug)}
                          className="text-sm font-bold text-[#111413] underline-offset-4 transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111413]"
                        >
                          {isOpen
                            ? "Close this story"
                            : "See how the project came together"}
                        </button>
                        {project.repository && (
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#111413]/75 underline-offset-4 transition hover:text-[#111413] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111413]"
                          >
                            <Github size={16} aria-hidden="true" /> GitHub repository
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.article
                      id={`project-${project.slug}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative z-20 overflow-hidden bg-[#111413] py-10"
                      aria-labelledby={`${project.slug}-title`}
                    >
                <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                  {/* Left meta */}
                  <div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#ff6b4a]">
                      Project {project.number} / {project.date}
                    </p>
                    <h3
                      id={`${project.slug}-title`}
                      className="mt-5 text-3xl font-black leading-tight sm:text-4xl"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-white/75">
                      {project.teaser}
                    </p>
                    <dl className="mt-8 divide-y divide-white/15 border-y border-white/15 text-sm">
                      <div className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-white/55">Collaborated with</dt>
                        <dd className="font-bold text-white">{project.collaboratedWith}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-white/55">Guided by</dt>
                        <dd className="font-bold text-white">{project.guidedBy}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-white/55">Result</dt>
                        <dd className="font-bold text-[#d7ff43]">{project.rating}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Right body */}
                  <div className="border border-white/20 bg-white/[0.06] p-6 sm:p-8">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#d7ff43]">
                      The starting point
                    </p>
                    <p className="mt-4 text-xl font-bold leading-8 text-white">
                      {project.lead}
                    </p>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-[#ff6b4a]">
                          How I approached it
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/70">{project.approach}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-[#ff6b4a]">
                          What I left behind
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/70">{project.deliverables}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evidence and project showcase */}
                {project.metrics && (
                  <dl className="mt-10 grid overflow-hidden border border-white/20 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-[#111413] p-5 sm:p-6"
                      >
                        <dt className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                          {metric.label}
                        </dt>
                        <dd className="font-display mt-3 text-4xl text-[#d7ff43]">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {project.showcase && (
                  <figure className="mt-10 overflow-hidden border border-white/20 bg-white/[0.06]">
                    <Image
                      src={`${BASE_PATH}${project.showcase.src}`}
                      alt={project.showcase.alt}
                      width={project.showcase.width}
                      height={project.showcase.height}
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="h-auto w-full bg-white"
                    />
                    <figcaption className="border-t border-white/20 px-5 py-4 text-sm leading-6 text-white/65">
                      {project.showcase.caption}
                    </figcaption>
                  </figure>
                )}

                {/* Process steps */}
                <div className="mt-10 grid gap-8 border-y border-white/20 py-10 lg:grid-cols-[.8fr_1.2fr]">
                  <div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#d7ff43]">
                      {project.processEyebrow ?? "Making the idea visible"}
                    </p>
                    <h4 className="mt-4 text-2xl font-black leading-8">
                      {project.processTitle ??
                        "This is how I move from plain language to a visual people can think with."}
                    </h4>
                  </div>
                  <ol className="grid gap-4 sm:grid-cols-2">
                    {project.process.map((step, i) => (
                      <li key={step.label} className="border-t border-white/20 pt-4">
                        <p className="font-mono text-[10px] font-black text-[#ff6b4a]">
                          {String(i + 1).padStart(2, "0")} / {step.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/75">{step.body}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Footer: skills + CTA */}
                <div className="mt-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-[#d7ff43]">
                      Tech stack &amp; skills
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-white/25 px-3 py-2 text-xs font-bold text-white/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7ff43] px-5 py-3 text-sm font-bold text-[#111413] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        <Github size={17} aria-hidden="true" /> View repository
                      </a>
                    )}
                    {project.certificate && (
                      <a
                        href={`${BASE_PATH}${project.certificate}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b4a] px-5 py-3 text-sm font-bold text-[#111413] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        View certificate <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Quote */}
                {project.quote && (
                  <blockquote className="mt-10 border-l-2 border-[#d7ff43] pl-6 text-lg leading-8 text-white/85">
                    {project.quote.text}
                    <footer className="mt-3 text-sm font-bold text-[#d7ff43]">
                      {project.quote.author}
                    </footer>
                  </blockquote>
                )}
                    </motion.article>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
