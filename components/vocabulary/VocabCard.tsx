"use client";

import type { VocabWord } from "@/types";
import { useProfile } from "@/contexts/ProfileContext";
import { Card } from "@/components/ui/Card";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  window.speechSynthesis.speak(utterance);
}

export function VocabCard({ word }: { word: VocabWord }) {
  const { incrementWordsLearned } = useProfile();

  return (
    <Card hover>
      <h3 className="text-2xl font-extrabold mb-1">{word.french}</h3>
      <p className="font-mono text-xs opacity-60 mb-2">{word.phonetic}</p>
      <p className="font-semibold text-sm mb-3">{word.indonesian}</p>
      <p className="text-xs italic opacity-70 mb-1">"{word.example}"</p>
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
