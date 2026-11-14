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
      className={`overflow-hidden border-y py-7 sm:py-10 ${
        dark
          ? "border-white/15 bg-[#173138] text-white"
          : "border-[#173138]/10 bg-[#e7f0ef] text-[#173138]"
      }`}
    >
      <motion.p
        style={{ x: prefersReducedMotion ? "0%" : x }}
        className="w-max whitespace-nowrap text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-none tracking-[-0.06em]"
      >
        {text} <span className="text-[#e57356]">↗</span> {text} {" "}
        <span className={dark ? "text-[#a7d9d7]" : "text-[#00899a]"}>{text}</span>
      </motion.p>
    </section>
  );
}
