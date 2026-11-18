"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { roles } from "@/lib/data";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const roleAccents = [
  { value: "text-[#5963d9]", line: "border-[#5963d9]" },
  { value: "text-[#d84f35]", line: "border-[#d84f35]" },
  { value: "text-[#111413]", line: "border-[#111413]" },
] as const;

function ScrollLogo({
  logo,
  href,
  label,
}: {
  logo: string;
  href: string;
  label: string;
}) {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"],
  });
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.78, 1, 0.78],
  );
  const smoothLogoScale = useSpring(logoScale, {
    stiffness: 180,
    damping: 26,
    mass: 0.25,
  });

  return (
    <motion.a
      ref={logoRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${label} website`}
      data-experience-logo
      style={{ scale: smoothLogoScale }}
      className="group relative block h-32 w-full max-w-72 origin-center overflow-hidden rounded-[1.4rem] border border-[#111413]/15 bg-white/90 shadow-[0_18px_50px_rgba(17,20,19,0.10)] transition-[border-color,box-shadow] hover:border-[#111413]/45 hover:shadow-[0_22px_55px_rgba(17,20,19,0.16)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#5963d9] will-change-transform"
    >
      <Image
        src={`${BASE_PATH}${logo}`}
        alt=""
        fill
        sizes="288px"
        className="object-contain p-5"
      />
      <span className="absolute right-3 top-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full bg-[#111413] text-[#f4f0e7] opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        <ArrowUpRight size={14} aria-hidden="true" />
      </span>
    </motion.a>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#e2dfd6] text-[#111413]"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 pb-12 lg:grid-cols-[1fr_.78fr] lg:items-end lg:pb-14">
          <div>
            <p className="eyebrow">03 / Where I&apos;ve worked</p>
            <h2
              id="experience-heading"
              className="font-display mt-5 text-6xl leading-[0.86] tracking-[-0.055em] sm:text-7xl lg:text-8xl"
            >
              Experience<span className="text-[#5963d9]">.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-[#4d5652] lg:justify-self-end">
            Building dependable data systems, improving reporting workflows,
            and helping teams move from raw information to clear decisions.
          </p>
        </div>

        <div className="border-t border-[#111413]/20">
          {roles.map((job, index) => {
            const accent = roleAccents[index % roleAccents.length];

            return (
              <motion.article
                key={job.org}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 border-b border-[#111413]/20 py-10 sm:py-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12 lg:py-14"
              >
                <div>
                  <ScrollLogo
                    logo={job.logo}
                    href={job.website}
                    label={job.org}
                  />
                  <div className="mt-6 border-t border-[#111413]/15 pt-5">
                    <p className="text-sm font-black">{job.period}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-[#4d5652]/75">
                      <MapPin size={13} aria-hidden="true" /> {job.location}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                        {job.role}
                      </h3>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <p className="text-base font-black">{job.org}</p>
                        {index === 0 && (
                          <span className="rounded-full bg-[#111413] px-2.5 py-1 font-mono text-[8px] font-black uppercase tracking-[0.12em] text-[#f4f0e7]">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      className="font-mono text-sm font-black text-[#111413]/35"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7 grid gap-8 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-12">
                    <div>
                      <p className="max-w-3xl text-base leading-8 text-[#4d5652]">
                        {job.summary}
                      </p>

                      <ul
                        className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#111413]/15 pt-5"
                        aria-label={`${job.role} technologies and focus`}
                      >
                        {job.tags.map((tag) => (
                          <li
                            key={tag}
                            className="flex items-center gap-2 font-mono text-[8px] font-black uppercase tracking-[0.11em]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#111413]/45" />
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <dl
                      className={`${accent.line} border-t pt-5 xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0`}
                    >
                      <dt className="font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#4d5652]/70">
                        What changed
                      </dt>
                      <dd
                        className={`${accent.value} font-display mt-3 text-3xl leading-[0.95] tracking-[-0.035em]`}
                      >
                        {job.impact.value}
                      </dd>
                      <dd className="mt-3 text-sm leading-6 text-[#4d5652]/75">
                        {job.impact.label}
                      </dd>
                    </dl>
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
