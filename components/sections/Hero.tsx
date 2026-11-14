"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Download, MapPin, MousePointer2 } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0.08, 0.78], [1, 0.18]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], [0, -72]);
  const portraitY = useTransform(scrollYProgress, [0, 0.75], [0, 72]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 54]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[150svh] border-b border-[#173138]/10 bg-[#eaf1ef]"
    >
      <div className="sticky top-[65px] flex min-h-[calc(100svh-65px)] items-center overflow-hidden">
        <div className="story-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-[#00899a]/15"
          aria-hidden="true"
        />
        <motion.div
          style={{ rotate: reduceMotion ? 0 : orbitRotate }}
          className="pointer-events-none absolute -right-24 top-1/2 hidden h-[29rem] w-[29rem] -translate-y-1/2 rounded-full border border-dashed border-[#e57356]/35 lg:block"
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-[-7px] h-3.5 w-3.5 rounded-full bg-[#e57356]" />
          <span className="absolute bottom-10 left-8 h-2.5 w-2.5 rounded-full bg-[#00899a]" />
        </motion.div>

        <motion.div
          style={{
            scale: reduceMotion ? 1 : heroScale,
            opacity: reduceMotion ? 1 : heroOpacity,
          }}
          className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20"
        >
          <motion.div
            style={{ y: reduceMotion ? 0 : copyY }}
            className="relative z-10 max-w-2xl"
          >
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Data analyst · Automation specialist
            </motion.p>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[0.03em] text-[#173138] sm:text-7xl lg:text-[5.6rem]"
            >
              Sanjay
              <br />
              <span className="text-[#00899a]">
                S Dev<span className="text-[#e57356]">.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={false}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-7 h-1 w-16 origin-left bg-[#e57356]"
            />

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-7 max-w-xl text-lg leading-8 text-[#52656a]"
            >
              I turn scattered data into resilient systems, clear dashboards,
              and automation that helps teams decide what to do next.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
              >
                Follow the story <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                href={`${BASE_PATH}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-[#173138]/25 bg-[#eaf1ef]/80 px-5 py-3 text-sm font-bold text-[#173138] transition hover:border-[#00899a] hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
              >
                Download resume <Download size={17} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#52656a]"
            >
              <span className="flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" /> Tempe, Arizona
              </span>
              <a href="mailto:sanjayso@asu.edu" className="hover:text-[#00899a]">
                sanjayso@asu.edu
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: reduceMotion ? 0 : portraitY }}
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="relative mx-auto hidden w-full max-w-md sm:block"
          >
            <div
              className="absolute -inset-5 rounded-full border border-[#e57356]/35"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-[#fdfefd] bg-[#173138] p-2 shadow-[16px_16px_0_#00899a]">
              <Image
                src={`${BASE_PATH}/profile-photo.png`}
                alt="Sanjay S Dev"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 430px"
                className="rounded-full object-cover object-center p-2"
              />
            </div>
            <div className="absolute -left-4 bottom-10 rounded border border-[#173138]/10 bg-[#fdfefd]/95 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#e57356]">
                Current focus
              </p>
              <p className="mt-1 text-sm font-bold text-[#173138]">
                Data systems that adapt
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#story"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#52656a]"
        >
          <MousePointer2 size={13} aria-hidden="true" /> Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
