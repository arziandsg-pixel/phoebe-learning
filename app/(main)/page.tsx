import { HeroCard } from "@/components/home/HeroCard";
import { WordOfDay } from "@/components/home/WordOfDay";
import { TipsCard } from "@/components/home/TipsCard";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <HeroCard />
      <div className="grid md:grid-cols-2 gap-6">
        <WordOfDay />
        <TipsCard />
      </div>
    </div>
  );
}
