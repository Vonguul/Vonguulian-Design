import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import { Link } from "wouter";

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Understanding Your Human Design Type",
      category: "Introduction",
      excerpt: "Learn the foundational concepts of Human Design and how your type shapes your life strategy.",
      readTime: "8 min read",
      tags: ["Types", "Foundations", "Beginner"],
      link: "/resources/understanding-types",
    },
    {
      id: 2,
      title: "The Four Types: Manifestor, Generator, MG, Projector, Reflector",
      category: "Types & Strategies",
      excerpt: "Deep dive into each Human Design type and discover your unique strategy for decision-making.",
      readTime: "12 min read",
      tags: ["Types", "Strategy", "Decision-Making"],
      link: "/resources/four-types",
    },
    {
      id: 3,
      title: "Profiles: The Specific Role You Play in Life",
      category: "Advanced Concepts",
      excerpt: "Explore the 12 profiles in Human Design and understand your specific life role and purpose.",
      readTime: "10 min read",
      tags: ["Profiles", "Purpose", "Identity"],
      link: "/resources/profiles",
    },
    {
      id: 4,
      title: "Your Aura Type & Its Impact on Your Life",
      category: "Energy & Aura",
      excerpt: "Understand how your aura type influences your energy, relationships, and interactions with others.",
      readTime: "7 min read",
      tags: ["Aura", "Energy", "Relationships"],
      link: "/resources/aura-type",
    },
    {
      id: 5,
      title: "Authority in Human Design: Making Aligned Decisions",
      category: "Decision-Making",
      excerpt: "Learn about your inner authority and how to make decisions that align with your true nature.",
      readTime: "9 min read",
      tags: ["Authority", "Decisions", "Alignment"],
      link: "/resources/authority",
    },
    {
      id: 6,
      title: "Centers, Channels & Gates: The Energy Body Explained",
      category: "Advanced Concepts",
      excerpt: "Decode the intricate system of centers, channels, and gates that define your energetic blueprint.",
      readTime: "15 min read",
      tags: ["Centers", "Channels", "Gates", "Energy"],
      link: "/resources/centers-channels",
    },
    {
      id: 7,
      title: "Relationships Through Human Design",
      category: "Relationships",
      excerpt: "Discover how Human Design can improve your relationships by understanding compatibility and communication.",
      readTime: "11 min read",
      tags: ["Relationships", "Compatibility", "Communication"],
      link: "/resources/relationships",
    },
    {
      id: 8,
      title: "Living Your Design: Practical Application",
      category: "Practical Tips",
      excerpt: "Practical strategies for integrating your Human Design knowledge into daily life and decision-making.",
      readTime: "10 min read",
      tags: ["Practical", "Application", "Lifestyle"],
      link: "/resources/living-your-design",
    },
  ];

  const categories = ["All", "Introduction", "Types & Strategies", "Advanced Concepts", "Energy & Aura", "Decision-Making", "Relationships", "Practical Tips"];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            Human Design Resources
          </h1>
          <p className="text-white/80 text-lg" data-testid="text-page-subtitle">
            Explore our collection of articles and guides to deepen your understanding of Human Design
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold mb-6 text-primary">Browse by Category</h2>
            <div className="flex flex-wrap gap-3" data-testid="category-filter">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  data-testid={`button-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="resources-grid">
            {resources.map((resource) => (
              <Card
                key={resource.id}
                className="bg-white dark:bg-card border border-black/10 dark:border-white/10 hover-elevate transition-all flex flex-col"
                data-testid={`card-resource-${resource.id}`}
              >
                <CardHeader>
                  <div className="mb-2">
                    <span className="inline-block text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full" data-testid={`tag-category-${resource.id}`}>
                      {resource.category}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-xl text-black dark:text-white" data-testid={`text-title-${resource.id}`}>
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground mb-4 flex-1" data-testid={`text-excerpt-${resource.id}`}>
                    {resource.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded" data-testid={`tag-${resource.id}-${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Time & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
                    <span className="text-sm text-muted-foreground" data-testid={`text-readtime-${resource.id}`}>
                      {resource.readTime}
                    </span>
                    <Button size="sm" className="rounded-full" data-testid={`button-read-${resource.id}`}>
                      <Link href={resource.link}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call-to-action */}
          <div className="mt-16 bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 text-center" data-testid="section-cta">
            <h3 className="font-serif text-3xl font-bold mb-4 text-black dark:text-white">Want Personalized Guidance?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our Human Design consultants can provide personalized analysis and guidance tailored to your unique design.
            </p>
            <Button size="lg" className="rounded-full" data-testid="button-consultation-cta">
              <Link href="/about">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
