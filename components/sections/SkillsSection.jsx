"use client";
import { useState, useEffect } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Cloud, Monitor, Brain, Database, Braces, GitBranch, ArrowDown } from 'lucide-react';

export default function SkillsSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [lang, setLang] = useState('Anglais');

  // 1. Translations for the UI elements
  const translations = {
    Anglais: {
      badge: "Skills & Expertise",
      title: "Technical Stack & Expertise",
      subtitle: "Modern full-stack development with AI, cloud-native architecture, and scalable solutions",
      showMore: "Show More",
      showLess: "Show Less"
    },
    Français: {
      badge: "Compétences & Expertise",
      title: "Stack Technique & Expertise",
      subtitle: "Développement full-stack moderne avec IA, architecture cloud-native et solutions évolutives",
      showMore: "Voir Plus",
      showLess: "Voir Moins"
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem("language") || 'Anglais');
    };
    
    // Initial load
    handleStorageChange();

    // Listen for changes
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const t = translations[lang];
  const displayedSkills = showAll ? data : data.slice(0, 3);

  return (
    <section id="skills" className="py-24">
      <SectionHeader 
        badge={t.badge} 
        title={t.title} 
        subtitle={t.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displayedSkills.map((category) => (
          <div 
            key={category.title.Anglais} 
            className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex flex-col h-full hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
          >            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-500/10 dark:bg-cyan-900/20 rounded-2xl text-cyan-500">
                {category.icon === "Brain" && <Brain size={24} />}
                {category.icon === "Cloud" && <Cloud size={24} />}
                {category.icon === "Monitor" && <Monitor size={24} />}
                {category.icon === "Braces" && <Braces size={24} />}
                {category.icon === "Database" && <Database size={24} />}
                {category.icon === "GitBranch" && <GitBranch size={24} />}
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight">
              {category.title[lang]}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-white dark:bg-slate-400/20 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-slate-100 dark:border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Unified Show More Button */}
      {data.length > 3 && (
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