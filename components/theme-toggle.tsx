"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = ["system", "light", "dark"] as const;
const labels: Record<(typeof themes)[number], string> = {
  system: "Sistema",
  light: "Claro",
  dark: "Oscuro",
};

const icons: Record<(typeof themes)[number], typeof Sun> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center gap-0.5 rounded-full border border-border bg-muted/50 px-1.5 py-1.5",
          className
        )}
        aria-hidden
      >
        {themes.map((t) => {
          const Icon = icons[t];
          return (
            <span
              key={t}
              className="flex size-8 items-center justify-center rounded-full text-muted-foreground"
            >
              <Icon className="size-4" />
            </span>
          );
        })}
      </div>
    );
  }

  const current = theme ?? "system";

  return (
    <div
      role="group"
      aria-label="Tema"
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border bg-muted/50 px-1.5 py-1.5 backdrop-blur-sm",
        className
      )}
    >
      {themes.map((t) => {
        const Icon = icons[t];
        const isActive = current === t;
        return (
          <button
            key={t}
            type="button"
            onClick={() => setTheme(t)}
            className={cn(
              "flex size-8 items-center justify-center rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300",
              isActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            )}
            aria-label={labels[t]}
            aria-pressed={isActive}
            title={labels[t]}
          >
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
