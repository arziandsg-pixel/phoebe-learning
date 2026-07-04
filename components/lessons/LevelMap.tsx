"use client";

import { useProfile } from "@/contexts/ProfileContext";
import { LEVELS, TRACK_LABELS, getDefaultLevelStatuses } from "@/data/levels";
import { LevelCard } from "@/components/lessons/LevelCard";
import type { Track } from "@/types";

const TRACKS: Track[] = ["A1-A2", "B1-B2", "C1-C2"];

export function LevelMap() {
  const { profile } = useProfile();
  const levelStatuses = profile?.levels?.length ? profile.levels : getDefaultLevelStatuses();

  return (
    <div className="flex flex-col gap-10">
      {TRACKS.map((track) => {
        const trackInfo = TRACK_LABELS[track];
        const levels = LEVELS.filter((l) => l.track === track);

        return (
          <div key={track}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-3 h-3 rounded-full ${trackInfo.dotClass}`} />
              <h2 className="font-extrabold text-lg">{trackInfo.label}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {levels.map((level) => {
                const status = levelStatuses.find((s) => s.id === level.id) ?? {
                  id: level.id,
                  unlocked: level.id === 1,
                  done: false,
                };
                return <LevelCard key={level.id} level={level} status={status} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
