export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      {/* Added transition-colors to make the theme switch smooth */}
      <span className="text-cyan-500 inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 font-bold text-sm uppercase tracking-widest">
        {badge}
      </span>
      
      {/* Ensure title is bright white in dark mode */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
        {title}
      </h2>
      
      {/* Switched neutral to slate to match your Navbar/Background palette better */}
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}