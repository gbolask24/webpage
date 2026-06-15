export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gbolagade Ishola",
    alternateName: "Gbolagade Samuel Ishola",
    url: "https://gbolagade.com",
    jobTitle: "AI Engineer & AI Automation Architect",
    description:
      "AI Engineer in London building production LLM systems: RAG, multi-agent automation, and observable AI workflows.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK",
    },
    sameAs: [
      "https://www.linkedin.com/in/ishola-gbolagade/",
      "https://x.com/GbolagadeSEO",
      "https://github.com/gbolask24",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
