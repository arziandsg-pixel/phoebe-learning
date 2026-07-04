"use client";

import { useMemo } from "react";
import { VOCABULARY } from "@/data/vocabulary";
import { useProfile } from "@/contexts/ProfileContext";
import { Card } from "@/components/ui/Card";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  window.speechSynthesis.speak(utterance);
}

export function WordOfDay() {
  const { incrementWordsLearned } = useProfile();

  const word = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000);
    return VOCABULARY[dayIndex % VOCABULARY.length];
  }, []);

  return (
    <Card hover>
      <p className="text-xs font-bold uppercase tracking-wide opacity-60 mb-3">
        📌 Kata Hari Ini
      </p>
      <h3 className="text-3xl font-extrabold mb-1">{word.french}</h3>
      <p className="font-mono text-sm opacity-60 mb-2">{word.phonetic}</p>
      <p className="font-semibold mb-3">{word.indonesian}</p>
      <p className="text-sm italic opacity-70 mb-1">"{word.example}"</p>
      <p className="text-xs opacity-50 mb-4">{word.exampleTranslation}</p>
      <button
        onClick={() => {
          speak(word.french);
          incrementWordsLearned();
        }}
        className="flex items-center gap-2 text-sm font-bold text-pink2 hover:underline"
      >
        🔊 Dengar
      </button>
    </Card>
  );
}
