"use client";

import { useState } from "react";
import { VOCAB_CATEGORIES, VOCABULARY } from "@/data/vocabulary";
import { VocabCard } from "@/components/vocabulary/VocabCard";
import type { VocabCategory } from "@/types";

export function VocabGrid() {
  const [category, setCategory] = useState<VocabCategory>(VOCAB_CATEGORIES[0]);
  const words = VOCABULARY.filter((w) => w.category === category);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {VOCAB_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              category === cat
                ? "bg-gradient-to-r from-pink to-pink2 text-white shadow-md"
                : "glass-card"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {words.map((word) => (
          <VocabCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}
