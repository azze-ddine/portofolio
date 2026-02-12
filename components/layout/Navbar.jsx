"use client";
import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('Anglais'); // 'Anglais' or 'Français'
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  // 1. Translation Dictionary
  const translations = {
    Anglais: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      news: 'News',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    Français: {
      home: 'Accueil',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Éducation',
      news: 'Actualités',
      certificates: 'Certificats',
      contact: 'Contact',
    }
  };

  useEffect(() => {
    // Precise Theme Initialization
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("language");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Init Theme
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Init Language
    if (savedLang) setLang(savedLang);

    // Click Outside Logic
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLangChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
    setIsLangOpen(false);
  };

  const navLinks = [
    { id: 'home', href: '#' },
    { id: 'skills', href: '#skills' },
    { id: 'projects', href: '#projects' },
    { id: 'experience', href: '#experience' },
    { id: 'education', href: '#education' },
    { id: 'news', href: '#news' },
    { id: 'certificates', href: '#certificates' },
    { id: 'contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          Azzeddine SAF<span className="text-cyan-500">.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} 
               className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm font-medium">
              {translations[lang][link.id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-[13px] font-semibold"
            >
              <Globe size={16} className="text-cyan-500" />
              <span>{lang}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden py-1">
                {['Anglais', 'Français'].map((language) => (
                  <button 
                    key={language}
                    onClick={() => handleLangChange(language)}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {language}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-90"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4 py-4 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 border-b border-slate-50 dark:border-slate-900 pb-2"
            >
              {translations[lang][link.id]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}