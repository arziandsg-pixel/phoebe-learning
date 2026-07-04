import type { Lang } from "@/types";

export const translations = {
  id: {
    nav_home: "Beranda",
    nav_lessons: "Pelajaran",
    nav_vocabulary: "Kosakata",
    nav_grammar: "Tata Bahasa",
    nav_chat: "Chat",
    nav_progress: "Kemajuan",
    profile_title: "Profil & Pengaturan",
    greeting: "Halo",
    start_lesson: "Mulai Pelajaran",
    word_of_day: "Kata Hari Ini",
    tips_title: "Tips Belajar",
    settings_lang: "Bahasa UI",
    settings_xp_target: "Target XP Harian",
    settings_reminder: "Pengingat Belajar",
  },
  en: {
    nav_home: "Home",
    nav_lessons: "Lessons",
    nav_vocabulary: "Vocabulary",
    nav_grammar: "Grammar",
    nav_chat: "Chat",
    nav_progress: "Progress",
    profile_title: "Profile & Settings",
    greeting: "Hello",
    start_lesson: "Start Lesson",
    word_of_day: "Word of the Day",
    tips_title: "Study Tips",
    settings_lang: "UI Language",
    settings_xp_target: "Daily XP Target",
    settings_reminder: "Study Reminder",
  },
} as const;

export type TranslationKey = keyof typeof translations.id;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations.id[key];
}
