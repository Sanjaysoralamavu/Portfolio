"use client";

import { MotionConfig, useScroll, useSpring } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import ScrollStoryNav from "@/components/ScrollStoryNav";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ScrollTicker from "@/components/ui/ScrollTicker";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-clip">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded-full focus:bg-[#d7ff43] focus:px-4 focus:py-3 focus:text-[#111413]"
        >
          Skip to content
        </a>

        <SiteHeader progress={progress} />
        <ScrollStoryNav />

        <Hero />

        <section id="content">
          <Story />
          <ScrollTicker text="3.34M transactions · 250 tests · 0.953 adaptive F1 · +30% efficiency" />
          <Projects />
          <ExperienceSection />
          <Skills />
          <Education />
          <Contact />
        </section>

        <footer className="border-t border-white/10 bg-[#111413] text-[#f4f0e7]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em]">
              Sanjay S Dev · Built with intent
            </p>
            <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/sanjay-soralamavu-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/55 hover:text-[#d7ff43]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Sanjaysoralamavu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/55 hover:text-[#d7ff43]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/sanjay_.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/55 hover:text-[#d7ff43]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:sanjayso@asu.edu"
              aria-label="Email Sanjay"
              className="text-white/55 hover:text-[#d7ff43]"
            >
              <Mail size={20} />
            </a>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </main>
    </MotionConfig>
  );
}
