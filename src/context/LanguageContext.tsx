"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Language, Translations } from "@/types";
import { translations } from "@/data/translations";

const STORAGE_KEY = "neomasterys-language";
const DEFAULT_LANGUAGE: Language = "ar";

type Direction = "rtl" | "ltr";
type Listener = () => void;

const listeners = new Set<Listener>();

function isLanguage(value: string | null): value is Language {
  return value === "ar" || value === "en";
}

function getSnapshot(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLanguage(stored) ? stored : DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function setStoredLanguage(language: Language) {
  window.localStorage.setItem(STORAGE_KEY, language);
  listeners.forEach((listener) => listener());
}

function dirFor(language: Language): Direction {
  return language === "ar" ? "rtl" : "ltr";
}

interface LanguageContextValue {
  language: Language;
  dir: Direction;
  t: Translations;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // localStorage is the single source of truth; useSyncExternalStore is the
  // React-native way to read it, since it renders DEFAULT_LANGUAGE (matching
  // the server) for the very first client render and only swaps in the
  // stored value once hydration has completed, so it can never mismatch.
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dirFor(language);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setStoredLanguage(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setStoredLanguage(getSnapshot() === "ar" ? "en" : "ar");
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir: dirFor(language),
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
