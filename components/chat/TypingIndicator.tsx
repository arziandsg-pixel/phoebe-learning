export function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-8 h-8 shrink-0 rounded-full bg-pink/15 flex items-center justify-center text-sm">
        🎌
      </div>
      <div className="glass-card rounded-[18px_18px_18px_4px] px-4 py-3 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-pink typing-dot" style={{ animationDelay: "0s" }} />
        <span className="w-2 h-2 rounded-full bg-pink typing-dot" style={{ animationDelay: "0.15s" }} />
        <span className="w-2 h-2 rounded-full bg-pink typing-dot" style={{ animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}
