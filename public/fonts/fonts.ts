import localFont from "next/font/local";
import { JetBrains_Mono, IBM_Plex_Mono, Fira_Code } from "next/font/google";

export const poly = localFont({
  src: "./PolySans-SlimMono.woff2",
  variable: "--font-poly",
  display: "swap",
});

export const theinhardt = localFont({
  src: "./Theinhardt-Regular.woff2",
  variable: "--font-theinhardt",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const firaCode = Fira_Code({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fira-code",
  display: "swap",
});
