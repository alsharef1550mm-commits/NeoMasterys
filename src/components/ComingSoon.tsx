"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center gap-4 px-6 py-32 text-start md:px-10">
      <span className="border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {t.common.comingSoon}
      </span>
      <h1 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
      {description ? (
        <p className="max-w-xl text-muted-foreground">{description}</p>
      ) : null}
      <Link
        href="/"
        className="text-sm font-medium text-foreground underline underline-offset-4"
      >
        {t.common.backHome}
      </Link>
    </div>
  );
}
