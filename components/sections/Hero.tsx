"use client";
import { motion, type MotionValue } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero({
  heroScale,
  heroOpacity,
}: {
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#173138]/10 bg-[#eaf1ef]"
    >
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20"
      >
        {/* Left column */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Data analyst and automation specialist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 font-black leading-[0.92] tracking-[0.04em] text-[#173138] text-5xl sm:text-7xl uppercase"
          >
            Sanjay
            <br />
            <span className="text-[#00899a]">S Dev<span className="text-[#e57356]">.</span></span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 h-1 w-16 origin-left bg-[#e57356]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#52656a]"
          >
            I build resilient data systems, executive dashboards, and automation
            workflows that help teams make faster, clearer decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
            >
              View my work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              href={`${BASE_PATH}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-[#173138]/25 bg-transparent px-5 py-3 text-sm font-bold text-[#173138] transition hover:border-[#00899a] hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
            >
              Download resume <Download size={17} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.46 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#52656a]"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> Tempe, Arizona
            </span>
            <a href="mailto:sanjayso@asu.edu" className="hover:text-[#00899a]">
              sanjayso@asu.edu
            </a>
            <a href="tel:4803599244" className="hover:text-[#00899a]">
              4803599244
            </a>
          </motion.div>
        </div>

        {/* Right column — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="absolute -inset-5 rounded-full border border-[#e57356]/35"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-[#fdfefd] bg-[#173138] p-2 shadow-[16px_16px_0_#00899a]">
            <img
              src={`${BASE_PATH}/profile-photo.png`}
              alt="Sanjay S Dev"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#52656a]">
            <MapPin size={16} aria-hidden="true" /> Tempe, Arizona
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
