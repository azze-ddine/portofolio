"use client";
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Award } from 'lucide-react';

export default function CertificatesSection({ data }) {
  // 1. Initialize state
  const [showAll, setShowAll] = useState(false);
  // 2. Determine which certificates to display
  const displayedCerts = showAll ? data : data.slice(0, 3);
  return (
    <section id="certificates" className="py-24">
      <SectionHeader 
        badge="Certifications" 
        title="Professional Certifications" 
        subtitle="Recognized achievements and professional certifications in technology"
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {displayedCerts.map((cert, index) => (
          <div key={index} className="group h-[320px] [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                  Issued by {cert.issuer}
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-3xl bg-white dark:bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <p className="text-white text-xs font-bold">{cert.title}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
                {/* 4. Button Logic */}
          {data.length > 3 && (
            <div className="flex justify-center">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
      )}
    </section>
  );
}