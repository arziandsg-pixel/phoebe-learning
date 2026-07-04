import { notFound } from "next/navigation";
import { LEVELS } from "@/data/levels";
import { getFlashcardsForLevel, getQuizForLevel } from "@/data/lesson-content";
import { LevelDetail } from "@/components/lessons/LevelDetail";

export default async function LevelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const level = LEVELS.find((l) => l.id === Number(id));

  if (!level) notFound();

  const cards = getFlashcardsForLevel(level.id);
  const questions = getQuizForLevel(level.id);

  return <LevelDetail level={level} cards={cards} questions={questions} />;
}
