interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function useSEOMeta({
  title,
  description,
  image,
  url,
}: SEOHeadProps) {
  const imageUrl = image || "https://vonguulian.com/og-image.png";
  const pageUrl = url || "https://vonguulian.com";

  // Update document title
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  // Update meta tags
  React.useEffect(() => {
    // Description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Open Graph
    const updateOGMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOGMeta("og:title", title);
    updateOGMeta("og:description", description);
    updateOGMeta("og:image", imageUrl);
    updateOGMeta("og:url", pageUrl);
    updateOGMeta("og:type", "website");
  }, [title, description, imageUrl, pageUrl]);
}
