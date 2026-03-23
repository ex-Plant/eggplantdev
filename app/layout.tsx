import "@/styles/globals.css";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import { cookies } from "next/headers";

import { poly, theinhardt, shareTechMono } from "@/public/fonts/fonts";

import { TopNavigation } from "@/components/top-navigation/top-navigation";
import { DebugWrapper } from "@/components/debug-tools/debug-wrapper";
import { GradientMask } from "@/components/general/gradient-mask/gradient-mask";
import { TranslationsProvider } from "@/lib/i18n/translations-provider";
import { SkipToContent } from "@/components/accessibility/skip-to-content";
import { Footer } from "../components/footer/Footer";
import type { LocaleT } from "@/lib/i18n/types";

export const metadata: Metadata = {
  title: "Sometimes dev, sometimes eggplant",
  description: "Building apps, shipping eggplants to space",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale: LocaleT = localeCookie === "en" || localeCookie === "pl" ? localeCookie : "pl";
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poly.variable} ${theinhardt.variable} ${shareTechMono.variable} ${poly.className} ${theinhardt.className}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t='dark';try{var s=JSON.parse(localStorage.getItem('theme-storage'));if(s&&s.state&&(s.state.theme==='dark'||s.state.theme==='contrast'))t=s.state.theme}catch(e){}document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body className="overscroll-none scroll-smooth antialiased">
        <TranslationsProvider initialLocale={locale}>
          <DebugWrapper>
            <SkipToContent />
            {/* Fixed grit overlay — stays in place while content scrolls */}
            <div className="grit pointer-events-none fixed inset-0 z-200" />

            <TopNavigation />
            <main id="main-content">{children}</main>
            <GradientMask className="grit" />
            <GradientMask className="grit" />
            <Footer />
          </DebugWrapper>
        </TranslationsProvider>
      </body>
    </html>
  );
}
