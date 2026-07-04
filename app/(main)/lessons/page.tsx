import { LevelMap } from "@/components/lessons/LevelMap";

export default function LessonsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold">📚 Pelajaran</h1>
        <p className="text-sm opacity-60 mt-1">
          Pilih level untuk mulai belajar. Selesaikan level sebelumnya untuk membuka level berikutnya.
        </p>
      </div>
      <LevelMap />
    </div>
  );
}
