"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { roles } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-y border-[#173138]/10 bg-[#fdfefd]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Header */}
        <div className="mb-16 grid gap-10 border-b border-[#173138]/15 pb-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="The path so far"
            title="Work shaped by curiosity, clarity, and follow-through."
          />
          <div className="border-l-2 border-[#e57356] pl-6">
            <p className="max-w-2xl text-lg leading-8 text-[#52656a]">
              The journey began with research and motion data, grew through
              global enterprise reporting, and now sits at the intersection of
              university data, dashboards, and repeatable systems.
            </p>
            <div className="mt-7 grid gap-4 border-t border-[#173138]/15 pt-5 sm:grid-cols-3">
              {[
                { label: "Started with", value: "Research and discovery" },
                { label: "Learned in", value: "Enterprise analytics" },
                { label: "Building now", value: "Reliable university data systems" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00899a]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#173138]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Role cards */}
        <div className="space-y-24">
          {roles.map((job) => (
            <motion.article
              key={job.org}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="grid gap-10 border-t border-[#173138]/10 pt-8 lg:grid-cols-[.75fr_1.25fr]"
            >
              {/* Left — sticky label */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="eyebrow">{job.chapter}</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center overflow-hidden rounded border border-[#173138]/12 bg-[#f4f6f5]">
                    <img
                      src={`${BASE_PATH}${job.logo}`}
                      alt={job.org}
                      className="h-full w-full object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-black">{job.role}</p>
                    <p className="mt-1 text-sm font-semibold text-[#00899a]">
                      {job.org}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm font-bold text-[#52656a]">
                  {job.period}
                </p>
                <p className="mt-2 flex items-center gap-1 text-sm text-[#52656a]">
                  <MapPin size={14} aria-hidden="true" /> {job.location}
                </p>
              </div>

              {/* Right — content */}
              <div>
                <p className="max-w-2xl text-2xl font-bold leading-9 text-[#173138] sm:text-3xl">
                  {job.lead}
                </p>
                <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[#52656a]"
                    >
                      <span
                        className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e57356]"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                {job.tags.length > 0 && (
                  <div className="mt-10 border-t border-[#173138]/10 pt-6 text-sm font-bold text-[#00899a]">
                    {job.tags.join(" · ")}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
