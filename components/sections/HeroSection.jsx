"use client";
import { Waypoints, Download, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[88vh] flex flex-col items-center justify-center relative overflow-hidden px-6 lg:px-12 scroll-mt-24">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent dark:from-cyan-500/20 pointer-events-none"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          
          {/* Profile Image with Ring Effect */}
          <div className="relative group">
            <div className="w-50 h-50 md:w-66 md:h-66 rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-xl bg-white dark:bg-slate-800">
              <img 
                src="/profile.png" 
                alt="Azzeddine saf" 
                className="w-full h-full object-cover object-scale-110 transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            {/* The animated/scaling outer border */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500 opacity-30 scale-105 animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <span className="text-cyan-600 dark:text-cyan-400 inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 font-bold text-sm tracking-wide">
              Full-Stack Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              Azzeddine Saf
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              Software Engineer crafting smart, secure, and high-performance applications. 
              From full-stack development to DevOps pipelines and automation, I turn ideas into reliable digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 flex justify-center items-center rounded-lg bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-200 dark:shadow-none"
              >
                <Waypoints className="mr-2 h-5 w-5" />
                <span>Contact me</span>
              </a>
              
              <a 
                href="/cv.pdf" 
                download="Azzeddine_Saf_CV" 
                className="px-6 py-3 flex justify-center items-center rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-colors font-bold"
              >
                <Download className="mr-2 h-5 w-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
}