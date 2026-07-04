import type { Level, LevelStatus } from "@/types";

export const LEVELS: Level[] = [
  // Track A1-A2 (hijau)
  { id: 1, track: "A1-A2", title: "Alfabet & Bunyi", description: "Kenali huruf dan bunyi dasar Bahasa Prancis", xpReward: 60 },
  { id: 2, track: "A1-A2", title: "Salam & Sapaan", description: "Cara menyapa dan berkenalan", xpReward: 60 },
  { id: 3, track: "A1-A2", title: "Angka & Waktu", description: "Berhitung dan menyebutkan waktu", xpReward: 70 },
  { id: 4, track: "A1-A2", title: "Kata Ganti & être", description: "Kata ganti orang dan kata kerja être", xpReward: 70 },
  { id: 5, track: "A1-A2", title: "Keluarga", description: "Kosakata seputar anggota keluarga", xpReward: 80 },
  { id: 6, track: "A1-A2", title: "Makanan & Restoran", description: "Memesan makanan di restoran", xpReward: 80 },
  // Track B1-B2 (ungu)
  { id: 7, track: "B1-B2", title: "Kata Kerja Présent", description: "Konjugasi kata kerja dalam présent", xpReward: 150 },
  { id: 8, track: "B1-B2", title: "Imparfait & Cerita", description: "Bercerita dengan imparfait", xpReward: 160 },
  { id: 9, track: "B1-B2", title: "Masa Depan", description: "Membicarakan rencana masa depan", xpReward: 170 },
  { id: 10, track: "B1-B2", title: "Media & Percakapan", description: "Percakapan sehari-hari lanjutan", xpReward: 180 },
  { id: 11, track: "B1-B2", title: "Pendapat & Debat", description: "Menyampaikan pendapat dan berdebat", xpReward: 190 },
  { id: 12, track: "B1-B2", title: "Berita & Artikel", description: "Memahami berita dan artikel Prancis", xpReward: 200 },
  // Track C1-C2 (gold)
  { id: 13, track: "C1-C2", title: "Sastra & Akademik", description: "Bahasa Prancis dalam sastra dan akademik", xpReward: 280 },
  { id: 14, track: "C1-C2", title: "Budaya Prancis", description: "Menyelami budaya dan tradisi Prancis", xpReward: 290 },
  { id: 15, track: "C1-C2", title: "Fasih & Natural", description: "Berbicara fasih dan natural seperti native", xpReward: 300 },
  { id: 16, track: "C1-C2", title: "Sertifikasi DELF/DALF", description: "Persiapan ujian sertifikasi resmi", xpReward: 320 },
];

export const TRACK_LABELS: Record<Level["track"], { label: string; dotClass: string }> = {
  "A1-A2": { label: "A1-A2 · Pemula", dotClass: "bg-green" },
  "B1-B2": { label: "B1-B2 · Menengah", dotClass: "bg-lav" },
  "C1-C2": { label: "C1-C2 · Mahir", dotClass: "bg-gold" },
};

export function getDefaultLevelStatuses(): LevelStatus[] {
  return LEVELS.map((level) => ({
    id: level.id,
    unlocked: level.id === 1,
    done: false,
  }));
}
