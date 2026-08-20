"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const roles = [
  {
    org: "Social Embeddedness, Arizona State University",
    role: "Data Input Specialist",
    period: "May 2026 - Present",
    location: "Tempe, Arizona",
    logo: "/ASU logo.png",
    chapter: "01 / Where I am now",
    lead: "I turn messy Collaboratory exports into reporting systems people can rely on.",
    bullets: [
      "Built and maintained a Python ETL pipeline that turns raw Collaboratory exports into clean Tableau-ready tables, bridge tables, validation reports, and archived refreshes.",
      "Modeled activity, organization, profile, unit, and course data into relational datasets for Social Embeddedness reporting and interactive dashboards.",
      "Created Tableau dashboards and data model guidance so stakeholders can answer questions, spot patterns, and refresh reports with confidence.",
      "Supported data collection, maintenance, and training with clear definitions, quality checks, and documented reporting processes.",
    ],
  },
  {
    org: "Hitachi Digital Services",
    role: "Data Analyst Associate",
    period: "Aug 2022 - Aug 2025",
    location: "Bengaluru, India",
    logo: "/Hitachi-Logo.png",
    chapter: "02 / Learning at scale",
    lead: "I helped global teams see their operational data more clearly and act on it sooner.",
    bullets: [
      "Designed and maintained Power BI dashboards for QEI and audit KPIs, helping raise process efficiency by 30%.",
      "Prepared, cleaned, and analyzed large datasets with Python, SQL, and Excel to keep compliance and operational health visible.",
      "Built practical Excel tools with PivotTables, Power Query, and validation so recurring reports stayed consistent.",
      "Used regression and trend analysis on global quality audit data, reducing non-compliance prediction errors by 20%.",
      "Automated recurring reports and email distribution with Power Automate, making updates easier to share across stakeholders.",
      "Translated audit requirements into dashboard specs and monthly leadership reports that made the next step clearer.",
    ],
  },
  {
    org: "Indian Institute of Science",
    role: "Data Science Intern",
    period: "Jan 2022 - Jul 2022",
    location: "Bengaluru, India",
    logo: "/IISC logo.svg",
    chapter: "03 / Where it started",
    lead: "This is where I learned that careful data preparation can turn observation into discovery.",
    bullets: [
      "Developed a ball-tracking application using smartphone video capture and annotated data pipelines for model training.",
      "Created Python visualizations with Matplotlib and Seaborn to explore trajectory performance in a more intuitive way.",
      "Prepared, cleaned, and validated data to improve the model's reliability and consistency.",
      "Used exploratory analysis to uncover patterns in motion data and guide model improvements.",
      "Documented the method, findings, and recommendations so research stakeholders could follow the work.",
    ],
  },
];

const skills = [
  { name: "Python", category: "Programming", desc: "My go-to for ETL pipelines, data checks, and dependable automation." }, { name: "SQL", category: "Programming", desc: "How I ask large datasets focused questions and shape the answers." }, { name: "Java", category: "Programming", desc: "Used to build backend services and data-processing applications." }, { name: "JavaScript", category: "Programming", desc: "Used to create interactive web features and dashboards." }, { name: "Tableau", category: "Visualization", desc: "Where I turn prepared data into dashboards people can explore on their own." }, { name: "Power BI", category: "Visualization", desc: "Used to make healthcare and financial analytics easier to see and act on." }, { name: "Looker Studio", category: "Visualization", desc: "Used to deliver business dashboards from BigQuery data models." }, { name: "Airflow", category: "Data Engineering", desc: "Keeps scheduled ETL pipelines moving across cloud systems." }, { name: "PySpark", category: "Data Engineering", desc: "Used when a dataset is large enough to need distributed processing." }, { name: "ETL", category: "Data Engineering", desc: "The repeatable path from raw source data to useful reporting tables." }, { name: "Snowflake", category: "Database", desc: "For storing and querying analytical data at scale." }, { name: "PostgreSQL", category: "Database", desc: "For thoughtful relational data design and complex queries." }, { name: "Azure", category: "Cloud & DevOps", desc: "Used to deploy pipelines and services through Azure Data Factory." }, { name: "Git", category: "Cloud & DevOps", desc: "How I keep work traceable and collaborate without losing context." }, { name: "Power Automate", category: "Data Engineering", desc: "Used to take recurring reporting and stakeholder updates off the manual to-do list." }, { name: "Excel", category: "Visualization", desc: "Still one of the best places for clear PivotTable reports and Power Query models." },
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
  const [isRiipenProjectOpen, setIsRiipenProjectOpen] = useState(false);
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
        <SectionHeading eyebrow="The thread through my work" title="I like making complicated things feel clear." />
        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7 }} className="border-l-2 border-[#e57356] pl-6">
          <p className="text-xl leading-9 text-[#52656a]">Whether I&apos;m working with a raw export, a reporting problem, or a room full of research, I start with one question: what would make this easier for people to understand and use?</p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">01 / Start with what&apos;s there</p><p className="mt-2 text-sm leading-6 text-[#52656a]">I bring together source data from systems, spreadsheets, and everyday operational work.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">02 / Make it trustworthy</p><p className="mt-2 text-sm leading-6 text-[#52656a]">I clean, validate, and structure it so the same process can be trusted again tomorrow.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">03 / Find the useful signal</p><p className="mt-2 text-sm leading-6 text-[#52656a]">I build datasets, reports, and dashboards that help people see what matters.</p></li>
            <li className="border-t border-[#173138]/15 pt-4"><p className="text-xs font-black uppercase tracking-[0.14em] text-[#e57356]">04 / Leave it usable</p><p className="mt-2 text-sm leading-6 text-[#52656a]">I document the work and design repeatable workflows so teams can keep moving without me in the room.</p></li>
          </ol>
        </motion.div>
      </div>
    </section>

    <section id="experience" className="border-y border-[#173138]/10 bg-[#fdfefd]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="mb-16 grid gap-10 border-b border-[#173138]/15 pb-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><SectionHeading eyebrow="The path so far" title="Work shaped by curiosity, clarity, and follow-through." /><div className="border-l-2 border-[#e57356] pl-6"><p className="max-w-2xl text-lg leading-8 text-[#52656a]">The journey began with research and motion data, grew through global enterprise reporting, and now sits at the intersection of university data, dashboards, and repeatable systems.</p><div className="mt-7 grid gap-4 border-t border-[#173138]/15 pt-5 sm:grid-cols-3"><div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#00899a]">Started with</p><p className="mt-2 text-sm font-semibold leading-6 text-[#173138]">Research and discovery</p></div><div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#00899a]">Learned in</p><p className="mt-2 text-sm font-semibold leading-6 text-[#173138]">Enterprise analytics</p></div><div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#00899a]">Building now</p><p className="mt-2 text-sm font-semibold leading-6 text-[#173138]">Reliable university data systems</p></div></div></div></div><div className="space-y-24">{roles.map((job, index) => <motion.article key={job.org} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="grid gap-10 border-t border-[#173138]/10 pt-8 lg:grid-cols-[.75fr_1.25fr]"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">{job.chapter}</p><div className="mt-5 flex items-center gap-4"><div className="grid h-14 w-14 place-items-center overflow-hidden rounded border border-[#173138]/12 bg-[#f4f6f5]"><img src={`${BASE_PATH}${job.logo}`} alt={job.org} className="h-full w-full object-contain p-1.5" /></div><div><p className="text-sm font-black">{job.role}</p><p className="mt-1 text-sm font-semibold text-[#00899a]">{job.org}</p></div></div><p className="mt-5 text-sm font-bold text-[#52656a]">{job.period}</p><p className="mt-2 flex items-center gap-1 text-sm text-[#52656a]"><MapPin size={14} aria-hidden="true" /> {job.location}</p></div><div><p className="max-w-2xl text-2xl font-bold leading-9 text-[#173138] sm:text-3xl">{job.lead}</p><ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2">{job.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-7 text-[#52656a]"><span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e57356]" aria-hidden="true" />{bullet}</li>)}</ul>{index === 0 && <div className="mt-10 border-t border-[#173138]/10 pt-6 text-sm font-bold text-[#00899a]">Python ETL · Tableau · Data modeling · Documentation</div>}</div></motion.article>)}</div></div></section>

    <section id="projects" className="bg-[#173138] text-white" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#a7d9d7]">A few things I&apos;ve made</p><h2 id="projects-heading" className="mt-5 text-4xl font-black leading-tight sm:text-5xl">Ideas become more powerful when people can actually use them.</h2></div>
          <p className="max-w-xl border-l border-[#e57356] pl-6 text-lg leading-8 text-white/75">These projects are where structured thinking meets clear communication. Each one begins with something complex and ends with something people can work with.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <button
            type="button"
            aria-expanded={isRiipenProjectOpen}
            aria-controls="riipen-case-study"
            onClick={() => setIsRiipenProjectOpen((isOpen) => !isOpen)}
            className="group relative min-h-[350px] overflow-hidden border border-white/25 bg-white/[0.06] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#a7d9d7] hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:p-8"
          >
            <span className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#00899a]/25 transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" aria-hidden="true" />
            <div className="relative flex h-full flex-col"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e57356]">Project 01</p><h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">Strategic Foresight Toolkit Design</h3><p className="mt-3 max-w-xl text-sm leading-7 text-white/70">Global Futures Laboratory · I translated complex foresight ideas into an inviting, workshop-ready toolkit.</p></div><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-[#a7d9d7] transition group-hover:bg-[#a7d9d7] group-hover:text-[#173138]"><ArrowDown size={18} className={`transition-transform duration-300 ${isRiipenProjectOpen ? "rotate-180" : ""}`} aria-hidden="true" /></span></div><div className="mt-auto pt-8"><div className="flex flex-wrap items-center gap-3 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.1em] text-white/65"><span>August 2026</span><span className="h-1 w-1 rounded-full bg-[#e57356]" /><span>5.0 feedback</span><span className="h-1 w-1 rounded-full bg-[#e57356]" /><span>Riipen</span></div><p className="mt-5 text-sm font-bold text-[#a7d9d7]">{isRiipenProjectOpen ? "Close this story" : "See how the project came together"}</p></div></div>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isRiipenProjectOpen && (
        <motion.article id="riipen-case-study" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="overflow-hidden pt-12" aria-labelledby="riipen-project-title">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#e57356]">Project 01 / August 2026</p><h3 id="riipen-project-title" className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Strategic Foresight Toolkit Design</h3><p className="mt-5 text-base leading-7 text-white/75">This Riipen project with Global Futures Laboratory gave me a chance to make rich strategic foresight content feel less intimidating and more ready for a real workshop.</p><dl className="mt-8 divide-y divide-white/15 border-y border-white/15 text-sm"><div className="flex items-center justify-between gap-4 py-3"><dt className="text-white/55">Collaborated with</dt><dd className="font-bold text-white">Global Futures Laboratory</dd></div><div className="flex items-center justify-between gap-4 py-3"><dt className="text-white/55">Guided by</dt><dd className="font-bold text-white">Bea Rodriguez-Fransen</dd></div><div className="flex items-center justify-between gap-4 py-3"><dt className="text-white/55">Feedback</dt><dd className="font-bold text-[#a7d9d7]">5.0 overall rating</dd></div></dl></div>

            <div className="border border-white/20 bg-white/[0.06] p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">The starting point</p><p className="mt-4 text-xl font-bold leading-8 text-white">The material already had depth. My job was to give it a visual language that felt welcoming, cohesive, and useful without losing its intellectual weight.</p><div className="mt-8 grid gap-8 md:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#e57356]">How I approached it</p><p className="mt-3 text-sm leading-7 text-white/70">I built a visual identity around ASU color, typography, and icons, then created flexible layouts for both print and digital settings.</p></div><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#e57356]">What I left behind</p><p className="mt-3 text-sm leading-7 text-white/70">Visual identity guidance, print-ready layouts, digital toolkit files, and diagram and visual-metaphor assets ready for use.</p></div></div></div>
          </div>

          <div className="mt-10 grid gap-8 border-y border-white/20 py-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">Making the idea visible</p><h4 className="mt-4 text-2xl font-black leading-8">This is how I move from plain language to a visual people can think with.</h4><p className="mt-4 text-sm leading-7 text-white/70">The goal was never decoration. I wanted abstract foresight concepts to be easier to scan, compare, discuss, and carry into a workshop.</p></div>
            <ol className="grid gap-4 sm:grid-cols-2"><li className="border-t border-white/20 pt-4"><p className="text-xs font-black text-[#e57356]">01 / LISTEN FOR THE CORE</p><p className="mt-2 text-sm leading-6 text-white/75">I start by finding the idea, decision, or relationship at the heart of research-heavy content.</p></li><li className="border-t border-white/20 pt-4"><p className="text-xs font-black text-[#e57356]">02 / GIVE IT A SHAPE</p><p className="mt-2 text-sm leading-6 text-white/75">I group the ideas into a clear hierarchy that someone can take in without getting lost.</p></li><li className="border-t border-white/20 pt-4"><p className="text-xs font-black text-[#e57356]">03 / MAKE RELATIONSHIPS VISIBLE</p><p className="mt-2 text-sm leading-6 text-white/75">I use modular layouts, diagrams, and visual metaphors to replace dense blocks of text.</p></li><li className="border-t border-white/20 pt-4"><p className="text-xs font-black text-[#e57356]">04 / MAKE IT HOLD TOGETHER</p><p className="mt-2 text-sm leading-6 text-white/75">I use consistent color, typography, and formats so the toolkit works wherever people encounter it.</p></li></ol>
          </div>

          <div className="mt-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-[#a7d9d7]">Skills demonstrated</p><div className="mt-4 flex flex-wrap gap-2">{["Functional requirements", "Color palette", "Canva", "Digital data", "Typography", "Usability", "Research"].map((skill) => <span key={skill} className="border border-white/25 px-3 py-2 text-xs font-bold text-white/85">{skill}</span>)}</div></div><a href={`${BASE_PATH}/certificates/riipen-strategic-foresight-toolkit.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded bg-[#e57356] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#f18668] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">View certificate <ArrowUpRight size={17} aria-hidden="true" /></a></div>

          <blockquote className="mt-10 border-l-2 border-[#a7d9d7] pl-6 text-lg leading-8 text-white/85">“Sanjay excelled in communicating and working efficiently, took initiative beyond the deliverables, and created two toolkit versions well before the deadline.”<footer className="mt-3 text-sm font-bold text-[#a7d9d7]">Bea Rodriguez-Fransen, Assistant Research Professor, Principled Innovation</footer></blockquote>
        </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>

    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="What I reach for" title="A practical toolkit, built one problem at a time." copy="These are the tools I&apos;ve used to turn a question into a working system, a clearer report, or an easier next step." /><div className="flex max-w-xl flex-wrap gap-2" aria-label="Filter skills by category">{["All", "Programming", "Visualization", "Data Engineering", "Database", "Cloud & DevOps"].map((category) => <button key={category} type="button" onClick={() => setSkillFilter(category)} aria-pressed={skillFilter === category} className={`rounded border px-3 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00899a] ${skillFilter === category ? "border-[#00899a] bg-[#00899a] text-white" : "border-[#173138]/15 bg-white text-[#52656a] hover:border-[#00899a]"}`}>{category}</button>)}</div></div><motion.div layout className="grid gap-px overflow-hidden border border-[#173138]/15 bg-[#173138]/15 sm:grid-cols-2 lg:grid-cols-4">{skills.filter((skill) => skillFilter === "All" || skill.category === skillFilter).map((skill) => <motion.article layout key={skill.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-48 bg-[#f4f6f5] p-5 transition-colors hover:bg-[#e7f0ef]"><p className="text-xs font-bold uppercase tracking-[0.13em] text-[#e57356]">{skill.category}</p><h3 className="mt-7 text-xl font-black">{skill.name}</h3><p className="mt-3 text-sm leading-6 text-[#52656a]">{skill.desc}</p></motion.article>)}</motion.div></section>

    <section id="education" className="border-y border-[#173138]/10 bg-[#e7f0ef]"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><SectionHeading eyebrow="Still learning" title="The work keeps teaching me, and so does the classroom." copy="I&apos;m continuing to build depth in computer science while carrying the practical questions from my day-to-day data work back into my studies." /><div className="mt-12 grid gap-5 lg:grid-cols-2">{education.map((item) => <motion.article key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#173138]/15 bg-[#fdfefd] p-6"><div className="flex items-start gap-4"><div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded border border-[#173138]/10 bg-white"><img src={`${BASE_PATH}${item.logo}`} alt={item.name} className="h-full w-full object-contain p-1.5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#e57356]">{item.status}</p><h3 className="mt-2 text-lg font-black">{item.name}</h3><p className="mt-1 text-sm font-semibold text-[#00899a]">{item.degree} - {item.field}</p><p className="mt-3 text-sm text-[#52656a]">{item.period}</p><p className="mt-1 flex items-center gap-1 text-sm text-[#52656a]"><MapPin size={14} aria-hidden="true" /> {item.location}</p></div></div></motion.article>)}</div></div></section>

    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><SectionHeading eyebrow="Let&apos;s talk" title="Have a question, a problem to untangle, or an idea in progress?" copy="Send me a note. I&apos;d be glad to hear what you&apos;re working on and see whether I can help." /><div className="mt-8 space-y-4 text-sm font-semibold text-[#52656a]"><a href="mailto:sanjayso@asu.edu" className="flex items-center gap-3 hover:text-[#00899a]"><Mail size={18} aria-hidden="true" /> sanjayso@asu.edu</a><a href="tel:4803599244" className="flex items-center gap-3 hover:text-[#00899a]"><Phone size={18} aria-hidden="true" /> 4803599244</a><span className="flex items-center gap-3"><MapPin size={18} aria-hidden="true" /> Tempe, Arizona</span></div></div><div className="border border-[#173138]/15 bg-[#fdfefd] p-6 sm:p-8">{contactStatus === "success" ? <div className="py-12 text-center"><Sparkles className="mx-auto text-[#00899a]" size={34} aria-hidden="true" /><p className="mt-4 text-xl font-black">Your note is on its way.</p><p className="mt-2 text-sm text-[#52656a]">Thanks for reaching out. I&apos;ll get back to you soon.</p><button type="button" onClick={() => setContactStatus("idle")} className="mt-6 text-sm font-bold text-[#00899a] underline underline-offset-4">Write another note</button></div> : <form onSubmit={handleContactSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Name<input type="text" required placeholder="Your name" value={contactForm.name} onChange={(event) => setContactForm((current) => ({ ...current, name: event.target.value }))} className="field-input" /></label><label className="field-label">Email<input type="email" required placeholder="you@example.com" value={contactForm.email} onChange={(event) => setContactForm((current) => ({ ...current, email: event.target.value }))} className="field-input" /></label></div><label className="field-label">What&apos;s on your mind?<textarea required rows={6} placeholder="Tell me a little about what you&apos;re working on..." value={contactForm.message} onChange={(event) => setContactForm((current) => ({ ...current, message: event.target.value }))} className="field-input resize-y" /></label>{contactStatus === "error" && <p className="text-sm font-semibold text-red-700">That didn&apos;t go through. Please try again, or email me directly at sanjayso@asu.edu.</p>}<button type="submit" disabled={contactStatus === "loading"} className="inline-flex items-center gap-2 rounded bg-[#173138] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00899a] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00899a]">{contactStatus === "loading" ? "Sending your note..." : "Send a note"}<ArrowUpRight size={17} aria-hidden="true" /></button></form>}</div></div></section>

    </section>
    <footer className="border-t border-[#173138]/10 bg-[#fdfefd]"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p className="text-sm font-bold">Sanjay S Dev</p><div className="flex items-center gap-5"><a href="https://linkedin.com/in/sanjay-soralamavu-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#52656a] hover:text-[#00899a]"><Linkedin size={20} /></a><a href="https://github.com/Sanjaysoralamavu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#52656a] hover:text-[#00899a]"><Github size={20} /></a><a href="https://instagram.com/sanjay-soralamavu-dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#52656a] hover:text-[#00899a]"><Instagram size={20} /></a><a href="mailto:sanjayso@asu.edu" aria-label="Email Sanjay" className="text-[#52656a] hover:text-[#00899a]"><Mail size={20} /></a></div></div></footer>
  </main>;
}
