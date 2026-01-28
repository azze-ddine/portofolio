export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-16 px-4">
      <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-cyan-200 dark:border-cyan-800">
        {badge}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
    </div>
  );
}