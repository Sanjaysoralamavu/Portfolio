"use client";
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const expData = [
  {
    company: "Hitachi Digital Services",
    role: "Data Analyst Associate",
    date: "August 2022 - August 2025",
    location: "Bengaluru, India",
    bullets: [
      "Designed and maintained enterprise Power BI dashboards for Quality Excellence Index (QEI) and audit KPIs, raising process efficiency by 30%",
      "Prepared, cleansed, and analyzed large datasets using Python, SQL, and Excel to track compliance, risk indicators, and operational health",
      "Built advanced Excel solutions with PivotTables, Power Query, and data validation for repeatable reporting and ad-hoc analytics",
      "Executed regression and trend analysis on global quality audit data, reducing non-compliance prediction errors by 20%",
      "Automated recurring reporting and e-mail distribution using Power Automate, scaling communication across stakeholders",
      "Translated audit requirements into dashboard specs, monthly leadership reports, and actionable insights across regions"
    ]
  },
  {
    company: "Indian Institute of Science",
    role: "Data Science Intern",
    date: "January 2022 - July 2022",
    location: "Bengaluru, India",
    bullets: [
      "Developed a ball tracking application leveraging smartphone video capture and annotated data pipelines for model training",
      "Created interactive visualizations in Python (Matplotlib & Seaborn) to explore trajectory performance metrics",
      "Managed data preprocessing, cleaning, and validation for higher model reliability and consistency",
      "Conducted EDA to reveal patterns in motion datasets and support model improvements",
      "Delivered documented methodology, outcomes, and recommendations to research stakeholders"
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