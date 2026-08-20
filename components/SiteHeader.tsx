"use client";
import { useState } from "react";
import { AnimatePresence, motion, type MotionValue } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Mail, Menu, X } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const navItems = ["story", "experience", "skills", "education", "contact"] as const;

const socialLinks = [
  { href: "https://linkedin.com/in/sanjay-soralamavu-dev", label: "LinkedIn",  icon: Linkedin  },
  { href: "https://github.com/Sanjaysoralamavu",           label: "GitHub",    icon: Github    },
  { href: "https://www.instagram.com/sanjay_.dev/",        label: "Instagram", icon: Instagram },
  { href: "mailto:sanjayso@asu.edu",                       label: "Email",     icon: Mail      },
] as const;

export default function SiteHeader({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#00899a]"
        style={{ scaleX: progress }}
      />

      <header className="sticky top-0 z-40 border-b border-[#173138]/10 bg-[#fdfefd]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

          {/* ── Logo ──────────────────────────────────────────── */}
          <a
            href="#top"
            className="shrink-0 text-sm font-black tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
          >
            SSD
          </a>

          {/* ── Desktop nav ───────────────────────────────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.1em] text-[#52656a] lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* ── Right cluster ─────────────────────────────────── */}
          <div className="flex items-center gap-3">

            {/* Social icons — visible from md up */}
            <div className="hidden items-center gap-1 md:flex">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded text-[#52656a] transition hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00899a]"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden h-5 w-px bg-[#173138]/15 md:block" aria-hidden="true" />

            {/* Resume button */}
            <a
              href={`${BASE_PATH}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded bg-[#173138] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a] sm:inline-flex"
            >
              Resume <Download size={14} aria-hidden="true" />
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded border border-[#173138]/15 text-[#52656a] transition hover:border-[#00899a] hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a] lg:hidden"
            >
              {mobileOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden border-t border-[#173138]/10 bg-[#fdfefd] lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
                {/* Nav links */}
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#52656a] hover:text-[#00899a]"
                  >
                    {item}
                  </a>
                ))}

                {/* Social icons row */}
                <div className="mt-3 flex items-center gap-2 border-t border-[#173138]/10 pt-4">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      aria-label={label}
                      onClick={() => setMobileOpen(false)}
                      className="grid h-9 w-9 place-items-center rounded border border-[#173138]/15 text-[#52656a] transition hover:border-[#00899a] hover:text-[#00899a]"
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>

                {/* Resume button */}
                <a
                  href={`${BASE_PATH}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded bg-[#173138] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]"
                >
                  Download Resume <Download size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
