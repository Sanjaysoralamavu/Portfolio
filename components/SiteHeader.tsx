"use client";

import { useState } from "react";
import { AnimatePresence, motion, type MotionValue } from "framer-motion";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  { id: "projects", label: "Work" },
  { id: "experience", label: "Career" },
  { id: "skills", label: "Toolkit" },
  { id: "contact", label: "Contact" },
] as const;

const socialLinks = [
  {
    href: "https://linkedin.com/in/sanjay-soralamavu-dev",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://github.com/Sanjaysoralamavu",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.instagram.com/sanjay_.dev/",
    label: "Instagram",
    icon: Instagram,
  },
  { href: "mailto:sanjayso@asu.edu", label: "Email", icon: Mail },
] as const;

export default function SiteHeader({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#d7ff43]"
        style={{ scaleX: progress }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111413]/95 text-[#f4f0e7] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7ff43]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7ff43] font-mono text-xs font-black text-[#111413]">
              SD
            </span>
            <span className="hidden font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-white/70 sm:block">
              Data systems
              <br />
              made useful
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-white/65 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-[#d7ff43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7ff43]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-0.5 md:flex">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-[#d7ff43] focus-visible:outline-2 focus-visible:outline-[#d7ff43]"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href={`${BASE_PATH}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#d7ff43] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.1em] text-[#111413] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
            >
              Résumé <Download size={13} aria-hidden="true" />
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#d7ff43] hover:text-[#d7ff43] focus-visible:outline-2 focus-visible:outline-[#d7ff43] lg:hidden"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#111413] lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-xl font-semibold"
                  >
                    {item.label}
                    <span className="font-mono text-[10px] text-[#d7ff43]">
                      0{index + 1}
                    </span>
                  </a>
                ))}
                <div className="mt-5 flex items-center gap-2">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
