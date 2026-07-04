"use client";

import { useState } from "react";
import { GRAMMAR_LEVELS, GRAMMAR_CONCEPTS } from "@/data/grammar";
import { GrammarCard } from "@/components/grammar/GrammarCard";
import type { GrammarConcept } from "@/types";

export function GrammarGrid() {
  const [level, setLevel] = useState<GrammarConcept["level"]>(GRAMMAR_LEVELS[0]);
  const concepts = GRAMMAR_CONCEPTS.filter((c) => c.level === level);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {GRAMMAR_LEVELS.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setLevel(lvl)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              level === lvl
                ? "bg-gradient-to-r from-pink to-pink2 text-white shadow-md"
                : "glass-card"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {concepts.map((concept) => (
          <GrammarCard key={concept.id} concept={concept} />
        ))}
      </div>
    </div>
  );
}
