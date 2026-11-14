"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { education } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Education() {
  return (
    <section id="education" className="bg-[#a7ddd1] text-[#111413]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-8 border-b border-[#111413]/20 pb-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Education</p>
            <h2 className="font-display mt-5 text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl">
              Keep learning.
              <span className="block italic">Keep shipping.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#111413]/65">
            Computer science gives me the depth. Real projects make it useful.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex min-h-80 flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:p-9 ${
                index === 0
                  ? "bg-[#111413] text-[#f4f0e7]"
                  : "bg-[#f4f0e7] text-[#111413]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={`${BASE_PATH}${item.logo}`}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>

              <div className="relative z-10 mt-14">
                <p className={`font-mono text-[9px] font-black uppercase tracking-[0.14em] ${index === 0 ? "text-[#d7ff43]" : "text-[#6a75ef]"}`}>
                  {item.status} · {item.period}
                </p>
                <h3 className="font-display mt-4 text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl">
                  {item.degree}
                  <span className="block italic">{item.field}</span>
                </h3>
                <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-5 text-sm ${index === 0 ? "border-white/15 text-white/55" : "border-[#111413]/15 text-[#111413]/60"}`}>
                  <span>{item.name}</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
