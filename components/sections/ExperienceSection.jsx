import SectionHeader from "../ui/SectionHeader";
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperienceSection({ data }) {
  return (
    <section id="experience" className="py-24">
      <SectionHeader 
        badge="Experience" 
        title="Professional Experience" 
        subtitle="Hands-on experience across multiple companies, building real-world solutions"
      />
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((exp, idx) => (
          <div key={idx} className="glass-card p-8 rounded-[2rem] relative hover:translate-y-[-4px] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-500">
                <Briefcase size={28} />
              </div>
              <span className="bg-cyan-50 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-xl text-xs font-bold border border-cyan-100 dark:border-cyan-800">
                {exp.period}
              </span>
            </div>
            <h3 className="font-bold text-2xl text-slate-900 dark:text-white">{exp.role}</h3>
            <h4 className="text-cyan-500 font-bold text-lg mb-4 uppercase tracking-wide">{exp.company}</h4>
            <p className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-medium">
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
    </section>
  );
}