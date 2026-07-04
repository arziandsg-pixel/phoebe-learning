import { GoogleGenerativeAI, type GenerationConfig } from "@google/generative-ai";

// "gemini-1.5-flash" has been retired by Google. "gemini-2.5-flash" is its
// current free-tier equivalent, confirmed available for this project's key.
const MODEL_NAME = "gemini-2.5-flash";

// The installed SDK predates Gemini 2.5's "thinking" feature, so thinkingConfig
// isn't in its GenerationConfig type — the REST API still accepts it though.
// Without this, gemini-2.5-flash burns ~1000 thinking tokens per reply even
// for a one-word answer, which would blow through the free tier's daily quota.
type GenerationConfigWithThinking = GenerationConfig & {
  thinkingConfig?: { thinkingBudget: number };
};

const GENERATION_CONFIG: GenerationConfigWithThinking = {
  thinkingConfig: { thinkingBudget: 0 },
};

export const PHOEBE_SYSTEM_PROMPT = `Kamu adalah Phoebe, tutor Bahasa Prancis yang ceria, sabar, dan helpful.
Kamu membantu pemula Indonesia belajar Bahasa Prancis.
Selalu jawab dalam Bahasa Indonesia yang ramah, sertakan contoh dan kosakata Bahasa Prancis.
Jika user salah dalam kalimat Prancis, koreksi dengan lembut.
Format: jelaskan singkat, beri contoh kalimat Prancis + artinya, tips praktis.
Panggil dirimu Phoebe. Tutup dengan semangat belajar!`;

// Google issues two API key formats: the classic "AIzaSy..." key and the
// newer "AQ." prefixed key. Both are sent identically via the SDK's
// x-goog-api-key header, so we only need to validate — not branch on — the shape.
const GEMINI_KEY_PATTERN = /^(AIzaSy[A-Za-z0-9_-]{33}|AQ\.[A-Za-z0-9_-]+)$/;

export function getGeminiApiKey(): string {
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    throw new Error(
      "GEMINI_API_KEY tidak ditemukan. Tambahkan ke .env.local."
    );
  }

  if (!GEMINI_KEY_PATTERN.test(key)) {
    throw new Error(
      "GEMINI_API_KEY tidak valid — harus berformat 'AIzaSy...' atau 'AQ....'. Cek kembali nilai di .env.local (mungkin terpotong saat disalin)."
    );
  }

  return key;
}

export function getGeminiModel() {
  const genAI = new GoogleGenerativeAI(getGeminiApiKey());
  return genAI.getGenerativeModel({
    model: MODEL_NAME,
    systemInstruction: PHOEBE_SYSTEM_PROMPT,
    generationConfig: GENERATION_CONFIG,
  });
}
