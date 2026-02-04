"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/dashboard-auth", { method: "DELETE" });
    router.push("/dashboard/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm uppercase tracking-wider transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      Salir
    </button>
  );
}
