import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import { Link } from "wouter";
import { articles, categories, getArticlesByCategory } from "@shared/articles";

export default function Resources() {
  usePageMeta({
    title: "Human Design Resources & Articles - Vonguulian Design",
    description: "Explore our collection of Human Design articles and guides covering types, strategies, authority, and practical applications. Learn how to live your design.",
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = getArticlesByCategory(selectedCategory);

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
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  data-testid={`button-category-${category.toLowerCase()}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="resources-grid">
            {filteredArticles.map((resource) => (
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

                  {/* Metadata & CTA */}
                  <div className="space-y-3 pt-4 border-t border-black/10 dark:border-white/10">
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground" data-testid={`metadata-${resource.id}`}>
                      <span data-testid={`text-author-${resource.id}`}>{resource.author}</span>
                      <span data-testid={`text-date-${resource.id}`}>{resource.publishedDate}</span>
                      <span data-testid={`text-readtime-${resource.id}`}>{resource.readTime}</span>
                    </div>
                    <Link href={`/resources/${resource.slug}`}>
                      <Button size="sm" className="rounded-full w-full" data-testid={`button-read-${resource.id}`}>
                        Read More
                      </Button>
                    </Link>
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
