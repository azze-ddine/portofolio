import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Removed bg-transparent and dark:bg-slate-900 */}
      <body className="antialiased"> 
        <Navbar />
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}