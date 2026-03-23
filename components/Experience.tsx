"use client";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const expData = [
  {
    company: "Hitachi Digital Services",
    role: "Associate / Software Engineer",
    date: "August 2022 - August 2025",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Developed automated workflows integrating REST APIs, Power Automate, and SharePoint, reducing manual QA tasks by 40%",
      "Created Python-based validation scripts and Streamlit dashboards for test data processing and audit analysis",
      "Designed ETL pipelines and data quality checks to ensure reliability of analytics used for system monitoring",
      "Improved developer efficiency by automating test reporting and metrics visualization using Power BI and MySQL"
    ]
  },
  {
    company: "Indian Institute of Science",
    role: "Data Science Intern",
    date: "January 2022 - June 2022",
    location: "India",
    bullets: [
      "Developed a ball tracking application using smartphone cameras with annotated data for machine learning model training",
      "Built interactive dashboards and visualizations using Python, Matplotlib, and Seaborn to summarize movement patterns",
      "Performed data preprocessing, cleaning, and validation on collected motion datasets to ensure quality",
      "Conducted exploratory data analysis (EDA) to identify patterns and trends in ball trajectories",
      "Generated insights from quantitative and qualitative data to support decision making",
      "Collaborated with supervisors to document methodology, results, and recommendations"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-white flex items-center gap-4">
        <Briefcase className="text-blue-500" /> Professional Experience
      </h2>
      <div className="space-y-12">
        {expData.map((item, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all"
          >
            <div className="flex flex-col md:flex-row justify-between mb-6 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.company}</h3>
                <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">{item.role}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-slate-400 font-medium">{item.date}</p>
                <p className="text-slate-500 text-sm">{item.location}</p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="text-slate-300 text-sm leading-relaxed flex gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}