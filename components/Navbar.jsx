"use client";

import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">
          Azzeddine SAF<span className="text-white">.</span>
        </h1>

        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}
