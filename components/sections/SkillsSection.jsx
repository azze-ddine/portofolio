"use client";
import { useState } from 'react';
import SectionHeader from "../ui/SectionHeader";
import { Cloud, Monitor, Brain, Database, Braces, GitBranch } from 'lucide-react';

export default function SkillsSection({ data }) {
  // 1. Initialize state
  const [showAll, setShowAll] = useState(false);

  // 2. Logic to filter displayed categories
  const displayedSkills = showAll ? data : data.slice(0, 3);

  return (
    <section id="skills" className="py-24">
      <SectionHeader 
        badge="Skills & Expertise" 
        title="Technical Stack & Expertise" 
        subtitle="Modern full-stack development with AI, cloud-native architecture, and scalable solutions"
      />

      {/* Grid mapping over displayedSkills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {displayedSkills.map((category) => (
          <div 
            key={category.title} 
            className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800 flex flex-col h-full hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
          >            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl text-cyan-500">
                {category.icon === "Brain" && <Brain size={24} />}
                {category.icon === "Cloud" && <Cloud size={24} />}
                {category.icon === "Monitor" && <Monitor size={24} />}
                {category.icon === "Braces" && <Braces size={24} />}
                {category.icon === "Database" && <Database size={24} />}
                {category.icon === "GitBranch" && <GitBranch size={24} />}
              </div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-slate-100 dark:border-slate-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button logic */}
      {data.length > 3 && (
        <div className="flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-10 py-3 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm active:scale-95"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </section>
  );
}