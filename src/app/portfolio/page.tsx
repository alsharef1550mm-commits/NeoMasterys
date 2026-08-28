"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ComingSoon } from "@/components/ComingSoon";

export default function PortfolioPage() {
  const { t } = useLanguage();
  return <ComingSoon title={t.nav.portfolio} description={t.portfolio.subheading} />;
}
