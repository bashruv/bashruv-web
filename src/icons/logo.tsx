export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`font-modern-dos tracking-tighter text-xl border-gray-300 border-2 px-4 pt-2 pb-1 rounded-full ${
        className || ""
      }`}
    >
      bashruv&apos;s lab
    </span>
  );
}
