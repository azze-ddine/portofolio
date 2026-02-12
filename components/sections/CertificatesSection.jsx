"use client";
import { useState, useEffect } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Award, ArrowDown } from 'lucide-react';

export default function CertificatesSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  const [lang, setLang] = useState('Anglais');

  const translations = {
    Anglais: {
      badge: "Certifications",
      title: "Professional Certifications",
      subtitle: "Recognized achievements and professional certifications in technology",
      issuedBy: "Issued by",
      showMore: "Show More",
      showLess: "Show Less"
    },
    Français: {
      badge: "Certifications",
      title: "Certifications Professionnelles",
      subtitle: "Réalisations reconnues et certifications professionnelles en technologie",
      issuedBy: "Délivré par",
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
  const displayedCerts = showAll ? data : data.slice(0, 3);

  return (
    <section id="certificates" className="py-24">
      <SectionHeader 
        badge={t.badge} 
        title={t.title} 
        subtitle={t.subtitle}
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {displayedCerts.map((cert, index) => (
          <div key={index} className="group h-[320px] [perspective:1000px]">
            {/* Inner Flipper */}
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* FRONT SIDE */}
              <div className="absolute inset-0 h-full w-full rounded-3xl bg-white dark:bg-slate-900/50 p-8 border border-slate-100 dark:border-slate-800 shadow-sm [backface-visibility:hidden] flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-500">
                    <Award size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-slate-300 dark:text-slate-600 font-mono text-sm font-bold">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-cyan-500 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                  {t.issuedBy} {cert.issuer}
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* BACK SIDE (Certificate Image) */}
              <div className="absolute inset-0 h-full w-full rounded-3xl bg-white dark:bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent">
                  <p className="text-white text-xs font-bold">{cert.title}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Unified Pagination Button */}
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