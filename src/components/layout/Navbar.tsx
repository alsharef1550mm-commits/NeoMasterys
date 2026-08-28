"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";
import type { Translations } from "@/types";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const satisfies { key: keyof Translations["nav"]; href: string }[];

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const { t, dir } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closedOffset = dir === "rtl" ? "-100%" : "100%";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
          onClick={() => setIsOpen(false)}
        >
          {t.brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "border-b-2 pb-1 pt-1 text-sm transition-colors",
                  active
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.layout.getInTouch}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? t.layout.closeMenu : t.layout.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center border border-border p-2 text-foreground md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Inline transform, not Tailwind's rtl:/ltr: translate-x-* utilities:
          those compile to a var()-based `translate` property that, in this
          Tailwind v4 setup, does not update when only the variant class
          swaps (confirmed via computed-style inspection) — the drawer gets
          stuck off-screen. Deriving the offset from `dir` directly sidesteps
          the cascade entirely. */}
      <div
        id="mobile-menu"
        style={{ transform: `translateX(${isOpen ? "0" : closedOffset})` }}
        className="fixed inset-y-0 end-0 z-40 flex w-72 max-w-[80vw] flex-col gap-6 border-s border-border bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden"
      >
        <nav className="flex flex-col gap-1 pt-14">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "border-s-2 px-4 py-3 text-sm transition-colors",
                  active
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
          <LanguageToggle className="w-full justify-center" />
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.layout.getInTouch}
          </Link>
        </div>
      </div>
    </header>
  );
}
