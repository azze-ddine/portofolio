"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white dark:bg-[#0B0F19] transition-colors">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
        {children}
      </body>
    </html>
  );
}
