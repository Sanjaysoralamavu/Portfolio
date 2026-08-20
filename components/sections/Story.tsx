"use client";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">The thread through my work</p>
          <h2 className="mt-5 max-w-lg text-4xl font-black leading-tight text-[#173138] sm:text-5xl">
            Making complicated things feel clear.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-[#e57356] pl-6"
        >
          <p className="text-xl leading-9 text-[#52656a]">
            Whether I&apos;m working with a raw export, a reporting problem, or a
            room full of research, I start with one question: what would make
            this easier for people to understand and use?
          </p>

          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                label: "01 / Start with what's there",
                body: "Source data comes together from systems, spreadsheets, and everyday operational work.",
              },
              {
                label: "02 / Make it trustworthy",
                body: "The data is cleaned, validated, and structured so the process can be trusted again tomorrow.",
              },
              {
                label: "03 / Find the useful signal",
                body: "Datasets, reports, and dashboards bring the useful signal into focus.",
              },
              {
                label: "04 / Leave it usable",
                body: "Documentation and repeatable workflows help teams keep moving with confidence.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="border-t border-[#173138]/15 pt-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#52656a]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
