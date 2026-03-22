import localFont from "next/font/local";
import {
  JetBrains_Mono,
  IBM_Plex_Mono,
  Space_Mono,
  Fira_Code,
} from "next/font/google";

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

export const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});
