"use client";

import { useProfile } from "@/contexts/ProfileContext";
import { CEFRBadge } from "@/components/progress/CEFRBadge";
import { StatBox } from "@/components/progress/StatBox";
import { SkillBars } from "@/components/progress/SkillBars";
import { BadgeGrid } from "@/components/progress/BadgeGrid";

export default function ProgressPage() {
  const { profile } = useProfile();
  if (!profile) return null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">🏆 Kemajuan</h1>
        <p className="text-sm opacity-60 mt-1">Lihat perkembangan belajarmu sejauh ini.</p>
      </div>

      <CEFRBadge xp={profile.xp} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox emoji="⭐" label="XP Total" value={profile.xp} />
        <StatBox emoji="🔤" label="Kata Dipelajari" value={profile.words_learned} />
        <StatBox emoji="🔥" label="Hari Streak" value={profile.streak} />
        <StatBox emoji="📚" label="Lesson Selesai" value={profile.lessons_finished} />
      </div>

      <SkillBars profile={profile} />
      <BadgeGrid profile={profile} />
    </div>
  );
}
