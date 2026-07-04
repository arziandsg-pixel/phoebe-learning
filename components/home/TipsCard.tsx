import { Card } from "@/components/ui/Card";

const TIPS = [
  "Belajar sedikit tiap hari lebih efektif daripada belajar lama sesekali.",
  "Ucapkan kata-kata baru dengan keras untuk melatih pengucapanmu.",
  "Coba pakai kata baru dalam kalimat sendiri hari ini.",
  "Jangan takut salah — kesalahan adalah bagian dari belajar!",
];

export function TipsCard() {
  const tip = TIPS[new Date().getDate() % TIPS.length];

  return (
    <Card hover>
      <p className="text-xs font-bold uppercase tracking-wide opacity-60 mb-3">
        💡 Tips Belajar
      </p>
      <p className="text-sm leading-relaxed">{tip}</p>
    </Card>
  );
}
