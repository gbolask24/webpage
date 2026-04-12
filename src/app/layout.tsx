import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Oleg Melnikov — AI Software Entrepreneur",
  description:
    "I quit a $650k trading career at 24 to build with AI. Now I help B2B founders become authorities and teach thousands how to build with AI on YouTube.",
  openGraph: {
    title: "Oleg Melnikov — AI Software Entrepreneur",
    description:
      "I quit a $650k trading career at 24 to build with AI. Now I help B2B founders become authorities and teach thousands how to build with AI on YouTube.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
