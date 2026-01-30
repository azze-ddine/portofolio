"use client";
import { Waypoints, Download, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[88vh] flex flex-col items-center justify-center relative overflow-hidden px-6 lg:px-12 scroll-mt-24">
      {/* Background Gradient Overlay */}
      <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"></div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          
          {/* Profile Image with Ring Effect */}
          <div className="relative group shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 aspect-square rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-xl bg-white dark:bg-slate-800">
            <img 
              src="/profile.png" 
              alt="Azzeddine saf" 
              /* Changed 'object-cover' to 'object-cover object-bottom' to move the image down */
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
            />
          </div>
            {/* The animated/scaling outer border */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500 opacity-30 scale-105 animate-pulse pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <span className="text-cyan-600 dark:text-cyan-400 inline-block px-4 py-1 mb-4 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 font-bold text-primary tracking-wide">
              Full-Stack Developer
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
              Azzeddine Saf
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
               Software Engineer crafting smart, secure, and high-performance
               applications. From full-stack development to reactive programming, and modern UI development providing strong and scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3.5 flex justify-center items-center rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                <Waypoints className="mr-2 h-5 w-5" />
                <span>Contact me</span>
              </a>
              
              <a 
                href="/cv.pdf" 
                download="Azzeddine_Saf_CV" 
                className="px-8 py-3.5 flex justify-center items-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-bold active:scale-95"
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