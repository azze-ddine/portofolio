"use client";
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [lang, setLang] = useState('Anglais');

  // 1. Translation for the copyright text
  const translations = {
    Anglais: "All rights reserved.",
    Français: "Tous les droits réservés."
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem("language") || 'Anglais');
    };
    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/azze-ddine', 
      icon: <Github size={20} /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/azzeddine-saf-064018241/', 
      icon: <Linkedin size={20} /> 
    },
    { 
      name: 'Email', 
      href: 'mailto:azzeddineitsaf@gmail.com', 
      icon: <Mail size={20} /> 
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Copyright Section */}
        <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {currentYear} <span className="text-slate-900 dark:text-white font-bold">Azzeddine Saf</span>. {translations[lang]}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-500 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}