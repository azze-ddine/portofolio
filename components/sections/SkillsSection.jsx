import SectionHeader from "../ui/SectionHeader";
import { Cloud, Monitor, Brain, Database, Braces, GitBranch } from 'lucide-react'; // Example icons

export default function SkillsSection({ data }) {
  return (
    <section id="skills" className="py-20">
      <SectionHeader 
        badge="Skills & Expertise" 
        title="Technical Stack & Expertise" 
        subtitle="Modern full-stack development with AI, cloud-native architecture, and scalable solutions"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((category) => (
              <div key={category.title} className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex flex-col h-full hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">            
              <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-500">
                {category.icon === "Brain" && <Brain size={24} />}
                {category.icon === "Cloud" && <Cloud size={24} />}
                {category.icon === "Monitor" && <Monitor size={24} />}
                {category.icon === "Braces" && <Braces size={24} />}
                {category.icon === "Database" && <Database size={24} />}
                {category.icon === "GitBranch" && <GitBranch size={24} />}
                
              </div>
              <h3 className="font-bold text-xl">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg text-sm border border-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}