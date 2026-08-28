"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ComingSoon } from "@/components/ComingSoon";

export default function ServicesPage() {
  const { t } = useLanguage();
  return <ComingSoon title={t.nav.services} description={t.services.subheading} />;
}
