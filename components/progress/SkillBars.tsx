import type { Profile } from "@/types";

function calcSkills(profile: Profile) {
  return [
    { label: "Membaca", emoji: "📖", value: Math.min(100, profile.lessons_finished * 8 + Math.floor(profile.xp / 50)) },
    { label: "Menulis", emoji: "✍️", value: Math.min(100, profile.chat_count * 10 + profile.lessons_finished * 5) },
    { label: "Berbicara", emoji: "🗣️", value: Math.min(100, profile.chat_count * 8 + profile.words_learned * 2) },
    { label: "Mendengar", emoji: "👂", value: Math.min(100, profile.words_learned * 6) },
  ];
}

export function SkillBars({ profile }: { profile: Profile }) {
  const skills = calcSkills(profile);

  return (
    <div className="glass-card p-6 flex flex-col gap-4">
      <h3 className="font-extrabold">Kemampuan</h3>
      {skills.map((skill) => (
        <div key={skill.label}>
          <div className="flex justify-between text-sm font-semibold mb-1">
            <span>{skill.emoji} {skill.label}</span>
            <span className="opacity-60">{skill.value}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan to-lav transition-all duration-500"
              style={{ width: `${skill.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
