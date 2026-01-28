export default function Card({ children }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition">
      {children}
    </div>
  );
}
