"use client";
import { useState, useEffect } from 'react';
import { Waypoints, Download, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [lang, setLang] = useState('Anglais');

  // Translations object
  const translations = {
    Anglais: {
      badge: "Available for projects",
      description: "Software Engineer focused on building secure, high-performance applications. Specializing in full-stack development and modern UI design.",
      ctaTalk: "Let's Talk",
      ctaCV: "Download CV",
      scroll: "Scroll"
    },
    Français: {
      badge: "Disponible pour projets",
      description: "Ingénieur Logiciel concentré sur la création d'applications sécurisées et performantes. Spécialisé en développement full-stack et design UI moderne.",
      ctaTalk: "Discutons",
      ctaCV: "Télécharger CV",
      scroll: "Défiler"
    }
  };

  useEffect(() => {
    // 1. Initial check
    const savedLang = localStorage.getItem("language") || 'Anglais';
    setLang(savedLang);

    // 2. Listen for language changes from Navbar
    const handleStorageChange = () => {
      const currentLang = localStorage.getItem("language") || 'Anglais';
      setLang(currentLang);
    };

    // This listener catches changes from the same window
    window.addEventListener('storage', handleStorageChange);
    
    // Custom interval check (fallback) to ensure reactivity when clicking the toggle
    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const t = translations[lang];

  return (
    <section id="home" className="min-h-[88vh] flex flex-col items-center justify-center relative overflow-hidden px-6 lg:px-12 scroll-mt-24">
      
      {/* --- BACKGROUND EFFECT START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>
      {/* --- BACKGROUND EFFECT END --- */}

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
          
          {/* Profile Image with Ring Effect */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-40 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden border-2 border-white/20 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
              <img 
                src="/profile.png" 
                alt="Azzeddine saf" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/50 scale-100 animate-[ping_3s_linear_infinite] pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest">
                {t.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight flex items-center justify-center md:justify-start">
                  <span className="relative overflow-hidden whitespace-nowrap border-r-4 border-cyan-500 pr-2 animate-typewriter">
                    Azzeddine SAF<span className="text-cyan-500">.</span>
                  </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
               {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-4 flex justify-center items-center rounded-2xl bg-slate-900 dark:bg-cyan-600 hover:bg-slate-800 dark:hover:bg-cyan-500 text-white font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <Waypoints className="mr-2 h-5 w-5" />
                <span>{t.ctaTalk}</span>
              </a>
              
              <a 
                href="/cv.pdf" 
                download 
                className="px-8 py-4 flex justify-center items-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold hover:-translate-y-1 active:scale-95"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>{t.ctaCV}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">{t.scroll}</span>
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
}