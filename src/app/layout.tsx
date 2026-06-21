import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Plausible } from "@/components/plausible";
import "./globals.css";

// Paste your Google Search Console verification token here to enable GSC.
const GOOGLE_SITE_VERIFICATION = "";

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
  applicationName: "Gbolagade Ishola",
  authors: [{ name: "Gbolagade Ishola", url: "https://gbolagade.com" }],
  creator: "Gbolagade Ishola",
  publisher: "Gbolagade Ishola",
  keywords: [
    "AI Engineer",
    "AI Automation Architect",
    "agentic engineering",
    "LLM solutions",
    "RAG",
    "retrieval-augmented generation",
    "production AI",
    "AI engineer London",
    "prompt engineering",
    "AI co-pilots",
    "Gbolagade Ishola",
  ],
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
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

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.className} ${unbounded.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to content
        </a>
        <Plausible />
        {children}
      </body>
    </html>
  );
}
