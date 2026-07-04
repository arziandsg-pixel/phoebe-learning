export function StatBox({ emoji, label, value }: { emoji: string; label: string; value: number }) {
  return (
    <div className="glass-card p-5 text-center">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-xs opacity-60">{label}</div>
    </div>
  );
}
