import type { Profile } from "@/types";
import { BADGES } from "@/lib/badges";

export function BadgeGrid({ profile }: { profile: Profile }) {
  return (
    <div className="glass-card p-6">
      <h3 className="font-extrabold mb-4">Koleksi Badge</h3>
      <div className="grid grid-cols-3 gap-3">
        {BADGES.map((badge) => {
          const earned = badge.condition(profile);
          return (
            <div
              key={badge.id}
              title={badge.description}
              className={`flex flex-col items-center gap-1 p-4 rounded-xl text-center ${
                earned
                  ? "bg-gradient-to-br from-pink/20 to-lav/20"
                  : "bg-black/5 dark:bg-white/5 grayscale opacity-50"
              }`}
            >
              <span className="text-3xl">{badge.emoji}</span>
              <span className="text-xs font-bold leading-tight">{badge.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
