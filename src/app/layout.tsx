import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galaxy Class Gaming — Craft-first games for the next table",
  description:
    "Galaxy Class Gaming builds design-led social games. Meet Riffle — no-limit Texas Hold'em with play chips, standalone or embedded in your room.",
  openGraph: {
    title: "Galaxy Class Gaming",
    description:
      "Design-led gaming studio. Riffle: real Hold'em, play chips, embed anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
