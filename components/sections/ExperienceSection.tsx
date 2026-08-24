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
        <div className="mb-12">
          <SectionHeading
            eyebrow="Experience"
            title="Work Experience"
          />
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
              className="grid gap-10 border-t border-[#173138]/10 pt-10 first:border-t-0 first:pt-0 lg:grid-cols-[.75fr_1.25fr]"
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
