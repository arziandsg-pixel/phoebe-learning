import { getCEFRProgress } from "@/lib/xp";

export function CEFRBadge({ xp }: { xp: number }) {
  const { level, nextLevel, progressPct, xpForNextLevel } = getCEFRProgress(xp);

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center gap-3">
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink via-lav to-cyan flex items-center justify-center shadow-xl">
        <span className="text-4xl font-extrabold text-white">{level}</span>
      </div>
      <p className="text-sm opacity-70">
        {nextLevel
          ? `Menuju ${nextLevel} · ${xpForNextLevel! - xp} XP lagi`
          : "Level tertinggi tercapai! 🎉"}
      </p>
      <div className="w-full max-w-xs h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink to-lav transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </div>
  );
}
