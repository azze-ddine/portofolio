"use client";
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  // 1. Manage the theme state locally
  const [isDark, setIsDark] = useState(false);

  // 2. Initialize the theme based on previous settings or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // 3. Toggle function to update State, DOM, and LocalStorage
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-900 dark:text-white">
          Azzeddine SAF<span className="text-cyan-500">.</span>
        </div>
        
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 4. The Functional Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all shadow-sm group"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun size={18} className="transition-transform group-hover:rotate-45" />
          ) : (
            <Moon size={18} className="transition-transform group-hover:-rotate-12" />
          )}
        </button>
      </div>
    </nav>
  );
}