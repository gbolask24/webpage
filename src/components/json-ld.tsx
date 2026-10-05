import type { Project } from "@/lib/projects";
import type { Article } from "@/lib/articles";

const SITE = "https://gbolagade.com";
const PERSON_ID = `${SITE}/#person`;
const SITE_ID = `${SITE}/#website`;

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const KNOWS_ABOUT = [
  "AI Engineering",
  "Agentic Engineering",
  "Forward Deployed Engineering",
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Multi-Agent Systems",
  "Agent Memory Architecture",
  "Model Context Protocol",
  "LLM Evaluation",
  "Prompt Engineering",
  "LLM Observability",
  "AI Automation",
  "Microsoft Power Platform",
  "Vector Databases",
  "Responsible AI",
];

/** Person + WebSite graph for the home page. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Gbolagade Ishola",
        alternateName: "Gbolagade Samuel Ishola",
        url: SITE,
        image: `${SITE}/hero.png`,
        email: "mailto:gbolagade.ishola@outlook.com",
        jobTitle: "AI Engineer",
        description:
          "AI engineer in London who builds agentic systems, RAG pipelines and AI co-pilots inside working businesses, from scoping to handover.",
        knowsAbout: KNOWS_ABOUT,
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
        sameAs: ["https://x.com/GbolagadeHQ", "https://github.com/gbolask24"],
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE,
        name: "Gbolagade Ishola",
        description:
          "Personal site of Gbolagade Ishola, AI engineer and forward deployed engineer in London.",
        inLanguage: "en-GB",
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
  return <JsonLd data={data} />;
}

/** CreativeWork/SoftwareSourceCode + breadcrumb for a project page. */
export function ProjectJsonLd({ project }: { project: Project }) {
  const url = `${SITE}/projects/${project.slug}`;
  const work = {
    "@type": project.repoUrl ? "SoftwareSourceCode" : "CreativeWork",
    "@id": `${url}#project`,
    name: project.title,
    headline: project.title,
    description: project.tagline,
    url,
    inLanguage: "en-GB",
    author: { "@id": PERSON_ID },
    creator: { "@id": PERSON_ID },
    keywords: project.stack.join(", "),
    ...(project.repoUrl
      ? { codeRepository: project.repoUrl, programmingLanguage: project.stack[0] }
      : {}),
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: project.title, item: url },
    ],
  };
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", "@graph": [work, breadcrumb] }}
    />
  );
}

/** BlogPosting + breadcrumb for an article page. */
export function ArticleJsonLd({ article }: { article: Article }) {
  const url = `${SITE}/articles/${article.slug}`;
  const post = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "en-GB",
    image: `${url}/opengraph-image`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    keywords: article.tags.join(", "),
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };
  return (
    <JsonLd
      data={{ "@context": "https://schema.org", "@graph": [post, breadcrumb] }}
    />
  );
}
