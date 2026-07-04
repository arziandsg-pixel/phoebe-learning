import type { CEFRLevel } from "@/types";

export const CEFR_THRESHOLDS: { level: CEFRLevel; min: number; max: number }[] = [
  { level: "A1", min: 0, max: 99 },
  { level: "A2", min: 100, max: 299 },
  { level: "B1", min: 300, max: 599 },
  { level: "B2", min: 600, max: 1199 },
  { level: "C1", min: 1200, max: 1999 },
  { level: "C2", min: 2000, max: Infinity },
];

export function getCEFRLevel(xp: number): CEFRLevel {
  const tier = CEFR_THRESHOLDS.find((t) => xp >= t.min && xp <= t.max);
  return tier?.level ?? "A1";
}

export function getCEFRProgress(xp: number): {
  level: CEFRLevel;
  nextLevel: CEFRLevel | null;
  progressPct: number;
  xpIntoLevel: number;
  xpForNextLevel: number | null;
} {
  const idx = CEFR_THRESHOLDS.findIndex((t) => xp >= t.min && xp <= t.max);
  const tier = CEFR_THRESHOLDS[idx];
  const next = CEFR_THRESHOLDS[idx + 1] ?? null;

  if (!next) {
    return {
      level: tier.level,
      nextLevel: null,
      progressPct: 100,
      xpIntoLevel: xp - tier.min,
      xpForNextLevel: null,
    };
  }

  const span = next.min - tier.min;
  const xpIntoLevel = xp - tier.min;
  const progressPct = Math.min(100, Math.round((xpIntoLevel / span) * 100));

  return {
    level: tier.level,
    nextLevel: next.level,
    progressPct,
    xpIntoLevel,
    xpForNextLevel: next.min,
  };
}

export const XP_REWARDS = {
  chatMessage: 5,
  profileSetup: 15,
  onboardingDone: 10,
};
