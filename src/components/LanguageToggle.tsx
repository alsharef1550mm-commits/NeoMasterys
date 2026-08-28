"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { t, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={cn(
        "inline-flex items-center gap-2 border border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:border-primary",
        className
      )}
    >
      <Languages className="h-4 w-4" />
      {t.common.switchLanguageTo}
    </button>
  );
}
