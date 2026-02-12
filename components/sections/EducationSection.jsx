"use client";
import { useState, useEffect } from 'react';
import SectionHeader from "../ui/SectionHeader";

export default function EducationSection({ data }) {
  const [lang, setLang] = useState('Anglais');

  const translations = {
    Anglais: {
      badge: "Education",
      title: "Educational Background",
      subtitle: "My academic journey in computer science and software engineering"
    },
    Français: {
      badge: "Éducation",
      title: "Parcours Académique",
      subtitle: "Mon parcours académique en informatique et ingénierie logicielle"
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem("language") || 'Anglais');
    };
    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const t = translations[lang];

  return (
    <section id="education" className="py-24 scroll-mt-24">
      <SectionHeader 
        badge={t.badge}
        title={t.title}
        subtitle={t.subtitle} 
      />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
        
        {data.map((edu, index) => (
          <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2"></div>
            
            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-white dark:bg-slate-900 border-4 border-cyan-100 dark:border-cyan-900/30 p-2 rounded-full text-cyan-500">
              <div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
            </div>
            
            {/* Content Card */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
              <span className="text-slate-400 dark:text-slate-500 font-mono text-sm font-bold">
                {edu.year}
              </span>
              <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mt-2 hover:shadow-md dark:hover:border-cyan-500/30 transition-all duration-300">
                <h4 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">
                  {edu.degree}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {edu.major}
                </p>
                {/* School/University display - assuming it's in your data */}
                {edu.school && (
                   <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold mt-2">
                     {edu.school}
                   </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}