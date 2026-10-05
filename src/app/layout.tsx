import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Plausible } from "@/components/plausible";
import { GoogleAnalytics } from "@/components/google-analytics";
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
    default: "Gbolagade Ishola · AI Engineer & Forward Deployed Engineer",
    template: "%s · Gbolagade Ishola",
  },
  description:
    "Gbolagade Ishola is an AI engineer in London who builds agentic systems, RAG pipelines and AI co-pilots inside working businesses, from scoping to handover.",
  applicationName: "Gbolagade Ishola",
  authors: [{ name: "Gbolagade Ishola", url: "https://gbolagade.com" }],
  creator: "Gbolagade Ishola",
  publisher: "Gbolagade Ishola",
  keywords: [
    "AI Engineer",
    "Forward Deployed Engineer",
    "agentic systems",
    "agentic engineering",
    "LLM solutions",
    "RAG",
    "retrieval-augmented generation",
    "production AI",
    "multi-agent systems",
    "agent memory",
    "Model Context Protocol",
    "AI engineer London",
    "prompt engineering",
    "AI co-pilots",
    "Gbolagade Ishola",
  ],
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    title: "Gbolagade Ishola · AI Engineer & Forward Deployed Engineer",
    description:
      "Gbolagade Ishola is an AI engineer in London who builds agentic systems, RAG pipelines and AI co-pilots inside working businesses, from scoping to handover.",
    type: "website",
    url: "https://gbolagade.com",
    siteName: "Gbolagade Ishola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbolagade Ishola · AI Engineer & Forward Deployed Engineer",
    description:
      "Gbolagade Ishola is an AI engineer in London who builds agentic systems, RAG pipelines and AI co-pilots inside working businesses, from scoping to handover.",
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
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
