"use client";

import { useEffect, useRef, useState } from "react";
import { useProfile } from "@/contexts/ProfileContext";
import { createClient } from "@/lib/supabase/client";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import type { ChatMessage } from "@/types";

const SUGGESTIONS = [
  "💬 Apa bedanya tu dan vous?",
  "💬 Cara pakai passé composé?",
  "💬 Latihan percakapan di restoran",
  "💬 Koreksi kalimatku: Je suis faim",
];

// How many recent turns to send to Gemini as context — the full history is
// still shown in the UI, but capping this keeps token usage predictable.
const HISTORY_WINDOW = 20;

function makeId() {
  return Math.random().toString(36).slice(2);
}

export function ChatWindow() {
  const { user, profile, addXp, incrementChatCount } = useProfile();
  const supabase = createClient();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    async function loadHistory() {
      if (!user) return;

      const { data, error } = await supabase
        .from("messages")
        .select("id, role, content, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: true })
        .limit(200);

      if (!active) return;

      if (!error && data) {
        setMessages(
          data.map((row) => ({
            id: row.id,
            role: row.role as ChatMessage["role"],
            text: row.content,
            createdAt: new Date(row.created_at).getTime(),
          }))
        );
      }

      setHistoryLoaded(true);
    }

    loadHistory();

    return () => {
      active = false;
    };
  }, [user, supabase]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function saveMessage(role: ChatMessage["role"], text: string) {
    if (!user) return null;
    const { data } = await supabase
      .from("messages")
      .insert({ user_id: user.id, role, content: text })
      .select("id, created_at")
      .single();
    return data;
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const localId = makeId();
    const userMessage: ChatMessage = {
      id: localId,
      role: "user",
      text: trimmed,
      createdAt: Date.now(),
    };

    const history = messages
      .slice(-HISTORY_WINDOW)
      .map((m) => ({ role: m.role, text: m.text }));

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    addXp(5);
    incrementChatCount();

    saveMessage("user", trimmed).then((saved) => {
      if (!saved) return;
      setMessages((prev) =>
        prev.map((m) => (m.id === localId ? { ...m, id: saved.id } : m))
      );
    });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      const replyText = data.text ?? data.error ?? "Maaf, terjadi kesalahan.";

      setMessages((prev) => [
        ...prev,
        { id: makeId(), role: "model", text: replyText, createdAt: Date.now() },
      ]);
      saveMessage("model", replyText);
    } catch {
      const replyText = "Aduh, koneksi Phoebe terputus. Coba lagi ya! 🎌";
      setMessages((prev) => [
        ...prev,
        { id: makeId(), role: "model", text: replyText, createdAt: Date.now() },
      ]);
      saveMessage("model", replyText);
    } finally {
      setLoading(false);
    }
  }

  const showIntro = historyLoaded && messages.length === 0;

  return (
    <div className="glass-card flex flex-col h-[calc(100vh-180px)]">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
        {!historyLoaded && (
          <p className="text-xs text-center opacity-50 py-4">Memuat riwayat obrolan...</p>
        )}

        {showIntro && (
          <div className="flex flex-col gap-3">
            <MessageBubble
              message={{
                id: "intro",
                role: "model",
                text: `Bonjour${profile ? ", " + profile.name : ""}! Aku Phoebe 🎌 Tanya apa saja soal Bahasa Prancis ya, atau coba salah satu topik di bawah ini!`,
                createdAt: Date.now(),
              }}
              userInitial="?"
            />
            <div className="flex flex-wrap gap-2 pl-10">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s.replace("💬 ", ""))}
                  className="text-xs font-semibold glass-card px-3 py-2 hover:scale-105 transition-transform"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            userInitial={profile?.name?.charAt(0)?.toUpperCase() ?? "U"}
          />
        ))}

        {loading && <TypingIndicator />}
      </div>

      {loading && (
        <p className="text-xs opacity-50 px-5 pb-1">Phoebe sedang mengetik...</p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 p-4 border-t border-border-glass sticky bottom-0"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pesanmu di sini..."
          className="flex-1 rounded-full border border-lav/30 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink/50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-11 h-11 rounded-full bg-gradient-to-r from-pink to-pink2 text-white flex items-center justify-center shadow-lg disabled:opacity-50"
          aria-label="Kirim"
        >
          ➤
        </button>
      </form>
      <p className="text-center text-[11px] opacity-40 pb-3">
        ⚡ Powered by Gemini AI · Gratis untuk semua user
      </p>
    </div>
  );
}
