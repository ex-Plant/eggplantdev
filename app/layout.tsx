import "@/styles/globals.css";
import { Metadata } from "next";
import React, { ReactNode } from "react";

import { poly, theinhardt, shareTechMono, jetbrainsMono, ibmPlexMono, firaCode } from "@/public/fonts/fonts";

import { TopNavigation } from "@/components/top-navigation/top-navigation";
import { DebugWrapper } from "@/components/debug-tools/debug-wrapper";
import { GradientMask } from "@/components/general/gradient-mask/gradient-mask";
import { TranslationsProvider } from "@/lib/i18n/translations-provider";
import { SkipToContent } from "@/components/accessibility/skip-to-content";
import { SmoothScroll } from "@/components/general/smooth-scroll";
import { Footer } from "../components/footer/footer";
import { preferencesHydratorScript } from "@/components/general/preferences-hydrator";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Egggplants in space",
  description: "Building apps, shipping eggplants to space",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${poly.variable} ${theinhardt.variable} ${shareTechMono.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} ${firaCode.variable} ${poly.className} ${theinhardt.className}`}
    >
      <body className="overscroll-none scroll-smooth antialiased" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: preferencesHydratorScript }} />
        <TranslationsProvider>
          <DebugWrapper>
            <SkipToContent />
            {/* Fixed grit overlay — stays in place while content scrolls */}
            <div className="grit pointer-events-none fixed inset-0 z-200 will-change-transform" />

            {/* TopNavigation must stay outside SmoothScroll — toggling smooth scroll
                remounts the tree, which would reset the menu open/close state */}
            <TopNavigation />
            <SmoothScroll>
              <main id="main-content">{children}</main>
              <GradientMask />
              <GradientMask />
              <Footer />
            </SmoothScroll>
            {/* TODO: auto-open animation drawer on first visit */}
          </DebugWrapper>
        </TranslationsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
