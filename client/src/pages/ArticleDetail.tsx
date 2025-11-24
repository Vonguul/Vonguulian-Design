import { useEffect, useState, useRef } from "react";
import { useRoute } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, ArrowUp, Share2, Mail } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";
import { getArticleBySlug, articles } from "@shared/articles";

export default function ArticleDetail() {
  const [match, params] = useRoute("/resources/:slug");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const article = params?.slug ? getArticleBySlug(params.slug) : undefined;

  // Dynamic meta tags for article
  usePageMeta({
    title: article ? `${article.title} - Vonguulian Design` : "Article - Vonguulian Design",
    description: article ? article.excerpt : "Read articles about Human Design",
  });
  
  // Get related articles (same category, different article)
  const relatedArticles = article 
    ? articles.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3)
    : [];

  useEffect(() => {
    if (!article) {
      setError("Article not found");
      setLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/articles/${article.slug}.md`);
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

  // Reading progress and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const element = contentRef.current;
      const totalHeight = element.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    }
  };

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
    <div id="main-content" className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress" 
        style={{ width: `${readingProgress}%` }}
        data-testid="reading-progress"
      />

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
          <div className="flex flex-wrap gap-4 text-white/70 text-sm">
            <span className="px-3 py-1 bg-primary/20 rounded-full" data-testid="badge-category">
              {article.category}
            </span>
            <div className="flex items-center gap-1" data-testid="text-read-time">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <span data-testid="text-published-date">{article.publishedDate}</span>
            <span data-testid="text-author">By {article.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 bg-white dark:bg-black" ref={contentRef}>
        <div className="max-w-4xl mx-auto">
          {loading && (
            <div className="text-center py-12" data-testid="loading-spinner">
              <div className="skeleton h-64 mb-4"></div>
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

          {/* Article Metadata & Sharing */}
          {!loading && !error && (
            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-wrap gap-2 mb-6" data-testid="tags-container">
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

              {/* Share Buttons */}
              <div className="flex gap-2 mb-8" data-testid="share-buttons">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  data-testid="button-share"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          )}

          {/* Related Articles */}
          {!loading && !error && relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-black/10 dark:border-white/10">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary" data-testid="related-articles-title">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-3 gap-4" data-testid="related-articles-grid">
                {relatedArticles.map((relArticle) => (
                  <Link key={relArticle.id} href={`/resources/${relArticle.slug}`}>
                    <div
                      className="p-4 border border-black/10 dark:border-white/10 rounded-lg hover-elevate transition-all cursor-pointer"
                      data-testid={`related-article-${relArticle.id}`}
                    >
                      <h4 className="font-serif font-bold text-sm mb-2 text-black dark:text-white" data-testid={`text-related-title-${relArticle.id}`}>
                        {relArticle.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">{relArticle.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter CTA */}
          {!loading && !error && (
            <div className="mt-16 pt-12 border-t border-black/10 dark:border-white/10">
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8 text-center" data-testid="newsletter-cta-section">
                <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">
                  Get Insights Like This
                </h3>
                <p className="text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
                  Enjoyed this article? Subscribe to our newsletter for more Human Design wisdom and practical guidance delivered to your inbox.
                </p>
                <Link href="/about">
                  <Button variant="default" data-testid="button-newsletter-cta">
                    Subscribe Now
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Consultation CTA */}
          {!loading && !error && (
            <div className="mt-12 p-8 bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-3 text-primary">
                Ready to explore your design?
              </h3>
              <p className="text-black/70 dark:text-white/70 mb-6">
                Get a personalized Human Design reading through our consultation services.
              </p>
              <Link href="/#contact">
                <Button variant="default" data-testid="button-consultation-cta">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-20 right-4 p-3 bg-primary text-primary-foreground rounded-full hover-elevate transition-all z-30"
          aria-label="Back to top"
          data-testid="button-back-to-top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <BottomNavigation />
    </div>
  );
}