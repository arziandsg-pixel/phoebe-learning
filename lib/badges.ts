import type { Badge } from "@/types";

export const BADGES: Badge[] = [
  {
    id: "pemula",
    emoji: "🌱",
    title: "Pemula",
    description: "Kumpulkan 10 XP pertamamu",
    condition: (p) => p.xp >= 10,
  },
  {
    id: "streak3",
    emoji: "🔥",
    title: "Streak 3 Hari",
    description: "Belajar 3 hari berturut-turut",
    condition: (p) => p.streak >= 3,
  },
  {
    id: "streak7",
    emoji: "💪",
    title: "Streak 7 Hari",
    description: "Belajar 7 hari berturut-turut",
    condition: (p) => p.streak >= 7,
  },
  {
    id: "xp100",
    emoji: "⭐",
    title: "100 XP",
    description: "Kumpulkan 100 XP",
    condition: (p) => p.xp >= 100,
  },
  {
    id: "xp500",
    emoji: "🏅",
    title: "500 XP",
    description: "Kumpulkan 500 XP",
    condition: (p) => p.xp >= 500,
  },
  {
    id: "lesson1",
    emoji: "📖",
    title: "Lesson 1 Selesai",
    description: "Selesaikan level pertamamu",
    condition: (p) => p.lessons_finished >= 1,
  },
  {
    id: "lesson5",
    emoji: "📚",
    title: "5 Lesson Selesai",
    description: "Selesaikan 5 level pelajaran",
    condition: (p) => p.lessons_finished >= 5,
  },
  {
    id: "words10",
    emoji: "🔤",
    title: "10 Kata Dipelajari",
    description: "Dengarkan 10 kosakata",
    condition: (p) => p.words_learned >= 10,
  },
  {
    id: "chat1",
    emoji: "💬",
    title: "Chat Pertama",
    description: "Kirim pesan pertamamu ke Phoebe",
    condition: (p) => p.chat_count >= 1,
  },
];
