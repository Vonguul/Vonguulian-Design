export const articles = [
  {
    id: 1,
    slug: "understanding-types",
    title: "Understanding Your Human Design Type",
    category: "Introduction",
    excerpt: "Learn the foundational concepts of Human Design and how your type shapes your life strategy.",
    readTime: "8 min read",
    tags: ["Types", "Foundations", "Beginner"],
    filePath: "/articles/understanding-types.md",
  },
  {
    id: 2,
    slug: "four-types",
    title: "The Four Types: Manifestor, Generator, MG, Projector, Reflector",
    category: "Types & Strategies",
    excerpt: "Deep dive into each Human Design type and discover your unique strategy for decision-making.",
    readTime: "12 min read",
    tags: ["Types", "Strategy", "Decision-Making"],
    filePath: "/articles/four-types.md",
  },
  {
    id: 3,
    slug: "profiles",
    title: "Profiles: The Specific Role You Play in Life",
    category: "Advanced Concepts",
    excerpt: "Explore the 12 profiles in Human Design and understand your specific life role and purpose.",
    readTime: "10 min read",
    tags: ["Profiles", "Purpose", "Identity"],
    filePath: "/articles/profiles.md",
  },
  {
    id: 4,
    slug: "aura-type",
    title: "Your Aura Type & Its Impact on Your Life",
    category: "Energy & Aura",
    excerpt: "Understand how your aura type influences your energy, relationships, and interactions with others.",
    readTime: "7 min read",
    tags: ["Aura", "Energy", "Relationships"],
    filePath: "/articles/aura-type.md",
  },
  {
    id: 5,
    slug: "authority",
    title: "Authority in Human Design: Making Aligned Decisions",
    category: "Decision-Making",
    excerpt: "Learn about your inner authority and how to make decisions that align with your true nature.",
    readTime: "9 min read",
    tags: ["Authority", "Decisions", "Alignment"],
    filePath: "/articles/authority.md",
  },
  {
    id: 6,
    slug: "centers-channels",
    title: "Centers, Channels & Gates: The Energy Body Explained",
    category: "Advanced Concepts",
    excerpt: "Decode the intricate system of centers, channels, and gates that define your energetic blueprint.",
    readTime: "15 min read",
    tags: ["Centers", "Channels", "Gates", "Energy"],
    filePath: "/articles/centers-channels.md",
  },
  {
    id: 7,
    slug: "relationships",
    title: "Relationships Through Human Design",
    category: "Relationships",
    excerpt: "Discover how Human Design can improve your relationships by understanding compatibility and communication.",
    readTime: "11 min read",
    tags: ["Relationships", "Compatibility", "Communication"],
    filePath: "/articles/relationships.md",
  },
  {
    id: 8,
    slug: "living-your-design",
    title: "Living Your Design: Practical Application",
    category: "Practical Tips",
    excerpt: "Practical strategies for integrating your Human Design knowledge into daily life and decision-making.",
    readTime: "10 min read",
    tags: ["Practical", "Application", "Lifestyle"],
    filePath: "/articles/living-your-design.md",
  },
];

export type Article = (typeof articles)[0];

export const categories = [
  "All",
  "Introduction",
  "Types & Strategies",
  "Advanced Concepts",
  "Energy & Aura",
  "Decision-Making",
  "Relationships",
  "Practical Tips",
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "All") return articles;
  return articles.filter((article) => article.category === category);
}