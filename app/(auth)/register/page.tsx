"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setRegistered(true);
  }

  if (registered) {
    return (
      <div className="text-center flex flex-col gap-4">
        <div className="text-5xl">📬</div>
        <h2 className="text-xl font-bold">Cek Email Kamu!</h2>
        <p className="text-sm opacity-70">
          Kami sudah kirim link konfirmasi ke <b>{email}</b>. Klik link itu
          untuk mengaktifkan akunmu.
        </p>
        <Link href="/login" className="text-sm font-bold text-pink2 hover:underline">
          Kembali ke Masuk
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-center">Daftar</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <Input
          id="name"
          type="text"
          label="Nama"
          placeholder="Nama kamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          required
        />
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
          placeholder="Minimal 6 karakter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          id="confirmPassword"
          type="password"
          label="Konfirmasi Password"
          placeholder="Ulangi password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Memproses..." : "Daftar →"}
        </Button>
      </form>
      <p className="text-sm text-center opacity-70">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-bold text-pink2 hover:underline">
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}
