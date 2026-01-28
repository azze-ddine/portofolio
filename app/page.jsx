"use client";
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import NewsSection from '@/components/sections/NewsSection';
import CertificatesSection from '@/components/sections/CertificatesSection';

// --- THE FIX IS IN THIS BLOCK ---
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { news } from '@/data/news';
import { certificates } from '@/data/certificates';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects'; // <--- ADD THIS LINE
// --------------------------------

export default function Home() {
  return (
    // Change bg-transparent to allow the body's background-color to show through
    <main className="min-h-screen max-w-7xl mx-auto px-6 overflow-x-hidden">
      <HeroSection />
      <SkillsSection data={skills} />
      <ProjectsSection data={projects} /> 
      <ExperienceSection data={experience} />
      
      {/* Refactored Education wrapper: removed bg-white/40 */}
      <div className="relative py-24 -mx-6 lg:-mx-12">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-800/20 pointer-events-none transition-colors duration-300"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
           <EducationSection data={education} />
        </div>
      </div>

      <NewsSection data={news} />
      <CertificatesSection data={certificates} />
      <ContactSection />
    </main>
  );
}