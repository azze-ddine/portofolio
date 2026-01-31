"use client";
import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('Anglais');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

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
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'News', href: '#news' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          Azzeddine SAF<span className="text-cyan-500">.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors text-sm font-medium">
              {link.name}
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
                <button 
                  onClick={() => { setLang('Anglais'); setIsLangOpen(false); }}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-600 transition-colors"
                >
                  Anglais
                </button>
                <button 
                  onClick={() => { setLang('Français'); setIsLangOpen(false); }}
                  className="w-full text-left px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-cyan-50 dark:hover:bg-cyan-950 hover:text-cyan-600 transition-colors"
                >
                  Français
                </button>
              </div>
            )}
          </div>

          <button onClick={toggleTheme} className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600 dark:text-slate-300 border-b border-slate-50 dark:border-slate-900 pb-2">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}