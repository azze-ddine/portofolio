"use client";
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { ArrowRight } from 'lucide-react';

export default function NewsSection({ data }) {
  const [showAll, setShowAll] = useState(false);
  
  // Display initial 3 items, or all if toggled
  const visibleNews = showAll ? data : data.slice(0, 3);

  return (
    <section id="news" className="py-24">
      <SectionHeader 
        badge="News" 
        title="Latest updates" 
        subtitle="A collection of my recent achievements, publications in technology."
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {visibleNews.map((item, index) => (
          <div key={index} className="bg-white dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300">
            <span className="text-slate-400 dark:text-slate-500 text-sm mb-4 font-medium">
              {item.date}
            </span>
            <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white leading-tight">
              {item.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {item.excerpt}
            </p>
            <a href={item.link} className="text-cyan-500 font-bold flex items-center gap-2 hover:underline group">
              Read more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}