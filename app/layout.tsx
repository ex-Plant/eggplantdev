import "@/styles/globals.css";
import { Metadata } from "next";
import React, { ReactNode } from "react";

import { poly, theinhardt, geistMono, jetbrainsMono, ibmPlexMono, spaceMono, firaCode } from "@/public/fonts/fonts";

import { TopNavigation } from "@/components/top-navigation/top-navigation";
import { DebugWrapper } from "@/components/debug-tools/debug-wrapper";
import { GradientMask } from "@/components/general/gradient-mask/gradient-mask";
import { TranslationsProvider } from "@/lib/i18n/translations-provider";
import { SkipToContent } from "@/components/accessibility/skip-to-content";
import { Footer } from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Sometimes dev, sometimes eggplant",
  description: "Building apps, shipping eggplants to space",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poly.variable} ${theinhardt.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} ${spaceMono.variable} ${firaCode.variable} ${poly.className} ${theinhardt.className}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t='dark';try{var s=JSON.parse(localStorage.getItem('theme-storage'));if(s&&s.state&&(s.state.theme==='dark'||s.state.theme==='contrast'))t=s.state.theme}catch(e){}document.documentElement.setAttribute('data-theme',t);var l='pl';try{var v=localStorage.getItem('locale');if(v==='en'||v==='pl')l=v}catch(e){}document.documentElement.setAttribute('data-locale',l)})()`,
          }}
        />
      </head>
      <body className="overscroll-none scroll-smooth antialiased" suppressHydrationWarning>
        <TranslationsProvider>
          <DebugWrapper>
            <SkipToContent />
            {/* Fixed grit overlay — stays in place while content scrolls */}
            <div className="grit pointer-events-none fixed inset-0 z-200" />
            <GradientMask top={true} />
            <GradientMask top={true} />
            <TopNavigation />
            <main id="main-content">{children}</main>
            <GradientMask />
            <GradientMask />
            <Footer />
          </DebugWrapper>
        </TranslationsProvider>
      </body>
    </html>
  );
}
