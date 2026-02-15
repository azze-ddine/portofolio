import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/developer_mode_tv/default/48px.svg" type="image/svg+xml"></link>
      {/* Removed bg-transparent and dark:bg-slate-900 */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
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