"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { getDefaultLevelStatuses } from "@/data/levels";
import type { Lang, LevelStatus, Profile, Theme } from "@/types";

interface ProfileContextValue {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  xpToday: number;
  addXp: (amount: number) => Promise<void>;
  updateProfile: (patch: Partial<Profile>) => Promise<void>;
  incrementWordsLearned: () => Promise<void>;
  incrementChatCount: () => Promise<void>;
  completeLevel: (levelId: number, xpReward: number) => Promise<void>;
  toggleTheme: () => Promise<void>;
  setLang: (lang: Lang) => Promise<void>;
  setXpTarget: (target: number) => Promise<void>;
  setReminder: (enabled: boolean) => Promise<void>;
  signOut: () => Promise<void>;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [xpSnapshot, setXpSnapshot] = useState(0);

  useEffect(() => {
    let active = true;

    async function load() {
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();

      if (!active) return;
      setUser(currentUser);

      if (!currentUser) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();

      if (!active) return;

      if (!error && data) {
        const nextProfile: Profile = {
          ...data,
          levels:
            Array.isArray(data.levels) && data.levels.length > 0
              ? data.levels
              : getDefaultLevelStatuses(),
        };

        const lastActive = localStorage.getItem("phoebe_last_active");
        const today = todayStr();
        if (lastActive !== today) {
          const yesterday = new Date(Date.now() - 86400000)
            .toISOString()
            .slice(0, 10);
          const newStreak = lastActive === yesterday ? nextProfile.streak + 1 : 1;
          localStorage.setItem("phoebe_last_active", today);
          nextProfile.streak = newStreak;
          await supabase
            .from("profiles")
            .update({ streak: newStreak })
            .eq("id", currentUser.id);
        }

        const snapshotDate = localStorage.getItem("phoebe_xp_snapshot_date");
        if (snapshotDate !== today) {
          localStorage.setItem("phoebe_xp_snapshot_date", today);
          localStorage.setItem("phoebe_xp_snapshot_value", String(nextProfile.xp));
          setXpSnapshot(nextProfile.xp);
        } else {
          setXpSnapshot(Number(localStorage.getItem("phoebe_xp_snapshot_value") ?? nextProfile.xp));
        }

        setProfile(nextProfile);

        if (nextProfile.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", nextProfile.theme);
      }

      setLoading(false);
    }

    load();

    return () => {
      active = false;
    };
  }, [supabase]);

  const updateProfile = useCallback(
    async (patch: Partial<Profile>) => {
      if (!user) return;
      setProfile((prev) => (prev ? { ...prev, ...patch } : prev));
      await supabase
        .from("profiles")
        .update({ ...patch, updated_at: new Date().toISOString() })
        .eq("id", user.id);
    },
    [supabase, user]
  );

  const addXp = useCallback(
    async (amount: number) => {
      if (!profile) return;
      await updateProfile({ xp: profile.xp + amount });
    },
    [profile, updateProfile]
  );

  const incrementWordsLearned = useCallback(async () => {
    if (!profile) return;
    await updateProfile({ words_learned: profile.words_learned + 1 });
  }, [profile, updateProfile]);

  const incrementChatCount = useCallback(async () => {
    if (!profile) return;
    await updateProfile({ chat_count: profile.chat_count + 1 });
  }, [profile, updateProfile]);

  const completeLevel = useCallback(
    async (levelId: number, xpReward: number) => {
      if (!profile) return;
      const levels: LevelStatus[] = profile.levels.map((l) =>
        l.id === levelId ? { ...l, done: true } : l
      );
      const nextId = levelId + 1;
      const alreadyUnlocked = levels.some((l) => l.id === nextId && l.unlocked);
      const finalLevels = alreadyUnlocked
        ? levels
        : levels.map((l) => (l.id === nextId ? { ...l, unlocked: true } : l));

      const wasDone = profile.levels.find((l) => l.id === levelId)?.done;

      await updateProfile({
        levels: finalLevels,
        xp: wasDone ? profile.xp : profile.xp + xpReward,
        lessons_finished: wasDone
          ? profile.lessons_finished
          : profile.lessons_finished + 1,
      });
    },
    [profile, updateProfile]
  );

  const toggleTheme = useCallback(async () => {
    if (!profile) return;
    const next: Theme = profile.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    await updateProfile({ theme: next });
  }, [profile, updateProfile]);

  const setLang = useCallback(
    async (lang: Lang) => {
      await updateProfile({ lang });
    },
    [updateProfile]
  );

  const setXpTarget = useCallback(
    async (target: number) => {
      await updateProfile({ xp_target: target });
    },
    [updateProfile]
  );

  const setReminder = useCallback(
    async (enabled: boolean) => {
      await updateProfile({ reminder: enabled });
    },
    [updateProfile]
  );

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }, [supabase, router]);

  return (
    <ProfileContext.Provider
      value={{
        user,
        profile,
        loading,
        xpToday: profile ? Math.max(0, profile.xp - xpSnapshot) : 0,
        addXp,
        updateProfile,
        incrementWordsLearned,
        incrementChatCount,
        completeLevel,
        toggleTheme,
        setLang,
        setXpTarget,
        setReminder,
        signOut,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
