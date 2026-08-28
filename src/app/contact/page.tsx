"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ComingSoon } from "@/components/ComingSoon";

export default function ContactPage() {
  const { t } = useLanguage();
  return <ComingSoon title={t.nav.contact} description={t.common.contactForm.heading} />;
}
