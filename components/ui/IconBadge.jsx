export default function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
      {children}
    </span>
  );
}
