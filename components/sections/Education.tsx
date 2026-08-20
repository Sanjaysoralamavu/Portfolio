"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { education } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-[#173138]/10 bg-[#e7f0ef]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

        {/* ── Header row ─────────────────────────────────────── */}
        <div className="grid gap-8 border-b border-[#173138]/12 pb-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Still learning</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#173138] sm:text-4xl">
              The work keeps teaching me,<br className="hidden sm:block" /> and so does the classroom.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#52656a] lg:max-w-lg lg:pb-1">
            I&apos;m continuing to build depth in computer science while carrying
            the practical questions from my day-to-day data work back into my studies.
          </p>
        </div>

        {/* ── Education cards ────────────────────────────────── */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {education.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-6 border border-[#173138]/12 bg-[#fdfefd] p-6 sm:p-8"
            >
              {/* Top: logo + status + school */}
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded border border-[#173138]/10 bg-white">
                  <img
                    src={`${BASE_PATH}${item.logo}`}
                    alt={item.name}
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#e57356]">
                    {item.status}
                  </p>
                  <h3 className="mt-1 text-base font-black leading-snug text-[#173138]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#00899a]">
                    {item.degree} · {item.field}
                  </p>
                </div>
              </div>

              {/* Bottom: period + location */}
              <div className="flex items-center justify-between border-t border-[#173138]/10 pt-5 text-sm text-[#52656a]">
                <span className="font-semibold">{item.period}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} aria-hidden="true" />
                  {item.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
