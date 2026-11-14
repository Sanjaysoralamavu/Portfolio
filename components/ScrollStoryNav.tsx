"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chapters = [
  { id: "story", number: "01", label: "Approach" },
  { id: "projects", number: "02", label: "Work" },
  { id: "experience", number: "03", label: "Career" },
  { id: "skills", number: "04", label: "Toolkit" },
  { id: "education", number: "05", label: "Learning" },
  { id: "contact", number: "06", label: "Contact" },
] as const;

export default function ScrollStoryNav() {
  const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id);

  useEffect(() => {
    const sections = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveChapter(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Story chapters"
      className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ol className="flex flex-col items-end gap-2 rounded-full border border-white/15 bg-[#111413]/88 p-2 shadow-xl backdrop-blur-xl">
        {chapters.map((chapter) => {
          const isActive = activeChapter === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "location" : undefined}
                className="group relative flex h-9 items-center justify-end rounded-full px-3 font-mono text-[0.6rem] font-black uppercase tracking-[0.14em] text-white/55 transition hover:text-[#d7ff43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7ff43]"
              >
                <span className="mr-2 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100">
                  {chapter.label}
                </span>
                <span className="relative grid h-6 w-6 place-items-center">
                  {isActive && (
                    <motion.span
                      layoutId="active-story-chapter"
                      className="absolute inset-0 rounded-full bg-[#d7ff43]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={`relative ${isActive ? "text-[#111413]" : "text-white/55"}`}>
                    {chapter.number}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
