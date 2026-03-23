"use client";
import AnimatedBackground from '@/components/AnimatedBackground';
import Experience from '@/components/Experience';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone, Code2, GraduationCap, Github } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 font-sans">
      <AnimatedBackground />
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5 px-10 py-4 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter text-white">SSD</span>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-white">
            Sanjay S Dev
          </h1>
          <p className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs md:text-sm mb-8">
            Data Analyst | Software Engineer | ASU Grad Student
          </p>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
            Software Engineer with a strong analytical mindset and 3 years of experience in data analytics and automation. 
            Focused on building scalable, production-ready software systems and backend solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-12">
            <span className="flex items-center gap-2"><MapPin size={16}/> Tempe, Arizona</span>
            <span className="flex items-center gap-2"><Mail size={16}/> sanjayso@asu.edu</span>
            <span className="flex items-center gap-2"><Phone size={16}/> 4803599244</span>
          </div>
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView()}
            className="px-10 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            Explore Portfolio
          </button>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <Experience />

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-white border-l-8 border-blue-600 pl-6 flex items-center gap-4">
          <Code2 className="text-blue-500" /> Technical Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python", "SQL", "Hadoop", "Java", "JavaScript (D3.js)", 
            "Power BI", "MySQL", "Streamlit", "Matplotlib", 
            "Seaborn", "REST APIs", "Power Automate", "Git"
          ].map((skill, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-blue-500/10 hover:border-blue-500/50 transition-all">
              <span className="text-slate-300 font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 max-w-5xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold mb-16 text-white border-l-8 border-blue-600 pl-6 flex items-center gap-4">
          <GraduationCap className="text-blue-500" /> Education
        </h2>
        <div className="space-y-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all">
            <h3 className="text-2xl font-bold text-white">Arizona State University</h3>
            <p className="text-blue-500 font-mono">Master of Science - MS, Computer Science</p>
            <p className="text-slate-500 mt-2">August 2025 - May 2027</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all">
            <h3 className="text-2xl font-bold text-white">Dr. Ambedkar Institute Of Technology</h3>
            <p className="text-blue-500 font-mono">Bachelor of Engineering - BE, Computer Science</p>
            <p className="text-slate-500 mt-2">2018 - 2022</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://linkedin.com/in/sanjay-soralamavu-dev" className="text-slate-500 hover:text-white transition-colors"><Linkedin /></a>
          <a href="mailto:sanjayso@asu.edu" className="text-slate-500 hover:text-white transition-colors"><Mail /></a>
        </div>
        <p className="text-slate-600 text-xs uppercase tracking-[0.5em]">
          Built for Sanjay S Dev • Tempe, Arizona
        </p>
      </footer>
    </main>
  );
}