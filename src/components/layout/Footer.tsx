"use client";

import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { siteConfig } from "@/data/site-config";
import type { Translations } from "@/types";

const QUICK_LINKS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const satisfies { key: keyof Translations["nav"]; href: string }[];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div className="flex flex-col gap-3 text-start">
          <span className="text-lg font-bold text-foreground">{t.brand.name}</span>
          <p className="max-w-xs text-sm text-muted-foreground">{t.brand.mission}</p>
        </div>

        <div className="flex flex-col gap-3 text-start">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.layout.footer.quickLinks}
          </h3>
          <ul className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 text-start">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.layout.footer.servicesHeading}
          </h3>
          <ul className="flex flex-col gap-2">
            {t.services.items.map((service) => (
              <li key={service.id}>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 text-start">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.layout.footer.contactHeading}
          </h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span dir="ltr" className="text-start">
              {siteConfig.email}
            </span>
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span dir="ltr" className="text-start">
              {siteConfig.phone}
            </span>
          </a>
          <div className="flex flex-col gap-2 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.layout.footer.socialHeading}
            </h3>
            <div className="flex flex-wrap gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  {social.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <span>
            © {new Date().getFullYear()} {t.brand.name} — {t.common.footer.rights}
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition-colors hover:text-foreground">
              {t.common.footer.privacy}
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              {t.common.footer.terms}
            </Link>
          </div>
          <span className="font-mono tracking-wide">
            {translations.ar.layout.footer.tagline} · {translations.en.layout.footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
