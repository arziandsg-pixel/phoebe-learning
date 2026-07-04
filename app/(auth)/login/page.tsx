"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<"password" | "magic" | "google" | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [magicSent, setMagicSent] = useState(false);

  async function handlePasswordLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading("password");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(null);
    if (error) {
      setError("Email atau password salah.");
      return;
    }
    router.push("/");
    router.refresh();
  }

  async function handleMagicLink() {
    if (!email) {
      setError("Masukkan email dulu untuk magic link.");
      return;
    }
    setError(null);
    setLoading("magic");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setLoading(null);
    if (error) {
      setError("Gagal mengirim magic link.");
      return;
    }
    setMagicSent(true);
  }

  async function handleGoogleLogin() {
    setLoading("google");
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-center">Masuk</h2>

      {magicSent ? (
        <p className="text-sm text-center bg-green/10 text-green rounded-xl p-4">
          ✨ Link ajaib sudah dikirim ke {email}! Cek inbox kamu.
        </p>
      ) : (
        <form onSubmit={handlePasswordLogin} className="flex flex-col gap-4">
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="kamu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" disabled={loading !== null} className="w-full">
            {loading === "password" ? "Memproses..." : "Masuk →"}
          </Button>
          <button
            type="button"
            onClick={handleMagicLink}
            disabled={loading !== null}
            className="text-sm font-semibold text-pink2 hover:underline"
          >
            {loading === "magic" ? "Mengirim..." : "✨ Masuk tanpa password (Magic Link)"}
          </button>
        </form>
      )}

      <div className="flex items-center gap-3 text-xs opacity-50">
        <div className="h-px flex-1 bg-current" />
        atau
        <div className="h-px flex-1 bg-current" />
      </div>

      <Button
        type="button"
        variant="secondary"
        onClick={handleGoogleLogin}
        disabled={loading !== null}
        className="w-full"
      >
        🔵 Lanjutkan dengan Google
      </Button>

      <p className="text-sm text-center opacity-70">
        Belum punya akun?{" "}
        <Link href="/register" className="font-bold text-pink2 hover:underline">
          Daftar sekarang
        </Link>
      </p>
    </div>
  );
}
