import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-en",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoMasterys | نيوماستريز للذكاء الاصطناعي والاستشارات الإدارية",
  description:
    "حلول الذكاء الاصطناعي، الأتمتة، والاستشارات وهندسة العمليات الإدارية",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${ibmPlexSansArabic.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
