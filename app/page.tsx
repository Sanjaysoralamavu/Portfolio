"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.25]);

  return (
    <main className="min-h-screen">
      {/* Skip to content */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded focus:bg-[#173138] focus:px-4 focus:py-3 focus:text-white dark:focus:bg-[#00899a]"
      >
        Skip to content
      </a>

      <SiteHeader progress={progress} />

      <Hero heroScale={heroScale} heroOpacity={heroOpacity} />

      <section id="content">
        <Story />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </section>

      <footer className="border-t border-[#173138]/10 bg-[#fdfefd]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-sm font-bold">Sanjay S Dev</p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/sanjay-soralamavu-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#52656a] hover:text-[#00899a]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Sanjaysoralamavu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#52656a] hover:text-[#00899a]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/sanjay_.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#52656a] hover:text-[#00899a]"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:sanjayso@asu.edu"
              aria-label="Email Sanjay"
              className="text-[#52656a] hover:text-[#00899a]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </main>
  );
}
