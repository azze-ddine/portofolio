"use client";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="skills" className="min-h-screen"></section>
      <section id="projects" className="min-h-screen"></section>
      <section id="experience" className="min-h-screen"></section>
      <section id="education" className="min-h-screen"></section>
      <section id="certificates" className="min-h-screen"></section>
      <section id="contact" className="min-h-screen"></section>
    </main>
  );
}
