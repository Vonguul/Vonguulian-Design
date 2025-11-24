import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { getArticleBySlug } from "@shared/articles";

export default function ArticleDetail() {
  const [match, params] = useRoute("/resources/:slug");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const article = params?.slug ? getArticleBySlug(params.slug) : undefined;

  useEffect(() => {
    if (!article) {
      setError("Article not found");
      setLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(article.filePath);
        if (!response.ok) {
          throw new Error("Failed to load article");
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError("Failed to load article content");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [article]);

  if (!match) return null;

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/resources">
            <Button variant="outline" data-testid="button-back-to-resources">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-8 px-4 border-b border-black/20 dark:border-white/20">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
          <h1
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-article-title"
          >
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/70">
            <span className="text-sm px-3 py-1 bg-primary/20 rounded-full" data-testid="badge-category">
              {article.category}
            </span>
            <div className="flex items-center gap-1" data-testid="text-read-time">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          {loading && (
            <div className="text-center py-12" data-testid="loading-spinner">
              <p className="text-muted-foreground">Loading article...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded p-4 mb-6" data-testid="error-message">
              <p className="text-red-600 dark:text-red-200">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div
              className="prose dark:prose-invert prose-sm md:prose-base max-w-none
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-black/80 dark:prose-p:text-white/80
              prose-strong:text-black dark:prose-strong:text-white
              prose-a:text-primary hover:prose-a:underline
              prose-code:text-sm prose-code:bg-black/5 dark:prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-black/5 dark:prose-pre:bg-white/10 prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10
              prose-ul:text-black/80 dark:prose-ul:text-white/80
              prose-ol:text-black/80 dark:prose-ol:text-white/80
              prose-li:marker:text-primary"
              data-testid="article-content"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          )}

          {/* Tags */}
          {!loading && !error && (
            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-2" data-testid="tags-container">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full"
                    data-testid={`tag-${tag.toLowerCase()}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          {!loading && !error && (
            <div className="mt-12 p-8 bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-3 text-primary">
                Ready to explore your design?
              </h3>
              <p className="text-black/70 dark:text-white/70 mb-6">
                Get a personalized Human Design reading through our consultation services.
              </p>
              <Link href="/#consultation">
                <Button variant="default" data-testid="button-consultation-cta">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}