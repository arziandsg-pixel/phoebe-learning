import { VocabGrid } from "@/components/vocabulary/VocabGrid";

export default function VocabularyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">🔤 Kosakata</h1>
        <p className="text-sm opacity-60 mt-1">
          Jelajahi kosakata Bahasa Prancis berdasarkan kategori.
        </p>
      </div>
      <VocabGrid />
    </div>
  );
}
