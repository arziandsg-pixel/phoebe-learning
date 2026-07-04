import { NextResponse } from "next/server";
import { getGeminiApiKey, getGeminiModel } from "@/lib/gemini";

interface ChatRequestMessage {
  role: "user" | "model";
  text: string;
}

export async function POST(request: Request) {
  try {
    const { message, history } = (await request.json()) as {
      message: string;
      history?: ChatRequestMessage[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Pesan tidak valid." }, { status: 400 });
    }

    try {
      getGeminiApiKey();
    } catch (configError) {
      console.error("Gemini config error:", configError);
      const detail =
        configError instanceof Error ? configError.message : "Konfigurasi tidak valid.";
      return NextResponse.json({ error: detail }, { status: 500 });
    }

    const model = getGeminiModel();
    const chat = model.startChat({
      history: (history ?? []).map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      })),
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini chat error:", error);
    return NextResponse.json(
      { error: "Phoebe sedang kesulitan menjawab. Coba lagi ya!" },
      { status: 500 }
    );
  }
}
