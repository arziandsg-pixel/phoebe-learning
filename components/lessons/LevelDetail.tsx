"use client";

import { useState } from "react";
import Link from "next/link";
import type { Level, Flashcard as FlashcardType, QuizQuestion } from "@/types";
import { Flashcard } from "@/components/lessons/Flashcard";
import { Quiz } from "@/components/lessons/Quiz";

export function LevelDetail({
  level,
  cards,
  questions,
}: {
  level: Level;
  cards: FlashcardType[];
  questions: QuizQuestion[];
}) {
  const [tab, setTab] = useState<"flashcard" | "quiz">("flashcard");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/lessons" className="text-sm font-semibold opacity-60 hover:opacity-100">
          ← Kembali ke Peta
        </Link>
        <h1 className="text-2xl font-extrabold mt-2">
          Level {level.id}: {level.title}
        </h1>
        <p className="text-sm opacity-60">{level.description}</p>
      </div>

      <div className="flex gap-2 glass-card p-1.5 self-start rounded-full">
        <button
          onClick={() => setTab("flashcard")}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
            tab === "flashcard" ? "bg-gradient-to-r from-pink to-pink2 text-white" : ""
          }`}
        >
          📚 Flashcard
        </button>
        <button
          onClick={() => setTab("quiz")}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${
            tab === "quiz" ? "bg-gradient-to-r from-pink to-pink2 text-white" : ""
          }`}
        >
          ✏️ Quiz
        </button>
      </div>

      {tab === "flashcard" ? (
        <Flashcard cards={cards} onStartQuiz={() => setTab("quiz")} />
      ) : (
        <Quiz level={level} questions={questions} />
      )}
    </div>
  );
}
