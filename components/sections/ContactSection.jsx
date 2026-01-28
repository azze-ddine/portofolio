// Add this line at the top:
import SectionHeader from "../ui/SectionHeader"; 
import { Github, Linkedin, Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactSection() {
  const socials = [
    { name: 'GitHub', icon: <Github />, link: '#' },
    // ... rest of your socials
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-200">
      {/* Now SectionHeader will be defined */}
      <SectionHeader badge="Contact" title="Get in Touch" />
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* ... rest of your code */}
      </div>
    </section>
  );
}