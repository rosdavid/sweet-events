"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inputBase =
  "w-full bg-transparent border-b border-white/15 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-white/40 transition-colors font-light";

export function DashboardLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión");
        setLoading(false);
        return;
      }
      router.push("/dashboard/requests");
      router.refresh();
    } catch {
      setError("Error de conexión");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="password"
          className="block text-[10px] uppercase tracking-[0.2em] text-foreground/60 mb-2 font-medium"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputBase}
          placeholder="••••••••"
          required
          autoComplete="current-password"
        />
      </div>
      {error && <p className="text-sm text-red-400/90">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black py-3 rounded-full text-xs font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
