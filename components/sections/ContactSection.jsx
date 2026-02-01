"use client";
import { label } from 'framer-motion/client';
import { Github, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactSection() {
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
      name: 'WhatsApp', // Corrected spelling
      href: 'https://wa.me/212635756315', // Corrected URL to use wa.me for WhatsApp
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      name: '+212 635756315',
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Interested in working together? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Connect Links */}
          <div>
            <h3 className="font-bold text-2xl mb-6 text-slate-900 dark:text-white">Connect with me</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-50/50 dark:hover:bg-slate-800/50 transition-all bg-white dark:bg-slate-900 group"
                >
                  <div className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">{link.name}</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Location & Map */}
          <div>
            <h3 className="font-bold text-2xl mb-6 text-slate-900 dark:text-white">Location</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Based in Rabat, Morocco
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106371.74515512762!2d-7.6693945!3d33.5722678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778a113a1%3A0x10cb5517300c14c5!2sRabat!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}