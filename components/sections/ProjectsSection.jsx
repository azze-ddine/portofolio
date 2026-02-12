"use client";
import React, { useCallback, useRef, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowDown } from 'lucide-react';
import SectionHeader from "../ui/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [lang, setLang] = useState('Anglais');

  const translations = {
    Anglais: {
      badge: "Projects",
      title: "Featured Projects",
      subtitle: "A selection of my recent projects, showcasing my technical expertise and problem-solving abilities",
      showMore: "Show More",
      showLess: "Show Less",
      viewDetails: "View Details"
    },
    Français: {
      badge: "Projets",
      title: "Projets En Vedette",
      subtitle: "Une sélection de mes projets récents, illustrant mon expertise technique et ma capacité à résoudre des problèmes",
      showMore: "Voir Plus",
      showLess: "Voir Moins",
      viewDetails: "Voir Détails"
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
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24">
      <SectionHeader 
        badge={t.badge} 
        title={t.title} 
        subtitle={t.subtitle}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displayedProjects.map((project) => (
          /* Using Anglais title as a unique key string */
          <ProjectCard 
            key={project.title.Anglais} 
            project={project} 
            viewDetailsText={t.viewDetails} 
            lang={lang} 
          />
        ))}
      </div>

      {projects.length > 3 && (
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

function ProjectCard({ project, viewDetailsText, lang }) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div 
      className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => autoplay.current.play()}
      onMouseLeave={() => autoplay.current.stop()}
    >
      <div className="relative aspect-video w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full w-full">
          {project.image.map((img, idx) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full w-full" key={idx}>
              <img 
                src={img} 
                alt={project.title[lang]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <button 
            onClick={scrollPrev} 
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-md hover:bg-cyan-500 hover:text-white transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={scrollNext} 
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-md hover:bg-cyan-500 hover:text-white transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white leading-tight transition-colors group-hover:text-cyan-600">
          {project.title[lang]}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-3">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies?.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-400/20 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-cyan-900/20 group/btn flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-bold text-sm transition-all hover:bg-cyan-500 hover:text-white"
          >
            {viewDetailsText}
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}