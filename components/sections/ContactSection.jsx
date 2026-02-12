"use client";
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactSection() {
  const [lang, setLang] = useState('Anglais');

  const translations = {
    Anglais: {
      badge: "Contact",
      title: "Get in Touch",
      subtitle: "Interested in working together? Feel free to reach out through any of these channels.",
      connectTitle: "Connect with me",
      locationTitle: "Location",
      locationText: "Based in Rabat, Morocco"
    },
    Français: {
      badge: "Contact",
      title: "Contactez-moi",
      subtitle: "Intéressé par une collaboration ? N'hésitez pas à me contacter via l'un de ces canaux.",
      connectTitle: "Réseaux sociaux",
      locationTitle: "Localisation",
      locationText: "Basé à Rabat, Maroc"
    }
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

  const t = translations[lang];

  const contactLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/azze-ddine',
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/azzeddine-saf-064018241/',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: 'Email',
      href: 'mailto:azzeddineitsaf@gmail.com',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/212635756315',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      name: '+212 635 756 315',
      href: 'tel:+212635756315',
      icon: <Phone className="w-6 h-6" />,
    }
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-500 inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 font-bold text-sm uppercase tracking-widest">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Connect Links */}
          <div>
            <h3 className="font-bold text-2xl mb-6 text-slate-900 dark:text-white">{t.connectTitle}</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-50/50 dark:hover:bg-slate-800/50 transition-all bg-white dark:bg-slate-900 group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-cyan-500 group-hover:text-white text-slate-600 dark:text-slate-400 transition-all">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">{link.name}</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{link.username}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Location & Map */}
          <div className="flex flex-col h-full">
            <h3 className="font-bold text-2xl mb-6 text-slate-900 dark:text-white">
              {t.locationTitle}
            </h3>
            
            {/* Main Container: uses flex-grow to stretch and match the height of the left column */}
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col flex-grow">
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2 font-medium">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                {t.locationText}
              </p>

              {/* Map Wrapper: Removed aspect-video, added flex-grow to fill all vertical space */}
              <div className="flex-grow min-h-[300px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner group relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.85141011885!2d-6.9118162!3d33.9691866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8764834515%3A0x717906d649d6820c!2sRabat%2C%20Morocco!5e0!3m2!1sen!2s!4v1715600000000!5m2!1sen!2s" 
                  className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] dark:invert-[90%] dark:hue-rotate-180 transition-all group-hover:grayscale-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}