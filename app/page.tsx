"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Linkedin,
  Github,
  Download,
  Mail,
  ChevronDown,
  MapPin,
  Sparkles,
  Instagram,
  Phone,
} from "lucide-react";

import AnimatedBackground from "@/components/AnimatedBackground";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState<"Profile" | "Experience" | "Projects" | "Skills" | "Education">("Profile");
  const [skillFilter, setSkillFilter] = useState("All");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactStatus("loading");
    try {
      // Get your free access key at https://web3forms.com — enter sanjaysoralamavudev@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "0c3ff25b-bd2a-4a6f-9d46-dfbef0a6969c",
          ...contactForm,
        }),
      });
      if (res.ok) {
        setContactStatus("success");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setContactStatus("error");
      }
    } catch {
      setContactStatus("error");
    }
  }

  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroY = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -40, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.9, 0.75]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);
  const heroFilter = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(2px)"]);

  useEffect(() => {
    const onScroll = () => {
      setDrawer(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen text-slate-100 font-sans scroll-smooth relative overflow-x-hidden">
      <AnimatedBackground />

      <motion.div
        className="fixed inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <nav className="fixed top-0 w-full z-50 bg-slate-950/55 backdrop-blur-md border-b border-white/10 px-10 py-3 flex items-center justify-between">
        <button
          onClick={() => heroRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="font-black text-xl tracking-tighter text-cyan-100 hover:text-cyan-300 transition-colors"
          aria-label="Scroll to top"
        >
          SSD
        </button>
        <div className="hidden md:flex items-center gap-2">
          <a href="https://linkedin.com/in/sanjay-soralamavu-dev" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition"><Linkedin size={16} /></a>
          <a href="https://github.com/Sanjaysoralamavu" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition"><Github size={16} /></a>
          <a href="#" className="w-9 h-9 grid place-items-center bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition"><Sparkles size={16} /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition"><Download size={16} /></a>
          <a href="mailto:sanjayso@asu.edu" className="w-9 h-9 grid place-items-center bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition"><Mail size={16} /></a>
        </div>
      </nav>

      <motion.section
        ref={heroRef}
        className="h-screen flex flex-col justify-center items-center px-6 text-center max-w-5xl mx-auto relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale, filter: heroFilter }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.35, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-white"
          >
            SANJAY S DEV
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-cyan-200 font-mono tracking-[0.3em] uppercase text-xs md:text-sm mb-8"
          >
            MS Computer Science | Data Analyst Associate | Automation Specialist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Building resilient data ecosystems, end-to-end analytics, and automation that powers strategic decisions across global operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-12"
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Tempe, Arizona
            </span>
            <a href="mailto:sanjayso@asu.edu" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={16} /> sanjayso@asu.edu
            </a>
            <a href="tel:4803599244" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={16} /> 4803599244
            </a>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => {
                setDrawer(true);
                window.scrollTo({ top: window.innerHeight - 100, behavior: "smooth" });
              }}
              className="px-10 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
            >
              Explore Portfolio
            </motion.button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-slate-800 border border-blue-500 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all hover:scale-105 shadow-xl shadow-black/30"
            >
              Download Résumé
            </a>
          </motion.div>
        </motion.div>

        <button
          onClick={() => {
            setDrawer(true);
            window.scrollTo({ top: window.innerHeight - 100, behavior: "smooth" });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-slate-300 opacity-90 hover:opacity-100"
        >
          <span>CLICK OR SCROLL</span>
          <ChevronDown className="animate-bounce" size={16} />
        </button>
      </motion.section>

      <motion.section
        className="relative z-20"
        initial={{ y: "100vh" }}
        animate={{ y: drawer ? 0 : "100vh" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl bg-slate-900/80 rounded-3xl shadow-2xl border border-white/10 p-0 overflow-hidden backdrop-blur-xl mt-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] min-h-[70vh]">
            <aside className="bg-slate-950/80 p-5 border-r border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-300 font-black">SD</div>
                <div>
                  <div className="font-bold text-white">Sanjay S Dev</div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">Data Analyst Associate</div>
                </div>
              </div>
              <nav className="space-y-2">
                {["Profile", "Experience", "Projects", "Skills", "Education"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item as "Profile" | "Experience" | "Projects" | "Skills" | "Education")}
                    className={`w-full text-left py-2 px-3 text-sm font-semibold rounded-lg transition ${
                      activeTab === item ? "bg-cyan-500/30 text-cyan-300" : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </aside>

            <section className="p-5 overflow-y-auto max-h-[70vh]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <div>
                  <div className="text-xs font-semibold tracking-wider text-emerald-300">{activeTab.toUpperCase()}</div>
                  <h2 className="text-2xl font-bold text-white">{activeTab === "Profile" && "Welcome To My Portfolio!"} {activeTab === "Experience" && "Professional Experience"} {activeTab === "Projects" && "My Projects"} {activeTab === "Skills" && "Technical Skills"} {activeTab === "Education" && "Education"}</h2>
                </div>
                {activeTab === "Profile" && (
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: Linkedin, href: "https://linkedin.com/in/sanjay-soralamavu-dev", external: true },
                      { Icon: Github, href: "https://github.com/Sanjaysoralamavu", external: true },
                      { Icon: Sparkles, href: "#", external: false },
                      { Icon: Download, href: "/resume.pdf", external: true },
                      { Icon: Mail, href: "mailto:sanjayso@asu.edu", external: false },
                    ].map(({ Icon, href, external }, idx) => (
                      <a
                        key={idx}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="w-8 h-8 grid place-items-center bg-slate-800 text-slate-200 rounded-lg hover:bg-slate-700 transition"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "Profile" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-600/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-base uppercase tracking-widest font-black text-white">My Story So Far</div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            period: "Jan 2022 – Jul 2022",
                            role: "Data Science Intern",
                            org: "Indian Institute of Science",
                            location: "Bengaluru, India",
                            highlight: "Built ball-tracking ML pipeline & EDA visualizations",
                            logo: "/IISC logo.svg",
                            initials: "IIS",
                          },
                          {
                            period: "Aug 2022 – Aug 2025",
                            role: "Data Analyst Associate",
                            org: "Hitachi Digital Services",
                            location: "Bengaluru, India",
                            highlight: "Led QEI dashboards & automated reporting across global ops",
                            logo: "/Hitachi-Logo.png",
                            initials: "HDS",
                          },
                          {
                            period: "Aug 2025 – Present",
                            role: "Barista",
                            org: "Starbucks (Aramark)",
                            location: "Tempe, Arizona",
                            highlight: "Delivering quality service at ASU campus Starbucks under Aramark",
                            logo: "/Aramark.jpg",
                            initials: "ARK",
                          },
                          {
                            period: "Aug 2025 – Present",
                            role: "MS in Computer Science",
                            org: "Arizona State University",
                            location: "Tempe, Arizona",
                            highlight: "Advancing expertise in data systems, cloud, and AI",
                            logo: "/ASU logo.png",
                            initials: "ASU",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 p-4 overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
                            <div className="relative flex items-center gap-3">
                              <div className="w-11 h-11 rounded-xl bg-[#f5f5f0] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                {item.logo
                                  ? <img src={`${BASE_PATH}${item.logo}`} alt={item.org} className="w-full h-full object-contain p-1" />
                                  : <span className="text-[10px] font-black text-slate-700">{item.initials}</span>
                                }
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <div>
                                    <div className="font-bold text-white text-sm leading-tight">{item.role}</div>
                                    <div className="text-xs text-slate-300 mt-0.5">{item.org} <span className="text-slate-600">·</span> <span className="text-slate-400">{item.location}</span></div>
                                  </div>
                                  <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{item.period}</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1 italic">{item.highlight}</p>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "Experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {[
                      {
                        org: "Hitachi Digital Services",
                        role: "Data Analyst Associate",
                        period: "Aug 2022 – Aug 2025",
                        location: "Bengaluru, India",
                        logo: "/Hitachi-Logo.png",
                        initials: "HDS",
                        bullets: [
                          "Designed and maintained enterprise Power BI dashboards for QEI and audit KPIs, raising process efficiency by 30%",
                          "Prepared, cleansed, and analyzed large datasets using Python, SQL, and Excel to track compliance and operational health",
                          "Built advanced Excel solutions with PivotTables, Power Query, and data validation for repeatable reporting",
                          "Executed regression and trend analysis on global quality audit data, reducing non-compliance prediction errors by 20%",
                          "Automated recurring reporting and e-mail distribution using Power Automate across stakeholders",
                          "Translated audit requirements into dashboard specs, monthly leadership reports, and actionable insights"
                        ],
                      },
                      {
                        org: "Indian Institute of Science",
                        role: "Data Science Intern",
                        period: "Jan 2022 – Jul 2022",
                        location: "Bengaluru, India",
                        logo: "/IISC logo.svg",
                        initials: "IIS",
                        bullets: [
                          "Developed a ball tracking application leveraging smartphone video capture and annotated data pipelines for model training",
                          "Created interactive visualizations in Python (Matplotlib & Seaborn) to explore trajectory performance metrics",
                          "Managed data preprocessing, cleaning, and validation for higher model reliability and consistency",
                          "Conducted EDA to reveal patterns in motion datasets and support model improvements",
                          "Delivered documented methodology, outcomes, and recommendations to research stakeholders"
                        ],
                      },
                    ].map((job, jIdx) => (
                      <div key={jIdx} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        {/* Header */}
                        <div className="relative flex items-center gap-4 p-4 border-b border-white/5">
                          <div className="w-11 h-11 rounded-xl bg-[#f5f5f0] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                            {job.logo
                              ? <img src={`${BASE_PATH}${job.logo}`} alt={job.org} className="w-full h-full object-contain p-1" />
                              : <span className="text-[10px] font-black text-slate-700">{job.initials}</span>
                            }
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="text-base font-bold text-white">{job.org}</h3>
                              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{job.period}</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{job.role} <span className="text-slate-600">·</span> {job.location}</p>
                          </div>
                        </div>
                        {/* Bullets */}
                        <ul className="relative grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                          {job.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-slate-300 text-xs leading-relaxed flex gap-2.5">
                              <span className="h-1 w-1 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "Projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-slate-300">Projects section coming soon...</p>
                  </motion.div>
                )}

                {activeTab === "Skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["All", "Programming", "Visualization", "Data Engineering", "Database", "Cloud & DevOps"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSkillFilter(cat)}
                          className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                            skillFilter === cat
                              ? "bg-slate-800 text-white border-slate-600"
                              : "bg-transparent text-slate-300 border-slate-600 hover:bg-slate-800"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Skill cards grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                      {[
                        { name: "Python", category: "Programming", icon: "🐍", desc: "Built ETL pipelines, data validation scripts, and automation workflows" },
                        { name: "SQL", category: "Programming", icon: "🗄️", desc: "Wrote complex queries for data modeling, analytics, and reporting" },
                        { name: "Java", category: "Programming", icon: "☕", desc: "Developed backend and data processing applications" },
                        { name: "JavaScript", category: "Programming", icon: "JS", desc: "Built web features and interactive dashboards" },
                        { name: "Tableau", category: "Visualization", icon: "📊", desc: "Created automated dashboards for self-service analytics" },
                        { name: "Power BI", category: "Visualization", icon: "📈", desc: "Built healthcare and financial analytics dashboards" },
                        { name: "Looker Studio", category: "Visualization", icon: "🔍", desc: "Delivered business dashboards using BigQuery data models" },
                        { name: "Airflow", category: "Data Engineering", icon: "🌀", desc: "Orchestrated scheduled ETL pipelines across cloud systems" },
                        { name: "PySpark", category: "Data Engineering", icon: "⚡", desc: "Processed large-scale datasets using distributed computing" },
                        { name: "ETL", category: "Data Engineering", icon: "🔄", desc: "Designed and maintained enterprise data pipelines" },
                        { name: "Snowflake", category: "Database", icon: "❄️", desc: "Stored and queried large analytical datasets at scale" },
                        { name: "PostgreSQL", category: "Database", icon: "🐘", desc: "Structured data storage and complex relational queries" },
                        { name: "Azure", category: "Cloud & DevOps", icon: "☁️", desc: "Deployed data pipelines and services on Azure Data Factory" },
                        { name: "Git", category: "Cloud & DevOps", icon: "🔀", desc: "Version control and collaboration on data engineering projects" },
                        { name: "Power Automate", category: "Data Engineering", icon: "⚙️", desc: "Automated reporting workflows and stakeholder notifications" },
                        { name: "Excel", category: "Visualization", icon: "📋", desc: "Built PivotTable reports and Power Query data models" },
                      ]
                        .filter((s) => skillFilter === "All" || s.category === skillFilter)
                        .map((skill, i) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.2 }}
                            className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:bg-white/[0.07] transition-all"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg shrink-0">
                                {skill.icon}
                              </div>
                              <span className="text-base font-bold text-white">{skill.name}</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "Education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {[
                      {
                        logo: "/ASU logo.png",
                        name: "Arizona State University",
                        degree: "Master of Science",
                        field: "Computer Science",
                        location: "Tempe, Arizona",
                        period: "Aug 2025 – May 2027",
                        status: "In Progress",
                      },
                      {
                        logo: "/Dr AIT logo.jpeg",
                        name: "Dr. Ambedkar Institute Of Technology",
                        degree: "Bachelor of Engineering",
                        field: "Computer Science",
                        location: "Bengaluru, India",
                        period: "Aug 2018 – Aug 2022",
                        status: "Graduated",
                      },
                    ].map((edu, idx) => (
                      <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 p-4 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="relative flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-[#f5f5f0] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <img src={`${BASE_PATH}${edu.logo}`} alt={edu.name} className="w-full h-full object-contain p-1.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                              <h3 className="text-base font-bold text-white">{edu.name}</h3>
                              <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{edu.period}</span>
                            </div>
                            <p className="text-sm text-slate-300">{edu.degree} <span className="text-slate-600">·</span> <span className="text-slate-400">{edu.field}</span></p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="flex items-center gap-1 text-xs text-slate-500"><MapPin size={11} />{edu.location}</span>
                              <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400 font-medium">{edu.status}</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </div>
        </div>
      </motion.section>


      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-slate-400 mt-3 text-sm">Have a question, opportunity, or just want to say hi? Drop a message below.</p>
          </div>

          {contactStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center"
            >
              <div className="text-4xl mb-3">✅</div>
              <p className="text-emerald-300 font-semibold text-lg">Message sent!</p>
              <p className="text-slate-400 text-sm mt-1">I'll get back to you soon.</p>
              <button
                onClick={() => setContactStatus("idle")}
                className="mt-5 text-xs text-slate-400 hover:text-white underline transition"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sanjay S Dev"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-slate-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-slate-800 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-slate-800 transition resize-none"
                />
              </div>
              {contactStatus === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Please try again or email me directly at sanjayso@asu.edu.</p>
              )}
              <motion.button
                type="submit"
                disabled={contactStatus === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                {contactStatus === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 border-t border-white/5 text-center"
      >
        <div className="flex justify-center gap-8 mb-6">
          <motion.a
            href="https://linkedin.com/in/sanjay-soralamavu-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin />
            <span className="text-xs uppercase tracking-wider">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://instagram.com/sanjay-soralamavu-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram />
            <span className="text-xs uppercase tracking-wider">Instagram</span>
          </motion.a>
          <motion.a
            href="mailto:sanjayso@asu.edu"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail />
            <span className="text-xs uppercase tracking-wider">Email</span>
          </motion.a>
        </div>
      </motion.footer>
    </main>
  );
}
