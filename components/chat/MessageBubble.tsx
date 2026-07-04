import type { ChatMessage } from "@/types";

export function MessageBubble({ message, userInitial }: { message: ChatMessage; userInitial: string }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
          isUser ? "bg-gradient-to-br from-lav to-pink text-white" : "bg-pink/15"
        }`}
      >
        {isUser ? userInitial : "🎌"}
      </div>
      <div
        className={`max-w-[75%] px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-ink to-[#2a1f4d] text-white rounded-[18px_18px_4px_18px]"
            : "glass-card rounded-[18px_18px_18px_4px]"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
