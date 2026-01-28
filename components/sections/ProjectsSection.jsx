import SectionHeader from "../ui/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsSection({}) {
  return (
    <section id="projects" className="py-20">
      <SectionHeader 
        badge="Projects" 
        title="Featured Projects" 
        subtitle="A selection of my recent projects, showcasing my technical expertise and problem-solving abilities"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
               {/* Replace with <Image /> tag for Next.js optimization later */}
               <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="font-bold text-xl mb-3 text-slate-900">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>
              <button className="text-primary font-semibold hover:gap-3 flex items-center gap-2 transition-all">
                View details <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}