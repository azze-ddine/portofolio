"use client";
import React, { useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from "../ui/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 dark:bg-transparent">
      <SectionHeader 
        badge="Projects" 
        title="Featured Projects" 
        subtitle="A selection of my recent projects, showcasing my technical expertise and problem-solving abilities"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
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
      {/* Container: aspect-video (16:9) matches the screenshots better than 1.4/1 */}
      <div className="relative aspect-video w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full w-full">
          {project.image.map((img, idx) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full w-full" key={idx}>
              <img 
                src={img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

        {/* Carousel Arrows - Matches the circular grey style in capture */}
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

      {/* Content Area - Reduced padding to p-5 to match the compact capture look */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white leading-tight transition-colors group-hover:text-cyan-600">
          {project.title}
        </h3>
        
        <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags - Rounded-lg and subtle background */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies?.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800 rounded-lg text-[11px] font-semibold text-slate-600 dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button - Perfectly matching the light-blue bar at bottom */}
        <div className="mt-auto pt-2">
          <a 
            href={project.link} 
            className="w-full py-2.5 px-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-900/20 group/btn flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-bold text-sm transition-all hover:bg-cyan-100"
          >
            View Details
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}