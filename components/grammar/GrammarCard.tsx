import type { GrammarConcept } from "@/types";
import { Card } from "@/components/ui/Card";

export function GrammarCard({ concept }: { concept: GrammarConcept }) {
  return (
    <Card hover>
      <h3 className="font-extrabold text-lg mb-2">{concept.title}</h3>
      <p className="text-sm opacity-70 mb-4">{concept.description}</p>
      <div className="bg-black/5 dark:bg-white/5 rounded-xl p-3 mb-3">
        <p className="text-sm font-semibold">{concept.exampleFrench}</p>
        <p className="text-xs opacity-60 mt-1">{concept.exampleTranslation}</p>
      </div>
      <p className="text-xs text-pink2 font-semibold">{concept.tip}</p>
    </Card>
  );
}
