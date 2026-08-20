"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#173138] text-white"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a7d9d7]">
              A few things I&apos;ve made
            </p>
            <h2
              id="projects-heading"
              className="mt-5 text-2xl font-black leading-snug sm:text-3xl"
            >
              Ideas become more powerful when people can actually use them.
            </h2>
          </div>
          <p className="max-w-xl border-l border-[#e57356] pl-6 text-lg leading-8 text-white/75">
            These projects are where structured thinking meets clear
            communication. Each one begins with something complex and ends with
            something people can work with.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const isOpen = openSlug === project.slug;
            return (
              <button
                key={project.slug}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`project-${project.slug}`}
                onClick={() =>
                  setOpenSlug(isOpen ? null : project.slug)
                }
                className="group relative min-h-[350px] overflow-hidden border border-white/25 bg-white/[0.06] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#a7d9d7] hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-8"
              >
                <span
                  className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#00899a]/25 transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e57356]">
                        Project {project.number}
                      </p>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                        {project.org} · {project.teaser}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-[#a7d9d7] transition group-hover:bg-[#a7d9d7] group-hover:text-[#173138]">
                      <ArrowDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap items-center gap-3 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-white/65">
                      <span>{project.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[#e57356]" />
                      <span>{project.feedback}</span>
                    </div>
                    <p className="mt-5 text-sm font-bold text-[#a7d9d7]">
                      {isOpen ? "Close this story" : "See how the project came together"}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded case studies */}
        {projects.map((project) => (
          <AnimatePresence key={project.slug} initial={false}>
            {openSlug === project.slug && (
              <motion.article
                id={`project-${project.slug}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden pt-12"
                aria-labelledby={`${project.slug}-title`}
              >
                <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
                  {/* Left meta */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#e57356]">
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
                        <dd className="font-bold text-[#a7d9d7]">{project.rating}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Right body */}
                  <div className="border border-white/20 bg-white/[0.06] p-6 sm:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">
                      The starting point
                    </p>
                    <p className="mt-4 text-xl font-bold leading-8 text-white">
                      {project.lead}
                    </p>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e57356]">
                          How I approached it
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/70">{project.approach}</p>
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e57356]">
                          What I left behind
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/70">{project.deliverables}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="mt-10 grid gap-8 border-y border-white/20 py-10 lg:grid-cols-[.8fr_1.2fr]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">
                      Making the idea visible
                    </p>
                    <h4 className="mt-4 text-2xl font-black leading-8">
                      This is how I move from plain language to a visual people can think with.
                    </h4>
                  </div>
                  <ol className="grid gap-4 sm:grid-cols-2">
                    {project.process.map((step, i) => (
                      <li key={step.label} className="border-t border-white/20 pt-4">
                        <p className="text-xs font-black text-[#e57356]">
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
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">
                      Skills demonstrated
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
                  {project.certificate && (
                    <a
                      href={`${BASE_PATH}${project.certificate}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded bg-[#e57356] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#f18668] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      View certificate <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Quote */}
                {project.quote && (
                  <blockquote className="mt-10 border-l-2 border-[#a7d9d7] pl-6 text-lg leading-8 text-white/85">
                    {project.quote.text}
                    <footer className="mt-3 text-sm font-bold text-[#a7d9d7]">
                      {project.quote.author}
                    </footer>
                  </blockquote>
                )}
              </motion.article>
            )}
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
