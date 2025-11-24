import { useEffect } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
            Vonguul Music
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Banner Section */}
          <section>
            <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
              <img 
                src={musicBanner} 
                alt="Vonguul Music - featuring artistic visualization with golden headphones and sacred geometry"
                className="w-full h-auto"
                data-testid="img-music-banner"
              />
            </div>
            <p className="text-lg text-muted-foreground mt-6 text-center">
              Experience our curated collection of soundscapes designed to align with Vonguulian philosophy and enhance your journey.
            </p>
          </section>

          {/* YouTube Playlist Player */}
          <section>
            <Card>
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/videoseries?list=PL9_Gpv-HvDloxUdpIimZtLxTC-GAeOctq&autoplay=0"
                    title="Vonguul Music Playlist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    data-testid="youtube-playlist-player"
                  />
                </AspectRatio>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Navigate through the playlist using the controls. Each track is carefully selected to resonate with our principles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Context */}
          <section>
            <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
              <h2 className="font-bold text-primary mb-4 text-lg">About This Collection</h2>
              <p className="text-muted-foreground">
                Music has the power to transcend the ordinary and connect us to deeper truths. This playlist represents sonic expressions that align with Vonguulian values—harmony, balance, and the pursuit of elevated consciousness.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
