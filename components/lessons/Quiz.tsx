"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Level, QuizQuestion } from "@/types";
import { useProfile } from "@/contexts/ProfileContext";
import { Button } from "@/components/ui/Button";

export function Quiz({ level, questions }: { level: Level; questions: QuizQuestion[] }) {
  const router = useRouter();
  const { completeLevel } = useProfile();

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const scorePct = Math.round((correctCount / questions.length) * 100);
  const passed = scorePct >= 60;

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  async function handleNext() {
    if (isLast) {
      setFinished(true);
      if (passed && !saved) {
        setSaved(true);
        await completeLevel(level.id, level.xpReward);
      }
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function handleRetry() {
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    const stars = scorePct >= 80 ? 3 : scorePct >= 60 ? 2 : 1;
    return (
      <div className="glass-card p-8 flex flex-col items-center gap-4 text-center max-w-md mx-auto">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink to-lav bg-clip-text text-transparent">
          {scorePct}%
        </h2>
        <div className="text-3xl">
          {"⭐".repeat(stars)}
          <span className="opacity-20">{"⭐".repeat(3 - stars)}</span>
        </div>
        <p className="text-sm opacity-70">
          {passed
            ? "🎌 Magnifique! Kamu berhasil menyelesaikan level ini!"
            : "🎌 Belum lulus nih, coba lagi ya! Kamu pasti bisa!"}
        </p>
        {passed && (
          <p className="text-sm font-bold text-gold">+{level.xpReward} XP diperoleh!</p>
        )}
        <div className="flex gap-3 mt-2">
          <Button variant="secondary" onClick={handleRetry}>
            Ulangi Quiz
          </Button>
          <Button onClick={() => router.push("/lessons")}>Kembali ke Peta</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
      <div>
        <div className="flex justify-between text-xs font-bold opacity-60 mb-1.5">
          <span>Soal {index + 1} dari {questions.length}</span>
          <span>{Math.round(((index) / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink to-lav transition-all duration-300"
            style={{ width: `${(index / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="font-bold text-lg text-center mb-6">{question.question}</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {question.options.map((option, i) => {
            const isCorrect = i === question.correctIndex;
            const isSelected = i === selected;
            let stateClass = "border-lav/30 hover:bg-black/5 dark:hover:bg-white/10";
            if (selected !== null) {
              if (isCorrect) stateClass = "border-green bg-green/15 text-green";
              else if (isSelected) stateClass = "border-red-400 bg-red-400/15 text-red-500";
              else stateClass = "border-lav/10 opacity-50";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`text-left px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${stateClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div
            className={`mt-5 p-4 rounded-xl text-sm page-fade-in ${
              selected === question.correctIndex
                ? "bg-green/10 text-green"
                : "bg-red-400/10 text-red-500"
            }`}
          >
            <p className="font-bold mb-1">
              {selected === question.correctIndex ? "✅ Betul!" : "❌ Salah."}
            </p>
            <p className="opacity-90">{question.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <div className="mt-5 flex justify-end">
            <Button onClick={handleNext}>
              {isLast ? "Lihat Hasil →" : "Soal Berikutnya →"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
