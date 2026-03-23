import localFont from "next/font/local";
import { Share_Tech_Mono } from "next/font/google";

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

export const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  display: "swap",
});
