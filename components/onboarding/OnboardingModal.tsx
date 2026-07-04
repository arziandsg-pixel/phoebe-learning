"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/contexts/ProfileContext";
import { PhoebeSVG } from "@/components/phoebe/PhoebeSVG";
import { Button } from "@/components/ui/Button";

const Q1_OPTIONS = ["Belum tahu", "Pernah dengar", "Sudah belajar dasar", "Sudah bisa percakapan"];
const Q1_REACTIONS = [
  "Tidak apa-apa, semua orang mulai dari nol! 🌱",
  "Bagus, kita bangun dari situ! ✨",
  "Keren, kita perkuat dasarnya! 💪",
  "Wah hebat! Ayo kita naikkan levelmu! 🚀",
];

const Q2_OPTIONS = ["Traveling", "Ujian/Sekolah", "Suka budaya", "Coba-coba"];
const Q2_REACTIONS = [
  "Bon voyage! Aku bantu kamu siap ngobrol di jalan! ✈️",
  "Siap! Kita fokus ke tata bahasa dan latihan soal! 📝",
  "Magnifique! Budaya Prancis itu seru banget! 🎨",
  "Yuk kita coba pelan-pelan, santai saja! 😊",
];

const Q3_OPTIONS = ["5 menit", "10-15 menit", "30 menit", "1 jam+"];
const Q3_REACTIONS = [
  "Sedikit-sedikit juga jadi bukit! ⏱️",
  "Waktu yang pas untuk belajar konsisten! 👍",
  "Semangat sekali, kamu pasti cepat maju! 🔥",
  "Wow, kamu serius belajar! Aku suka itu! 🏆",
];

function getRecommendedTrack(familiarityIdx: number) {
  if (familiarityIdx <= 1) return { name: "A1-A2 · Pemula", desc: "Mulai dari dasar: alfabet, salam, dan angka." };
  if (familiarityIdx === 2) return { name: "B1-B2 · Menengah", desc: "Perkuat tata bahasa dan percakapan sehari-hari." };
  return { name: "C1-C2 · Mahir", desc: "Asah kefasihan dan persiapan sertifikasi." };
}

export function OnboardingModal() {
  const router = useRouter();
  const { addXp, updateProfile } = useProfile();
  const [step, setStep] = useState(1);
  const [q1, setQ1] = useState<number | null>(null);
  const [q2, setQ2] = useState<number | null>(null);
  const [q3, setQ3] = useState<number | null>(null);

  async function finish() {
    await updateProfile({ onboarding_done: true });
    await addXp(10);
    router.push("/lessons");
  }

  const recommendation = getRecommendedTrack(q1 ?? 0);

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-lg p-8 page-fade-in">
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === step ? "w-8 bg-pink" : "w-2 bg-black/15 dark:bg-white/20"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="flex flex-col items-center text-center gap-4">
            <PhoebeSVG size={160} bob />
            <h2 className="text-xl font-extrabold">Bonjour! Aku Phoebe 🎌</h2>
            <p className="text-sm opacity-70">
              Aku akan menemanimu belajar Bahasa Prancis langkah demi langkah.
              Yuk kita mulai petualangan kecil ini bersama!
            </p>
            <Button onClick={() => setStep(2)} className="w-full">
              Ayo Mulai! →
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6">
            <QuizStep
              question="Seberapa kenal kamu dengan Bahasa Prancis?"
              options={Q1_OPTIONS}
              reactions={Q1_REACTIONS}
              selected={q1}
              onSelect={setQ1}
            />
            <QuizStep
              question="Tujuan belajar kamu?"
              options={Q2_OPTIONS}
              reactions={Q2_REACTIONS}
              selected={q2}
              onSelect={setQ2}
            />
            <QuizStep
              question="Berapa waktu belajar per hari?"
              options={Q3_OPTIONS}
              reactions={Q3_REACTIONS}
              selected={q3}
              onSelect={setQ3}
            />
            <Button
              onClick={() => setStep(3)}
              disabled={q1 === null || q2 === null || q3 === null}
              className="w-full"
            >
              Lanjut →
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center text-center gap-4">
            <PhoebeSVG size={140} bob />
            <h2 className="text-xl font-extrabold">Jalurmu Siap!</h2>
            <div className="glass-card px-5 py-4 w-full">
              <p className="text-xs uppercase tracking-wide opacity-60 mb-1">
                Rekomendasi Jalur
              </p>
              <p className="font-extrabold text-lg">{recommendation.name}</p>
              <p className="text-sm opacity-70 mt-1">{recommendation.desc}</p>
            </div>
            <Button onClick={finish} className="w-full">
              Lihat Pelajaranku →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizStep({
  question,
  options,
  reactions,
  selected,
  onSelect,
}: {
  question: string;
  options: string[];
  reactions: string[];
  selected: number | null;
  onSelect: (idx: number) => void;
}) {
  return (
    <div>
      <p className="font-bold text-sm mb-2">{question}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt, idx) => (
          <button
            key={opt}
            onClick={() => onSelect(idx)}
            className={`text-sm font-semibold px-3 py-2 rounded-xl border transition-all ${
              selected === idx
                ? "bg-gradient-to-r from-pink to-pink2 text-white border-transparent"
                : "border-lav/30 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p className="text-xs mt-2 text-pink2 font-semibold page-fade-in">
          🎌 {reactions[selected]}
        </p>
      )}
    </div>
  );
}
