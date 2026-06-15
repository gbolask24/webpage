import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Plausible } from "@/components/plausible";
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
  metadataBase: new URL("https://gbolagade.com"),
  title: {
    default: "Gbolagade Ishola · AI Engineer & AI Automation Architect",
    template: "%s · Gbolagade Ishola",
  },
  description:
    "AI Engineer in London building production LLM systems: RAG, multi-agent automation, and observable AI workflows that deliver measurable business impact.",
  keywords: [
    "AI Engineer",
    "AI Automation Architect",
    "LLM solutions",
    "RAG",
    "retrieval-augmented generation",
    "production AI",
    "AI engineer London",
    "prompt engineering",
    "Gbolagade Ishola",
  ],
  openGraph: {
    title: "Gbolagade Ishola · AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems: RAG, multi-agent automation, and observable AI workflows with measurable business impact.",
    type: "website",
    url: "https://gbolagade.com",
    siteName: "Gbolagade Ishola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbolagade Ishola · AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems: RAG, multi-agent automation, and observable AI workflows with measurable business impact.",
  },
  alternates: {
    canonical: "https://gbolagade.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${unbounded.variable}`}>
      <body>
        <Plausible />
        {children}
      </body>
    </html>
  );
}
