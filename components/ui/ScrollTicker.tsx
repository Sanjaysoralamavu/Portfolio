"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollTicker({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-34%"]);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className={`overflow-hidden border-y py-6 sm:py-8 ${
        dark
          ? "border-white/15 bg-[#111413] text-white"
          : "border-[#111413] bg-[#d7ff43] text-[#111413]"
      }`}
    >
      <motion.p
        style={{ x: prefersReducedMotion ? "0%" : x }}
        className="font-display w-max whitespace-nowrap text-[clamp(3.2rem,8vw,7.5rem)] leading-none tracking-[-0.055em]"
      >
        {text} <span className="text-[#ff6b4a]">↗</span> {text}{" "}
        <span className={dark ? "text-[#8c98ff]" : "text-[#6a75ef]"}>{text}</span>
      </motion.p>
    </section>
  );
}
