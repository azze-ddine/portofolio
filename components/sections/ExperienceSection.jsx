"use client";
import { useState, useEffect } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Briefcase, MapPin, ArrowDown } from 'lucide-react';

export default function ExperienceSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [lang, setLang] = useState('Anglais');

  const translations = {
    Anglais: {
      badge: "Experience",
      title: "Professional Experience",
      subtitle: "Hands-on experience across multiple companies, building real-world solutions",
      showMore: "Show More",
      showLess: "Show Less"
    },
    Français: {
      badge: "Expérience",
      title: "Expérience Professionnelle",
      subtitle: "Expérience concrète au sein de diverses entreprises, créant des solutions réelles",
      showMore: "Voir Plus",
      showLess: "Voir Moins"
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
  const displayedExp = showAll ? data : data.slice(0, 2);

  return (
    <section id="experience" className="py-24">
      <SectionHeader 
        badge={t.badge} 
        title={t.title} 
        subtitle={t.subtitle}
      />
      
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

      {data.length > 2 && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-10 py-3.5 rounded-2xl font-bold transition-all active:scale-95 border shadow-sm
            bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-cyan-500 hover:text-cyan-600
            dark:bg-slate-900/40 dark:text-slate-300 dark:border-slate-800 dark:hover:border-cyan-500/50 dark:hover:text-cyan-400"
          >
            <span>{showAll ? t.showLess : t.showMore}</span>
            <div className={`transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`}>
              <ArrowDown className={`w-5 h-5 ${showAll ? 'text-slate-400' : 'text-cyan-500'}`} />
            </div>
          </button>
        </div>
      )}
    </section>
  );
}