export interface JsonLdOrganization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
}

export interface JsonLdArticle {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  author: {
    "@type": string;
    name: string;
  };
}

export function setJsonLd(schema: object) {
  // Remove existing JSON-LD script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script tag
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function getOrganizationSchema(): JsonLdOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vonguulian Design",
    url: "https://vonguulian.com",
    logo: "https://vonguulian.com/favicon.jpg",
    sameAs: [
      "https://www.youtube.com/@vonguulmusic",
      "https://www.instagram.com/vonguulian_design",
      "https://twitter.com/vonguulian",
      "https://www.tiktok.com/@vonguulian",
    ],
  };
}

export function getArticleSchema(
  title: string,
  description: string,
  publishedDate: string,
  author: string = "Offbahr Vonguul"
): JsonLdArticle {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: "https://vonguulian.com/favicon.jpg",
    datePublished: publishedDate,
    author: {
      "@type": "Person",
      name: author,
    },
  };
}
