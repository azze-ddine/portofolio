"use client";
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { ArrowRight, RotateCw } from 'lucide-react';

export default function NewsSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  // Track which specific card is flipped
  const [flippedCard, setFlippedCard] = useState(null);
  
  const visibleNews = showAll ? data : data.slice(0, 3);

  const toggleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="news" className="py-24 scroll-mt-24">
      <SectionHeader 
        badge="News" 
        title="Latest updates" 
        subtitle="A collection of my recent achievements, publications in technology."
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {visibleNews.map((item, index) => (
          <div key={index} className="h-[380px] [perspective:1000px]">
            {/* Inner Flipper Container */}
            <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${flippedCard === index ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* FRONT SIDE */}
              <div className="absolute inset-0 h-full w-full bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col [backface-visibility:hidden] shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">
                    {item.date}
                  </span>
                  {/* The Flip Button - matching date font */}
                  <button 
                    onClick={() => toggleFlip(index)}
                    className="text-slate-400 dark:text-slate-500 text-sm font-medium flex items-center gap-1 hover:text-cyan-500 transition-colors uppercase tracking-wider"
                  >
                    Flip <RotateCw size={14} />
                  </button>
                </div>

                <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-4">
                  {item.excerpt}
                </p>
                <a href={item.link} className="text-cyan-500 font-bold flex items-center gap-2 hover:underline group">
                  Read more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* BACK SIDE (Hackathon/Seminar Image) */}
              <div className="absolute inset-0 h-full w-full rounded-[2rem] bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex flex-col justify-end p-8">
                   <button 
                    onClick={() => toggleFlip(index)}
                    className="absolute top-6 right-8 text-white/70 text-sm font-medium flex items-center gap-1 hover:text-white"
                  >
                    Back <RotateCw size={14} />
                  </button>
                  <p className="text-white font-bold text-lg leading-tight">{item.title}</p>
                  <p className="text-cyan-400 text-xs font-bold mt-2 uppercase">Seminar Event</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm active:scale-95"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}