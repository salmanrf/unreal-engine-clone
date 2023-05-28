import { Fira_Mono } from "@next/font/google";
import localFont from "@next/font/local";

export const brutalLight = localFont({
  src: "./brutal-type-light.ttf",
  variable: "--font-brutal-light",
  display: "swap",
});

export const brutalRegular = localFont({
  src: "./brutal-type-regular.woff2",
  variable: "--font-brutal-regular",
  display: "swap",
});

export const brutalBold = localFont({
  src: "./brutal-type-bold.woff2",
  variable: "--font-brutal-bold",
  display: "swap",
});

export const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
  display: "swap",
});
