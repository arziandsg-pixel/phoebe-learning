"use client";

import { useState } from "react";
import type { Flashcard as FlashcardType } from "@/types";
import { Button } from "@/components/ui/Button";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  window.speechSynthesis.speak(utterance);
}

export function Flashcard({
  cards,
  onStartQuiz,
}: {
  cards: FlashcardType[];
  onStartQuiz: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[index];
  const isLast = index === cards.length - 1;

  function goTo(newIndex: number) {
    setIndex(newIndex);
    setFlipped(false);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flip-scene w-full max-w-md h-72">
        <div
          className={`flip-card w-full h-full cursor-pointer ${flipped ? "is-flipped" : ""}`}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="flip-face glass-card w-full h-full flex flex-col items-center justify-center gap-3 p-6 absolute inset-0">
            <h2 className="text-4xl font-extrabold text-center">{card.french}</h2>
            <p className="font-mono text-sm opacity-60">[{card.phonetic.replace(/[[\]]/g, "")}]</p>
            <p className="text-xs opacity-50 mt-4">Klik untuk lihat arti</p>
          </div>
          <div className="flip-face flip-face-back glass-card w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
            <h3 className="text-2xl font-extrabold">{card.indonesian}</h3>
            <p className="text-sm italic opacity-70">"{card.example}"</p>
            <p className="text-xs opacity-50">{card.exampleTranslation}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(card.french);
              }}
              className="mt-2 text-sm font-bold text-pink2 hover:underline"
            >
              🔊 Dengar
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Kartu ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-pink" : "bg-black/15 dark:bg-white/20"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
        >
          ← Sebelumnya
        </Button>
        <span className="text-sm font-bold opacity-60">
          {index + 1} / {cards.length}
        </span>
        {isLast ? (
          <Button onClick={onStartQuiz}>Mulai Quiz →</Button>
        ) : (
          <Button onClick={() => goTo(index + 1)}>Selanjutnya →</Button>
        )}
      </div>
    </div>
  );
}
