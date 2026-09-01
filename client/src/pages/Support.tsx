import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Compass, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  usePageMeta({
    title: "Support Vonguul - Vonguulian Design",
    description: "Support Vonguul's mission through the recommendations and resources we share.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <section className="bg-black py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#d9a520]/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#d9a520]" />
            <span className="text-sm font-medium text-[#d9a520]">Support Vonguul</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5">
            Support in Passing
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            You can help Vonguul keep building toward a more thoughtful, capable, and connected future — without making a separate donation.
          </p>
        </div>
      </section>
      <main className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto bg-[#d9a520]/5 border border-[#d9a520]/20 rounded-lg p-8 md:p-12 text-center mb-10">
            <Compass className="w-10 h-10 text-[#d9a520] mx-auto mb-5" />
            <h2 className="font-serif text-3xl font-bold text-[#d9a520] mb-5">
              Choose with intention
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Vonguul shares useful products, tools, and resources from partners we believe can help you and indirectly support human progress. When you choose to explore or purchase through one of those recommendations, you can support the work here in passing.</p>
              <p>
                There is no pressure and no extra cost to you. Simply use the recommendations when they genuinely serve you.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border border-black/10 dark:border-white/10 rounded-lg p-8 mb-12">
            <h2 className="font-serif text-2xl font-bold text-center mb-4">
              Why this matters
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
              Every small act of support helps Vonguul create more educational resources, thoughtful tools, and spaces for people committed to growing themselves and the world around them.
            </p>
          </div>

          <section className="mb-12" aria-labelledby="recommendations-title">
            <div className="text-center mb-6">
              <h2 id="recommendations-title" className="font-serif text-3xl font-bold text-[#d9a520] mb-3">
                Explore Vonguul Picks
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse the recommendations directly below. If something genuinely serves you, choosing it through Vonguul Picks helps support the work behind Vonguul.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-lg">
              <iframe
                src="https://vonguul-picks.vercel.app/"
                className="w-full h-[70vh] min-h-[620px] border-0"
                title="Vonguul Picks affiliate recommendations"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                data-testid="iframe-vonguul-picks"
              />
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://vonguul-picks.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full gap-2">
                  Open Vonguul Picks in a new tab
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </section>

          <div className="max-w-3xl mx-auto bg-black text-white rounded-lg p-6 md:p-8 text-center">
            <p className="text-sm text-white/60 leading-relaxed">
              Affiliate disclosure: Vonguul may earn a small commission from qualifying purchases made through some of our recommendation links. This does not change the price you pay, and we only want you to choose what is right for you.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/">
              <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
                Return to Vonguul
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}