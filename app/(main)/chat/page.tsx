import { ChatWindow } from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-extrabold">💬 Chat dengan Phoebe</h1>
        <p className="text-sm opacity-60 mt-1">
          Tanya apa saja soal Bahasa Prancis, Phoebe siap membantu!
        </p>
      </div>
      <ChatWindow />
    </div>
  );
}
