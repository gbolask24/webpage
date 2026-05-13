export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  videoId,
  videoTitle,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  videoId: string;
  videoTitle: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Oleg Melnikov",
      url: "https://oleg.ae",
      sameAs: [
        "https://www.youtube.com/@Oleg-Melnikov",
        "https://www.linkedin.com/in/olegai",
        "https://www.instagram.com/melnikoff_oleg",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Oleg Melnikov",
      url: "https://oleg.ae",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    video: {
      "@type": "VideoObject",
      name: videoTitle,
      description,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      uploadDate: datePublished,
      contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
