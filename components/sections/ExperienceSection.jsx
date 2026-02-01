"use client";
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceSection({ data }) {
  // 1. Initialize state
  const [showAll, setShowAll] = useState(false);

  // 2. Logic to filter displayed experiences (showing 2 by default for the 2-col grid)
  const displayedExp = showAll ? data : data.slice(0, 2);

  return (
    <section id="experience" className="py-24">
      <SectionHeader 
        badge="Experience" 
        title="Professional Experience" 
        subtitle="Hands-on experience across multiple companies, building real-world solutions"
      />
      
      {/* 3. Mapping over displayedExp */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {displayedExp.map((exp, idx) => (
          <div key={idx} className="glass-card p-8 rounded-[2rem] relative hover:translate-y-[-4px] transition-all duration-300 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-500">
                <Briefcase size={28} />
              </div>
              <span className="bg-cyan-50 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-xl text-xs font-bold border border-cyan-100 dark:border-cyan-800">
                {exp.period}
              </span>
            </div>
            
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white leading-tight mb-1">{exp.role}</h3>
            <h4 className="text-cyan-500 font-bold text-lg mb-4 uppercase tracking-wide">{exp.company}</h4>
            
            <p className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mb-6 font-medium">
              <MapPin size={16} /> {exp.location}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              {exp.description}
            </p>
            
            <div className="inline-block px-4 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-bold italic uppercase tracking-wider">
              {exp.type}
            </div>
          </div>
        ))}
      </div>

      {/* 4. Show More / Show Less Button */}
      {data.length > 2 && (
        <div className="flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm active:scale-95"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}