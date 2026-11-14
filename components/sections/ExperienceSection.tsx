"use client";

import Image from "next/image";
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
        <div className="mb-16 grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <SectionHeading eyebrow="Experience" title="Work, in chapters." />
          <p className="max-w-xl text-lg leading-8 text-[#52656a]">
            A progression from analysis to automation—always with the same goal:
            make the work more dependable and easier for people to use.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[1.1rem] top-0 hidden w-px bg-gradient-to-b from-[#00899a] via-[#e57356] to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="space-y-20 lg:space-y-0">
            {roles.map((job, index) => (
              <motion.article
                key={job.org}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative grid gap-10 border-t border-[#173138]/10 pt-10 first:border-t-0 first:pt-0 lg:min-h-[72vh] lg:grid-cols-[.75fr_1.25fr] lg:gap-16 lg:pl-16 lg:pt-20"
              >
                <span
                  className="absolute left-0 top-[5.25rem] hidden h-9 w-9 -translate-x-px place-items-center rounded-full border border-[#00899a]/30 bg-[#fdfefd] text-[10px] font-black text-[#00899a] lg:grid"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
                  <p className="eyebrow">{job.chapter}</p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded border border-[#173138]/12 bg-[#f4f6f5]">
                      <Image
                        src={`${BASE_PATH}${job.logo}`}
                        alt={job.org}
                        fill
                        sizes="56px"
                        className="object-contain p-1.5"
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

                <div className="lg:pt-2">
                  <motion.p
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="max-w-2xl text-2xl font-bold leading-9 text-[#173138] sm:text-3xl"
                  >
                    {job.lead}
                  </motion.p>
                  <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.65 }}
                        transition={{ duration: 0.45, delay: bulletIndex * 0.06 }}
                        className="flex gap-3 text-sm leading-7 text-[#52656a]"
                      >
                        <span
                          className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e57356]"
                          aria-hidden="true"
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                  {job.tags.length > 0 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.65 }}
                      className="mt-10 origin-left border-t border-[#173138]/10 pt-6 text-sm font-bold text-[#00899a]"
                    >
                      {job.tags.join(" · ")}
                    </motion.div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
