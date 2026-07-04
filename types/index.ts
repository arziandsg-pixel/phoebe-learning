export type Lang = "id" | "en";
export type Theme = "light" | "dark";
export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type Track = "A1-A2" | "B1-B2" | "C1-C2";

export interface LevelStatus {
  id: number;
  unlocked: boolean;
  done: boolean;
}

export interface Profile {
  id: string;
  name: string;
  bio: string | null;
  avatar: string;
  xp: number;
  streak: number;
  words_learned: number;
  lessons_finished: number;
  chat_count: number;
  levels: LevelStatus[];
  theme: Theme;
  lang: Lang;
  xp_target: number;
  reminder: boolean;
  onboarding_done: boolean;
  created_at: string;
  updated_at: string;
}

export interface Level {
  id: number;
  track: Track;
  title: string;
  description: string;
  xpReward: number;
}

export interface Flashcard {
  id: string;
  levelId: number;
  french: string;
  phonetic: string;
  indonesian: string;
  example: string;
  exampleTranslation: string;
}

export interface QuizQuestion {
  id: string;
  levelId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface VocabWord {
  id: string;
  category: VocabCategory;
  french: string;
  phonetic: string;
  indonesian: string;
  example: string;
  exampleTranslation: string;
}

export type VocabCategory =
  | "Salam"
  | "Angka"
  | "Keluarga"
  | "Makanan"
  | "Warna"
  | "Perjalanan";

export interface GrammarConcept {
  id: string;
  level: "A1" | "A2" | "B1" | "B2+";
  title: string;
  description: string;
  exampleFrench: string;
  exampleTranslation: string;
  tip: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  createdAt: number;
}

export interface Badge {
  id: string;
  emoji: string;
  title: string;
  description: string;
  condition: (profile: Profile) => boolean;
}
