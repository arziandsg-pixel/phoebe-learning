"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProfile } from "@/contexts/ProfileContext";
import { t } from "@/lib/i18n";

export function Topbar({ onAvatarClick }: { onAvatarClick: () => void }) {
  const pathname = usePathname();
  const { profile, toggleTheme } = useProfile();
  const lang = profile?.lang ?? "id";

  const NAV_ITEMS = [
    { href: "/", label: t(lang, "nav_home"), emoji: "🏠" },
    { href: "/lessons", label: t(lang, "nav_lessons"), emoji: "📚" },
    { href: "/vocabulary", label: t(lang, "nav_vocabulary"), emoji: "🔤" },
    { href: "/grammar", label: t(lang, "nav_grammar"), emoji: "📖" },
    { href: "/chat", label: t(lang, "nav_chat"), emoji: "💬" },
    { href: "/progress", label: t(lang, "nav_progress"), emoji: "🏆" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="glass-card flex items-center justify-between gap-2 px-4 py-2.5 rounded-full">
        <Link href="/" className="flex items-center gap-2 shrink-0 pr-2">
          <span className="text-2xl">🎌</span>
          <span className="hidden sm:inline font-extrabold bg-gradient-to-r from-pink to-lav bg-clip-text text-transparent">
            Phoebe Learning
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                  active
                    ? "bg-gradient-to-r from-pink to-pink2 text-white shadow-md"
                    : "hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 rounded-full bg-gold/15 text-gold px-3 py-1.5 text-sm font-bold">
            ⭐ {profile?.xp ?? 0}
          </div>
          <div className="hidden xs:flex items-center gap-1 rounded-full bg-pink/15 text-pink2 px-3 py-1.5 text-sm font-bold">
            🔥 {profile?.streak ?? 0}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-lg"
          >
            {profile?.theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={onAvatarClick}
            aria-label="Buka profil"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink to-lav text-lg shadow-md hover:scale-105 transition-transform"
          >
            {profile?.avatar ?? "😊"}
          </button>
        </div>
      </nav>

      <div className="md:hidden glass-card mt-2 flex items-center justify-around px-2 py-2 rounded-full">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-lg ${
                active ? "bg-gradient-to-r from-pink to-pink2" : ""
              }`}
            >
              {item.emoji}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
