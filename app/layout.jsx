import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Removed bg-transparent and dark:bg-slate-900 */}
      <body className="antialiased"> 
        <Navbar />
        <div className="flex-1"> 
          {children}
        </div>
         <Footer />
      </body>
    </html>
  );
}