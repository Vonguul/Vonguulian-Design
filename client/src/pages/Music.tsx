import { useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent } from "@/components/ui/card";
import musicBanner from "@assets/YTChannel Vonguul Music Banner_1763952834791.png";

export default function Music() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            Vonguulian Media
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Easter Egg Discovery */}
          <section>
            <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
              <h2 className="font-bold text-primary mb-4 text-lg">You Found It</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Congratulations. You've discovered an easter egg of sorts. This website was created in such a way that encourages exploring the site rather than being manipulated with psychological techniques to increase viewership time or manufacture artificial engagement.
                </p>
                <p>
                  If you decide to walk with Vonguul, it will be a choice that you made instead of some FOMO BS.
                </p>
                <p>
                  But back to the point of this page, and many others you may stumble across. This page will be where more media that Vonguul produces will be displayed—there may be a podcast, an internet TV channel, or even more music-related content. Other pages like this will most likely explain what their point is, but ultimately this is akin to peeling back the layers of Vonguul, to experience it organically.
                </p>
              </div>
            </div>
          </section>

          {/* Banner Section */}
          <section>
            <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
              <img 
                src={musicBanner} 
                alt="Vonguulian Media - featuring artistic visualization with golden headphones and sacred geometry"
                className="w-full h-auto"
                data-testid="img-music-banner"
              />
            </div>
          </section>

          {/* SoundCloud Playlist Player */}
          <section>
            <Card>
              <CardContent className="p-0">
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/firstword-secondword/sets/vonguul-will-rise&color=%23d4af37&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                    data-testid="soundcloud-playlist-player"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Vonguul Will Rise - A curated collection of soundscapes designed to align with Vonguulian philosophy and enhance your journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Future Media Content */}
          <section>
            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
              <h2 className="font-bold text-primary mb-4 text-lg">What's Coming</h2>
              <p className="text-muted-foreground">
                This space will evolve as Vonguul creates more media. Look forward to podcasts exploring deeper philosophical concepts, an internet TV channel featuring community perspectives, and expanded musical expressions. Each addition will be announced when ready, continuing the tradition of organic discovery over forced consumption.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
