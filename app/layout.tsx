import "@/styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

import { poly, theinhardt, jetbrainsMono, ibmPlexMono, firaCode } from "@/public/fonts/fonts";

import { TopNavigation } from "@/components/top-navigation/top-navigation";
import { DebugWrapper } from "@/components/debug-tools/debug-wrapper";
import { TranslationsProvider } from "@/lib/i18n/translations-provider";
import { SkipToContent } from "@/components/accessibility/skip-to-content";
import { SmoothScroll } from "@/components/general/smooth-scroll";
import { Footer } from "../components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DevTestNav } from "@/components/test/dev-test-nav";
import { FixedTravelingDots } from "@/components/animations/fixed-traveling-dots/fixed-traveling-dots";
import { GritPulseOverlay } from "../components/animations/grit-pulse-overlay/grit-pulse-overlay";

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
      className={`overflow-x-hidden ${poly.variable} ${theinhardt.variable} ${jetbrainsMono.variable} ${ibmPlexMono.variable} ${firaCode.variable} ${poly.className} ${theinhardt.className}`}
    >
      <body className="overflow-x-hidden overscroll-none scroll-smooth antialiased" suppressHydrationWarning>
        {/* <script dangerouslySetInnerHTML={{ __html: preferencesHydratorScript }} /> */}
        <TranslationsProvider>
          <DebugWrapper>
            <SkipToContent />
            {/* Fixed ambient traveling dots — behind grit */}
            <FixedTravelingDots />
            {/* Fixed grit overlay — always on, base texture for all pages */}
            <div className="grit pointer-events-none fixed inset-x-0 top-0 z-200 h-lvh will-change-transform" />
            <GritPulseOverlay />

            {/* TopNavigation must stay outside SmoothScroll — toggling smooth scroll
                remounts the tree, which would reset the menu open/close state */}
            <DevTestNav />
            <TopNavigation />
            <SmoothScroll>
              <main id="main-content z-201">{children}</main>
              <Footer />
            </SmoothScroll>
          </DebugWrapper>
        </TranslationsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
