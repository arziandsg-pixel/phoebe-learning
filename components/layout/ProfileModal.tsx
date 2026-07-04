"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/contexts/ProfileContext";
import { BADGES } from "@/lib/badges";
import { getCEFRLevel } from "@/lib/xp";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { t } from "@/lib/i18n";

const AVATAR_OPTIONS = [
  "😊", "😎", "🥳", "😇", "🤓", "😺", "🐶", "🐱", "🐰", "🦊",
  "🐻", "🐼", "🐨", "🐯", "🦁", "🐸", "🐵", "🦄", "🐧", "🦋",
  "🌸", "🌻", "🌈", "⭐", "🎀", "🎈", "🍓", "🍩", "☕", "🎌",
];

export function ProfileModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { profile, updateProfile, addXp, toggleTheme, setLang, setXpTarget, setReminder, signOut } =
    useProfile();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("😊");

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setBio(profile.bio ?? "");
      setAvatar(profile.avatar);
    }
  }, [profile]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!profile) return null;

  const needsSetup = !profile.name || profile.name === "User";
  const showSetupForm = needsSetup || editing;

  async function handleSaveProfile() {
    await updateProfile({ name: name.trim() || "Pelajar", bio: bio.trim() || null, avatar });
    if (needsSetup) {
      await addXp(15);
    }
    setEditing(false);
  }

  async function handleReminderToggle() {
    const nextEnabled = !profile!.reminder;
    if (nextEnabled && typeof window !== "undefined" && "Notification" in window) {
      await Notification.requestPermission();
    }
    await setReminder(nextEnabled);
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[95] glass-card rounded-none sm:rounded-l-3xl overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold">{t(profile.lang, "profile_title")}</h2>
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-lg"
            >
              ✕
            </button>
          </div>

          {showSetupForm ? (
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-semibold opacity-80 mb-2">Pilih Avatar</p>
                <div className="grid grid-cols-6 gap-2">
                  {AVATAR_OPTIONS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setAvatar(emoji)}
                      className={`text-xl w-full aspect-square flex items-center justify-center rounded-xl transition-all ${
                        avatar === emoji
                          ? "bg-gradient-to-br from-pink to-lav scale-110 shadow-md"
                          : "bg-black/5 dark:bg-white/5 hover:scale-105"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
              <Input
                label="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                placeholder="Nama kamu"
              />
              <Input
                label="Bio (opsional)"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={60}
                placeholder="Ceritakan sedikit tentang kamu"
              />
              <Button onClick={handleSaveProfile}>
                {needsSetup ? "Simpan Profil → +15 XP" : "Simpan Perubahan"}
              </Button>
              {editing && (
                <button
                  onClick={() => setEditing(false)}
                  className="text-sm opacity-60 hover:opacity-100"
                >
                  Batal
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink to-lav flex items-center justify-center text-4xl shadow-lg">
                {profile.avatar}
              </div>
              <h3 className="text-lg font-bold">{profile.name}</h3>
              {profile.bio && <p className="text-sm opacity-70">{profile.bio}</p>}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold bg-lav/20 text-lav px-3 py-1 rounded-full">
                  {getCEFRLevel(profile.xp)}
                </span>
                <span className="text-xs font-bold bg-gold/15 text-gold px-3 py-1 rounded-full">
                  ⭐ {profile.xp} XP
                </span>
                <span className="text-xs font-bold bg-pink/15 text-pink2 px-3 py-1 rounded-full">
                  🔥 {profile.streak}
                </span>
              </div>
              <Button variant="secondary" className="mt-3" onClick={() => setEditing(true)}>
                ✏️ Edit Profil
              </Button>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <StatBox label="XP Total" value={profile.xp} />
            <StatBox label="Kata Dipelajari" value={profile.words_learned} />
            <StatBox label="Hari Streak" value={profile.streak} />
            <StatBox label="Lesson Selesai" value={profile.lessons_finished} />
          </div>

          <div>
            <p className="text-sm font-semibold opacity-80 mb-2">Koleksi Badge</p>
            <div className="grid grid-cols-3 gap-2">
              {BADGES.map((badge) => {
                const earned = badge.condition(profile);
                return (
                  <div
                    key={badge.id}
                    title={badge.description}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl text-center ${
                      earned
                        ? "bg-gradient-to-br from-pink/20 to-lav/20"
                        : "bg-black/5 dark:bg-white/5 grayscale opacity-50"
                    }`}
                  >
                    <span className="text-2xl">{badge.emoji}</span>
                    <span className="text-[11px] font-bold leading-tight">{badge.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold opacity-80">Pengaturan</p>

            <div className="flex items-center justify-between">
              <span className="text-sm">🌐 Bahasa UI</span>
              <div className="flex rounded-full bg-black/5 dark:bg-white/10 p-1">
                {(["id", "en"] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLang(lng)}
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      profile.lang === lng
                        ? "bg-gradient-to-r from-pink to-pink2 text-white"
                        : ""
                    }`}
                  >
                    {lng}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">⭐ Target XP Harian</span>
              <div className="flex rounded-full bg-black/5 dark:bg-white/10 p-1">
                {[30, 50, 100].map((target) => (
                  <button
                    key={target}
                    onClick={() => setXpTarget(target)}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      profile.xp_target === target
                        ? "bg-gradient-to-r from-pink to-pink2 text-white"
                        : ""
                    }`}
                  >
                    {target}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">🔔 Pengingat Belajar (19:00)</span>
              <button
                onClick={handleReminderToggle}
                aria-label="Toggle pengingat"
                className={`w-12 h-7 rounded-full relative transition-colors ${
                  profile.reminder ? "bg-pink" : "bg-black/15 dark:bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                    profile.reminder ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => toggleTheme()}
              className="flex items-center justify-between text-sm"
            >
              <span>{profile.theme === "dark" ? "☀️ Mode Terang" : "🌙 Mode Gelap"}</span>
            </button>
          </div>

          <Button variant="danger" onClick={signOut}>
            Keluar
          </Button>
        </div>
      </aside>
    </>
  );
}

function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-black/5 dark:bg-white/5 p-3 text-center">
      <div className="text-xl font-extrabold">{value}</div>
      <div className="text-[11px] opacity-60">{label}</div>
    </div>
  );
}
