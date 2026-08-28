"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { serviceIcons } from "@/data/service-icons";

export default function Home() {
  const { t, dir } = useLanguage();
  const CtaIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  const portfolioTiers = [
    {
      key: "completed",
      icon: CheckCircle2,
      status: t.home.portfolioPreview.statusCompleted,
      dotClassName: "bg-emerald-500",
      section: t.portfolio.completed,
    },
    {
      key: "inProgress",
      icon: Clock,
      status: t.home.portfolioPreview.statusInProgress,
      dotClassName: "bg-amber-500",
      section: t.portfolio.inProgress,
    },
    {
      key: "future",
      icon: Rocket,
      status: t.home.portfolioPreview.statusFuture,
      dotClassName: "border border-border-strong",
      section: t.portfolio.future,
    },
  ] as const;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border px-6 py-24 md:px-10 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-start gap-6 text-start">
          <span className="inline-flex items-center gap-2 border border-border px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t.home.hero.eyebrow}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            {t.home.hero.headline}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {t.home.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.home.hero.ctaPrimary}
              <CtaIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              {t.home.hero.ctaSecondary}
            </Link>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {t.home.hero.stats.map((stat, index) => (
              <div key={stat} className="flex items-center gap-3 bg-background px-5 py-4">
                <dt className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd className="text-sm font-medium text-foreground">{stat}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 text-start md:flex-row md:items-end">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t.home.servicesPreview.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {t.home.servicesPreview.subheading}
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
            >
              {t.home.servicesPreview.viewAll}
              <CtaIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[service.id];
              return (
                <Link
                  key={service.id}
                  href="/services"
                  className="group flex flex-col gap-4 bg-background p-6 text-start transition-colors hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 text-start md:flex-row md:items-end">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t.home.portfolioPreview.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {t.home.portfolioPreview.subheading}
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
            >
              {t.home.portfolioPreview.viewAll}
              <CtaIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {portfolioTiers.map((tier) => (
              <div
                key={tier.key}
                className="flex flex-col gap-4 border border-border p-6 text-start transition-colors hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <tier.icon className="h-6 w-6 text-primary" />
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    <span className={`h-1.5 w-1.5 ${tier.dotClassName}`} />
                    {tier.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.section.title}
                </h3>
                <p className="text-sm text-muted-foreground">{tier.section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl text-start">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.home.valueProps.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t.home.valueProps.subheading}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {t.home.valueProps.items.map((item, index) => (
              <div key={item.title} className="flex flex-col gap-3 bg-background p-6 text-start">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 text-start">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.home.finalCta.heading}
          </h2>
          <p className="max-w-2xl text-muted-foreground">{t.home.finalCta.subheading}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.common.ctaPrimary}
              <CtaIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              {t.home.finalCta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
