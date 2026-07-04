import { GrammarGrid } from "@/components/grammar/GrammarGrid";

export default function GrammarPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">📖 Tata Bahasa</h1>
        <p className="text-sm opacity-60 mt-1">
          Pelajari konsep tata bahasa Prancis dari A1 hingga B2+.
        </p>
      </div>
      <GrammarGrid />
    </div>
  );
}
