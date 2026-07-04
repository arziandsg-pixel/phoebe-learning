"use client";

import Link from "next/link";
import type { Level, LevelStatus } from "@/types";
import { useToast } from "@/components/ui/Toast";

export function LevelCard({ level, status }: { level: Level; status: LevelStatus }) {
  const { showToast } = useToast();

  if (status.done) {
    return (
      <Link
        href={`/lessons/${level.id}`}
        className="glass-card card-hover p-5 border-2 border-green flex flex-col gap-2"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold opacity-60">Level {level.id}</span>
          <span className="text-green text-lg">✅</span>
        </div>
        <h3 className="font-extrabold">{level.title}</h3>
        <p className="text-xs opacity-60">{level.description}</p>
        <div className="h-2 rounded-full bg-green/20 overflow-hidden mt-1">
          <div className="h-full w-full bg-green" />
        </div>
      </Link>
    );
  }

  if (!status.unlocked) {
    return (
      <button
        onClick={() => showToast("🔒 Selesai level sebelumnya dulu!")}
        className="glass-card p-5 flex flex-col gap-2 opacity-[0.42] cursor-not-allowed text-left"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold opacity-60">Level {level.id}</span>
          <span className="text-lg">🔒</span>
        </div>
        <h3 className="font-extrabold">{level.title}</h3>
        <p className="text-xs opacity-60">{level.description}</p>
      </button>
    );
  }

  return (
    <Link
      href={`/lessons/${level.id}`}
      className="level-pulse glass-card card-hover p-5 border-2 border-pink flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold opacity-60">Level {level.id}</span>
        <span className="text-xs font-bold bg-gold/15 text-gold px-2 py-0.5 rounded-full">
          +{level.xpReward} XP
        </span>
      </div>
      <h3 className="font-extrabold">{level.title}</h3>
      <p className="text-xs opacity-60">{level.description}</p>
      <span className="mt-1 text-sm font-bold text-pink2">▶ Mulai Pelajaran</span>
    </Link>
  );
}
