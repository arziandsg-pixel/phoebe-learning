import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import type { ChatMessage } from "@/types";

const MARKDOWN_COMPONENTS: Components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-extrabold">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  h1: ({ children }) => <p className="font-extrabold text-base mb-1">{children}</p>,
  h2: ({ children }) => <p className="font-extrabold text-base mb-1">{children}</p>,
  h3: ({ children }) => <p className="font-extrabold text-base mb-1">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-0.5 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 space-y-0.5 last:mb-0">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  code: ({ children }) => (
    <code className="font-mono text-xs bg-black/10 dark:bg-white/15 rounded px-1 py-0.5">
      {children}
    </code>
  ),
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
      {children}
    </a>
  ),
};

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
        className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-ink to-[#2a1f4d] text-white rounded-[18px_18px_4px_18px] whitespace-pre-wrap"
            : "glass-card rounded-[18px_18px_18px_4px]"
        }`}
      >
        {isUser ? (
          message.text
        ) : (
          <ReactMarkdown components={MARKDOWN_COMPONENTS}>{message.text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
