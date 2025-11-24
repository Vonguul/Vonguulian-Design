import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
}: PageMetaOptions) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    // Update OG tags
    setMetaProperty("og:title", ogTitle || title);
    setMetaProperty("og:description", ogDescription || description);
    if (ogImage) setMetaProperty("og:image", ogImage);
    if (ogUrl) setMetaProperty("og:url", ogUrl);

    // Update Twitter Card tags
    setMetaMeta("twitter:card", twitterCard);
    setMetaMeta("twitter:title", twitterTitle || ogTitle || title);
    setMetaMeta("twitter:description", twitterDescription || ogDescription || description);
    if (twitterImage) setMetaMeta("twitter:image", twitterImage);
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage]);
}

function setMetaProperty(property: string, content: string) {
  const meta = document.querySelector(`meta[property="${property}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.setAttribute("property", property);
    newMeta.setAttribute("content", content);
    document.head.appendChild(newMeta);
  }
}

function setMetaMeta(name: string, content: string) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.setAttribute("name", name);
    newMeta.setAttribute("content", content);
    document.head.appendChild(newMeta);
  }
}
