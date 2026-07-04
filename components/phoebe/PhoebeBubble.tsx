export function PhoebeBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative glass-card px-5 py-3 max-w-xs text-sm font-semibold">
      {children}
      <div
        className="absolute -bottom-2 left-8 w-4 h-4 rotate-45 bg-surface-glass border-b border-r border-border-glass"
        aria-hidden="true"
      />
    </div>
  );
}
