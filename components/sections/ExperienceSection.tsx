"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { roles } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const roleColors = [
  "bg-[#111413] text-[#f4f0e7]",
  "bg-[#f4f0e7] text-[#111413]",
  "bg-[#d7ff43] text-[#111413]",
] as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#8c98ff] text-[#111413]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 border-b border-[#111413]/25 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Career</p>
            <h2 className="font-display mt-5 text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Built in the
              <span className="block italic">real world.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#111413]/65">
            Research, enterprise analytics, and production data systems—each
            role added a different kind of rigor.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {roles.map((job, index) => {
            const dark = index === 0;
            return (
              <motion.article
                key={job.org}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={`${roleColors[index % roleColors.length]} relative grid min-h-[68vh] gap-10 overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16 lg:p-14`}
              >
                <span
                  className={`font-display pointer-events-none absolute -bottom-20 -right-2 text-[16rem] leading-none sm:text-[22rem] ${dark ? "text-white/[0.035]" : "text-[#111413]/[0.045]"}`}
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>

                <div className="relative z-10 lg:sticky lg:top-28 lg:h-fit">
                  <p className={`eyebrow ${dark ? "text-[#d7ff43]" : ""}`}>
                    {job.chapter}
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={`${BASE_PATH}${job.logo}`}
                        alt={job.org}
                        fill
                        sizes="64px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <p className="text-base font-black">{job.role}</p>
                      <p className={`mt-1 text-sm ${dark ? "text-white/55" : "text-[#111413]/60"}`}>
                        {job.org}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-7 space-y-2 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${dark ? "text-white/50" : "text-[#111413]/55"}`}>
                    <p>{job.period}</p>
                    <p className="flex items-center gap-2">
                      <MapPin size={13} aria-hidden="true" /> {job.location}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <p className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                      {job.lead}
                    </p>
                    <ul className={`mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 ${dark ? "text-white/65" : "text-[#111413]/65"}`}>
                      {job.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: bulletIndex * 0.06 }}
                          className="border-t border-current/20 pt-4 text-sm leading-7"
                        >
                          <span className="mr-2 font-mono text-[9px] font-black">
                            0{bulletIndex + 1}
                          </span>
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-current/20 pt-6">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.12em]">
                      {job.tags.length ? job.tags.join(" · ") : "Analytics · Automation · Reporting"}
                    </p>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
