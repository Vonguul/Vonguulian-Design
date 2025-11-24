export function addStructuredData(schema: any) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vonguulian Design",
  url: "https://vonguulian.com",
  logo: "https://vonguulian.com/logo.png",
  description: "Premium digital products and consultation services for Human Design",
  sameAs: [
    "https://www.youtube.com/vonguuliandesign",
    "https://www.instagram.com/vonguuliandesign",
    "https://twitter.com/vonguuliandesign",
  ],
};

export const articleSchema = (article: any) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.excerpt,
  author: {
    "@type": "Person",
    name: article.author,
  },
  datePublished: article.publishedDate,
  keywords: article.tags.join(","),
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Human Design Consultation",
  provider: {
    "@type": "Organization",
    name: "Vonguulian Design",
  },
  description: "Personalized Human Design consultation services",
  areaServed: "Worldwide",
};
