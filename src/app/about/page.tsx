"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ComingSoon } from "@/components/ComingSoon";

export default function AboutPage() {
  const { t } = useLanguage();
  return <ComingSoon title={t.nav.about} description={t.brand.mission} />;
}
