import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oleg Melnikov — AI Engineer & Entrepreneur",
  description:
    "I quit a $650k trading career at 24 to build with AI. Now I help B2B founders become authorities and teach thousands how to build with AI on YouTube.",
  openGraph: {
    title: "Oleg Melnikov — AI Engineer & Entrepreneur",
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
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
