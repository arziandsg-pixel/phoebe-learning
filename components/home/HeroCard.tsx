"use client";

import Link from "next/link";
import { useProfile } from "@/contexts/ProfileContext";
import { PhoebeSVG } from "@/components/phoebe/PhoebeSVG";
import { PhoebeBubble } from "@/components/phoebe/PhoebeBubble";
import { Button } from "@/components/ui/Button";

export function HeroCard() {
  const { profile, xpToday } = useProfile();
  if (!profile) return null;

  const target = profile.xp_target;
  const pct = Math.min(100, Math.round((xpToday / target) * 100));
  const reached = xpToday >= target;

  return (
    <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold">
          Halo, {profile.name}! 👋
        </h1>
        <div>
          <div className="flex justify-between text-sm font-semibold mb-1.5">
            <span>Target XP Harian</span>
            <span>
              {xpToday} / {target} XP
            </span>
          </div>
          <div className="h-3 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink to-lav transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-xs mt-1.5 opacity-70">
            {reached
              ? "🎉 Target harian tercapai! Kamu luar biasa!"
              : `Semangat! ${target - xpToday} XP lagi menuju target hari ini.`}
          </p>
        </div>
        <div>
          <Link href="/lessons">
            <Button>Mulai Pelajaran →</Button>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-3 shrink-0">
        <PhoebeSVG size={180} bob />
        <PhoebeBubble>Tu fais du bon travail! ✨</PhoebeBubble>
      </div>
    </div>
  );
}
