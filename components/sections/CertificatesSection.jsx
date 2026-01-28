import SectionHeader from "../ui/SectionHeader";
import { Award } from 'lucide-react';

export default function CertificatesSection({ data }) {
  return (
    <section id="certificates" className="py-24">
      <SectionHeader 
        badge="Certifications" 
        title="Professional Certifications" 
        subtitle="Recognized achievements and professional certifications in technology"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-900/50 transition-all duration-300 shadow-sm group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-500 group-hover:scale-110 transition-transform">
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
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}