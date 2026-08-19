"use client";

import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const roles = [
  {
    org: "Social Embeddedness, Arizona State University",
    role: "Data Input Specialist",
    period: "May 2026 - Present",
    location: "Tempe, Arizona",
    logo: "/ASU logo.png",
    chapter: "01 / Current focus",
    lead: "Turning Collaboratory exports into dependable reporting systems.",
    bullets: [
      "Built and maintained a Python ETL pipeline to transform raw Collaboratory exports into Tableau-ready clean tables, bridge tables, validation reports, and archived refreshes",
      "Modeled activity, organization, profile, unit, and course data into relational datasets for Social Embeddedness reporting, interactive dashboards, and visualizations",
      "Created Tableau dashboards and data model guidance to support stakeholder reporting, program analysis, and repeatable refresh workflows",
      "Supported Collaboratory data collection, maintenance, and training by documenting data definitions, quality checks, and reporting processes",
    ],
  },
  {
    org: "Hitachi Digital Services",
    role: "Data Analyst Associate",
    period: "Aug 2022 - Aug 2025",
    location: "Bengaluru, India",
    logo: "/Hitachi-Logo.png",
    chapter: "02 / Enterprise analytics",
    lead: "Bringing operational data into sharper focus for global teams.",
    bullets: [
      "Designed and maintained enterprise Power BI dashboards for QEI and audit KPIs, raising process efficiency by 30%",
      "Prepared, cleansed, and analyzed large datasets using Python, SQL, and Excel to track compliance and operational health",
      "Built advanced Excel solutions with PivotTables, Power Query, and data validation for repeatable reporting",
      "Executed regression and trend analysis on global quality audit data, reducing non-compliance prediction errors by 20%",
      "Automated recurring reporting and e-mail distribution using Power Automate across stakeholders",
      "Translated audit requirements into dashboard specs, monthly leadership reports, and actionable insights",
    ],
  },
  {
    org: "Indian Institute of Science",
    role: "Data Science Intern",
    period: "Jan 2022 - Jul 2022",
    location: "Bengaluru, India",
    logo: "/IISC logo.svg",
    chapter: "03 / Research foundations",
    lead: "Learning how well-prepared data becomes useful discovery.",
    bullets: [
      "Developed a ball tracking application leveraging smartphone video capture and annotated data pipelines for model training",
      "Created interactive visualizations in Python (Matplotlib & Seaborn) to explore trajectory performance metrics",
      "Managed data preprocessing, cleaning, and validation for higher model reliability and consistency",
      "Conducted EDA to reveal patterns in motion datasets and support model improvements",
      "Delivered documented methodology, outcomes, and recommendations to research stakeholders",
    ],
  },
];

const skills = [
  { name: "Python", category: "Programming", desc: "Built ETL pipelines, data validation scripts, and automation workflows" }, { name: "SQL", category: "Programming", desc: "Wrote complex queries for data modeling, analytics, and reporting" }, { name: "Java", category: "Programming", desc: "Developed backend and data processing applications" }, { name: "JavaScript", category: "Programming", desc: "Built web features and interactive dashboards" }, { name: "Tableau", category: "Visualization", desc: "Created automated dashboards for self-service analytics" }, { name: "Power BI", category: "Visualization", desc: "Built healthcare and financial analytics dashboards" }, { name: "Looker Studio", category: "Visualization", desc: "Delivered business dashboards using BigQuery data models" }, { name: "Airflow", category: "Data Engineering", desc: "Orchestrated scheduled ETL pipelines across cloud systems" }, { name: "PySpark", category: "Data Engineering", desc: "Processed large-scale datasets using distributed computing" }, { name: "ETL", category: "Data Engineering", desc: "Designed and maintained enterprise data pipelines" }, { name: "Snowflake", category: "Database", desc: "Stored and queried large analytical datasets at scale" }, { name: "PostgreSQL", category: "Database", desc: "Structured data storage and complex relational queries" }, { name: "Azure", category: "Cloud & DevOps", desc: "Deployed data pipelines and services on Azure Data Factory" }, { name: "Git", category: "Cloud & DevOps", desc: "Version control and collaboration on data engineering projects" }, { name: "Power Automate", category: "Data Engineering", desc: "Automated reporting workflows and stakeholder notifications" }, { name: "Excel", category: "Visualization", desc: "Built PivotTable reports and Power Query data models" },
];

const education = [
  { logo: "/ASU logo.png", name: "Arizona State University", degree: "Master of Science", field: "Computer Science", location: "Tempe, Arizona", period: "Aug 2025 - May 2027", status: "In Progress" },
  { logo: "/Dr AIT logo.jpeg", name: "Dr. Ambedkar Institute Of Technology", degree: "Bachelor of Engineering", field: "Computer Science", location: "Bengaluru, India", period: "Aug 2018 - Aug 2022", status: "Graduated" },
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{copy && <p className="mt-5 text-base leading-7 text-[#52656a]">{copy}</p>}</div>;
}

export default function Home() {
  const [skillFilter, setSkillFilter] = useState("All");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.25]);

  async function handleContactSubmit(event: React.FormEvent) {
    event.preventDefault();
    setContactStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: "0c3ff25b-bd2a-4a6f-9d46-dfbef0a6969c", ...contactForm }) });
      if (!response.ok) throw new Error("Submission failed");
      setContactStatus("success");
      setContactForm({ name: "", email: "", message: "" });
    } catch { setContactStatus("error"); }
  }

  return <main className="min-h-screen bg-[#f4f6f5] text-[#173138]">
    <motion.div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-[#00899a]" style={{ scaleX: progress }} />
    <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded focus:bg-[#173138] focus:px-4 focus:py-3 focus:text-white">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-[#173138]/10 bg-[#fdfefd]/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"><a href="#top" className="text-sm font-black tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">SSD</a><nav aria-label="Main navigation" className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.1em] text-[#52656a] lg:flex">{["story", "experience", "skills", "education", "contact"].map((item) => <a key={item} href={`#${item}`} className="hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">{item}</a>)}</nav><a href={`${BASE_PATH}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded bg-[#173138] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">Resume <Download size={14} aria-hidden="true" /></a></div></header>

    <section id="top" className="relative overflow-hidden border-b border-[#173138]/10 bg-[#eaf1ef]"><motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="relative mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-20"><div className="max-w-2xl"><motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow">Data analyst and automation specialist</motion.p><motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mt-5 text-5xl font-black leading-[0.94] tracking-tight text-[#173138] sm:text-7xl">Sanjay<br /><span className="text-[#00899a]">S Dev.</span></motion.h1><motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.65, delay: 0.18 }} className="mt-7 h-1 w-16 origin-left bg-[#e57356]" /><motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="mt-7 max-w-xl text-lg leading-8 text-[#52656a]">I build resilient data systems, executive dashboards, and automation workflows that help teams make faster, clearer decisions.</motion.p><motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }} className="mt-10 flex flex-wrap gap-3"><a href="#experience" className="inline-flex items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">View my work <ArrowDown size={17} aria-hidden="true" /></a><a href={`${BASE_PATH}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded border border-[#173138]/25 bg-transparent px-5 py-3 text-sm font-bold text-[#173138] transition hover:border-[#00899a] hover:text-[#00899a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">Download resume <Download size={17} aria-hidden="true" /></a></motion.div><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.46 }} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#52656a]"><span className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> Tempe, Arizona</span><a href="mailto:sanjayso@asu.edu" className="hover:text-[#00899a]">sanjayso@asu.edu</a><a href="tel:4803599244" className="hover:text-[#00899a]">4803599244</a></motion.div></div><motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.16 }} className="relative mx-auto w-full max-w-md"><div className="absolute -inset-5 rounded-full border border-[#e57356]/35" aria-hidden="true" /><div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-[#fdfefd] bg-[#173138] p-2 shadow-[16px_16px_0_#00899a]"><img src={`${BASE_PATH}/profile-photo.png`} alt="Sanjay S Dev" className="h-full w-full rounded-full object-cover object-center" /></div><p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-[#52656a]"><MapPin size={16} aria-hidden="true" /> Tempe, Arizona</p></motion.div></motion.div></section>

    <section id="content"><section id="story" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading eyebrow="The throughline" title="From raw information to useful action." />
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="border-l-2 border-[#e57356] pl-6">
          <p className="text-xl leading-9 text-[#52656a]">I build dependable data workflows that move information from raw inputs to clear, useful decisions.</p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">01 / Collect</p><p className="mt-2 text-sm leading-6 text-[#52656a]">Bring together raw data from business systems, spreadsheets, and other operational sources.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">02 / Transform</p><p className="mt-2 text-sm leading-6 text-[#52656a]">Clean, validate, and structure information with repeatable data processes and automation.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">03 / Analyze</p><p className="mt-2 text-sm leading-6 text-[#52656a]">Build reliable datasets that support analysis, reporting, dashboards, and visualizations.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">04 / Enable</p><p className="mt-2 text-sm leading-6 text-[#52656a]">Create clear documentation and workflows that help teams use data confidently and consistently.</p></li>
          </ol>
        </motion.div>
      </div>
    </section>

    <section id="experience" className="border-y border-[#173138]/10 bg-[#fdfefd]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="mb-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Experience" title="A career in chapters." /><p className="self-end text-base leading-7 text-[#52656a]">Scroll through the work behind the data, from research foundations to enterprise analytics and current work at Arizona State University.</p></div><div className="space-y-24">{roles.map((job, index) => <motion.article key={job.org} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="grid gap-10 border-t border-[#173138]/10 pt-8 lg:grid-cols-[.75fr_1.25fr]"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">{job.chapter}</p><div className="mt-5 flex items-center gap-4"><div className="grid h-14 w-14 place-items-center overflow-hidden rounded border border-[#173138]/12 bg-[#f4f6f5]"><img src={`${BASE_PATH}${job.logo}`} alt={job.org} className="h-full w-full object-contain p-1.5" /></div><div><p className="text-sm font-black">{job.role}</p><p className="mt-1 text-sm font-semibold text-[#00899a]">{job.org}</p></div></div><p className="mt-5 text-sm font-bold text-[#52656a]">{job.period}</p><p className="mt-2 flex items-center gap-1 text-sm text-[#52656a]"><MapPin size={14} aria-hidden="true" /> {job.location}</p></div><div><p className="max-w-2xl text-2xl font-bold leading-9 text-[#173138] sm:text-3xl">{job.lead}</p><ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">{job.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-7 text-[#52656a]"><span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e57356]" aria-hidden="true" />{bullet}</li>)}</ul>{index === 0 && <div className="mt-10 border-t border-[#173138]/10 pt-6 text-sm font-bold text-[#00899a]">Python ETL · Tableau · Data modeling · Documentation</div>}</div></motion.article>)}</div></div></section>

    <section id="projects" className="bg-[#173138] text-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#a7d9d7]">Projects</p><div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end"><h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">Projects section coming soon...</h2><p className="border-l border-white/25 pl-6 text-lg leading-8 text-white/70">A dedicated place for deeper case studies and work samples.</p></div></div></section>

    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Skills" title="Tools for dependable data work." /><div className="flex max-w-xl flex-wrap gap-2" aria-label="Filter skills by category">{["All", "Programming", "Visualization", "Data Engineering", "Database", "Cloud & DevOps"].map((category) => <button key={category} type="button" onClick={() => setSkillFilter(category)} aria-pressed={skillFilter === category} className={`rounded border px-3 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00899a] ${skillFilter === category ? "border-[#00899a] bg-[#00899a] text-white" : "border-[#173138]/15 bg-white text-[#52656a] hover:border-[#00899a]"}`}>{category}</button>)}</div></div><motion.div layout className="grid gap-px overflow-hidden border border-[#173138]/15 bg-[#173138]/15 sm:grid-cols-2 lg:grid-cols-4">{skills.filter((skill) => skillFilter === "All" || skill.category === skillFilter).map((skill) => <motion.article layout key={skill.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-48 bg-[#f4f6f5] p-5 transition-colors hover:bg-[#e7f0ef]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-[#e57356]">{skill.category}</p><h3 className="mt-7 text-xl font-black">{skill.name}</h3><p className="mt-3 text-sm leading-6 text-[#52656a]">{skill.desc}</p></motion.article>)}</motion.div></section>

    <section id="education" className="border-y border-[#173138]/10 bg-[#e7f0ef]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><SectionHeading eyebrow="Education" title="Learning in parallel with practice." /><div className="mt-12 grid gap-5 lg:grid-cols-2">{education.map((item) => <motion.article key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#173138]/15 bg-[#fdfefd] p-6"><div className="flex items-start gap-4"><div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded border border-[#173138]/10 bg-white"><img src={`${BASE_PATH}${item.logo}`} alt={item.name} className="h-full w-full object-contain p-1.5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#e57356]">{item.status}</p><h3 className="mt-2 text-lg font-black">{item.name}</h3><p className="mt-1 text-sm font-semibold text-[#00899a]">{item.degree} - {item.field}</p><p className="mt-3 text-sm text-[#52656a]">{item.period}</p><p className="mt-1 flex items-center gap-1 text-sm text-[#52656a]"><MapPin size={14} aria-hidden="true" /> {item.location}</p></div></div></motion.article>)}</div></div></section>

    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Contact" title="Let&apos;s connect." copy="Have a question, opportunity, or just want to say hi? Drop a message below." /><div className="mt-8 space-y-4 text-sm font-semibold text-[#52656a]"><a href="mailto:sanjayso@asu.edu" className="flex items-center gap-3 hover:text-[#00899a]"><Mail size={18} aria-hidden="true" /> sanjayso@asu.edu</a><a href="tel:4803599244" className="flex items-center gap-3 hover:text-[#00899a]"><Phone size={18} aria-hidden="true" /> 4803599244</a><span className="flex items-center gap-3"><MapPin size={18} aria-hidden="true" /> Tempe, Arizona</span></div></div><div className="border border-[#173138]/15 bg-[#fdfefd] p-6 sm:p-8">{contactStatus === "success" ? <div className="py-12 text-center"><Sparkles className="mx-auto text-[#00899a]" size={34} aria-hidden="true" /><p className="mt-4 text-xl font-black">Message sent!</p><p className="mt-2 text-sm text-[#52656a]">I&apos;ll get back to you soon.</p><button type="button" onClick={() => setContactStatus("idle")} className="mt-6 text-sm font-bold text-[#00899a] underline underline-offset-4">Send another</button></div> : <form onSubmit={handleContactSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Name<input type="text" required placeholder="Sanjay S Dev" value={contactForm.name} onChange={(event) => setContactForm((current) => ({ ...current, name: event.target.value }))} className="field-input" /></label><label className="field-label">Email<input type="email" required placeholder="hello@example.com" value={contactForm.email} onChange={(event) => setContactForm((current) => ({ ...current, email: event.target.value }))} className="field-input" /></label></div><label className="field-label">Message<textarea required rows={6} placeholder="Tell me about your project or opportunity..." value={contactForm.message} onChange={(event) => setContactForm((current) => ({ ...current, message: event.target.value }))} className="field-input resize-y" /></label>{contactStatus === "error" && <p className="text-sm font-semibold text-red-700">Something went wrong. Please try again or email me directly at sanjayso@asu.edu.</p>}<button type="submit" disabled={contactStatus === "loading"} className="inline-flex items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">{contactStatus === "loading" ? "Sending..." : "Send message"}<ArrowUpRight size={17} aria-hidden="true" /></button></form>}</div></div></section>

    </section>
    <footer className="border-t border-[#173138]/10 bg-[#fdfefd]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p className="text-sm font-bold">Sanjay S Dev</p><div className="flex items-center gap-5"><a href="https://linkedin.com/in/sanjay-soralamavu-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#52656a] hover:text-[#00899a]"><Linkedin size={20} /></a><a href="https://github.com/Sanjaysoralamavu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#52656a] hover:text-[#00899a]"><Github size={20} /></a><a href="https://instagram.com/sanjay-soralamavu-dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#52656a] hover:text-[#00899a]"><Instagram size={20} /></a><a href="mailto:sanjayso@asu.edu" aria-label="Email Sanjay" className="text-[#52656a] hover:text-[#00899a]"><Mail size={20} /></a></div></div></footer>
  </main>;
}
