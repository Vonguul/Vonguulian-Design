import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import BottomNavigation from "@/components/BottomNavigation";
import { Zap, Glasses, Hand, Headphones } from "lucide-react";

export default function VonguulFuture() {
  usePageMeta({
    title: "Aspects of Innovation - Future Vision - Vonguulian Design",
    description: "Explore Vonguul's vision for technology, innovation, and the future. Discover exclusive innovations and how we're shaping progress for the next generation.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">Aspects of Innovation</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Technology & Innovation */}
          <section data-testid="section-technology-intro">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Technology & Innovation</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Technology doesn't just mean cellphones and computers. It also encompasses irrigation, plumbing, travel, and quality of life enhancements. Though we may be able to live without these things, eventually we would have to dabble in them. We want security, and architecture is a form of technological advancement.
              </p>
              <p>
                In pertinence to our organized nation's success, we never planned to completely start over from scratch. Vonguul is meant to operate in a superimposed manner on top of what is already present. We don't require a physical territory to be called Vonguul or to operate within it. Instead, we aim to cooperate with established rules wherever possible to facilitate harmonious interactions with foreign entities.
              </p>
              <p>
                In summary, technology and innovation will become our bargaining chip for trade and foreign relation agreements. What kind of technology could we possibly create that would make foreign nations enter into formal agreements with us? We have many ideas, some of which are even gaining popularity with the public.
              </p>
            </div>
          </section>

          {/* Exclusive Innovations */}
          <section data-testid="section-exclusive-innovations">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Exclusive Innovations</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3 text-lg">Cognitive Enhancement Platform</h3>
                <p className="text-muted-foreground">
                  Utilizing Education to foster creativity and innovation by training to think outside of the box we're normally in.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3 text-lg">Bio-Integration Systems</h3>
                <p className="text-muted-foreground">
                  Wearable technology that can not only monitor and optimize health metrics in real-time, but can also serve auxiliary functions as well.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3 text-lg">Secure Knowledge Network</h3>
                <p className="text-muted-foreground">
                  Encrypted platform for sharing proprietary information among members, and a space solely for objective facts.
                </p>
              </div>
            </div>
          </section>

          {/* Access Levels */}
          <section data-testid="section-access-levels">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Technology Access Levels</h2>
            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 space-y-4 text-muted-foreground">
              <p>
                Levels of access are meant to protect and encourage our members. Protect them from others attempting to use them and encourage them to excel in their own unique path with a provided array of resources to do with as they see fit.
              </p>
              <p className="font-semibold text-primary">
                Certain technological advancements or variants are only available after reaching specific Ranks within the Levels.
              </p>
              <p className="italic text-sm">
                Not every tech mine in Vonguul will follow this format, but the innovations from our foundational Tech mine will. We don't impose onto others without appropriate levels of consent.
              </p>
            </div>
          </section>

          {/* Specific Tech Innovations */}
          <section data-testid="section-tech-innovations">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Technology Projects in Development</h2>
            <div className="space-y-6">
              {/* Hover Cars */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
                <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center" data-testid="img-hover-car">
                  <Zap className="w-24 h-24 text-primary opacity-30" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-primary mb-4 text-lg">Hover Cars</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      More like a personal hover vehicle, flying cars aren't really that hard to make. It is the security that is a main concern. We can fix the problem of navigation and operation issues but fixing the problem of human and mechanical consistency errors is another challenge altogether.
                    </p>
                    <p>
                      Ultimately this is one of the projects we would make public for obvious reasons, but it wouldn't be made capable of actual flight. It would just have unusual controls that people will quickly get used to.
                    </p>
                  </div>
                </div>
              </div>

              {/* Smart Glasses */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
                <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center" data-testid="img-ar-glasses">
                  <Glasses className="w-24 h-24 text-primary opacity-30" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-primary mb-4 text-lg">Smart Glasses</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Another piece of tech that is already in production outside of Vonguul would be smart glasses. Ranging from AR to VR. Vonguulian Tech variants will mostly focus on Augmented Reality, at least initially. We would prefer your waking life to be optimized before introducing another near unconscious life experience.
                    </p>
                    <p>
                      Vonguulian variants would include navigation assistance, quick view analysis with prompt. To be coupled with a special Tech Glove.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Gloves */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
                <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center" data-testid="img-tech-gloves">
                  <Hand className="w-24 h-24 text-primary opacity-30" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-primary mb-4 text-lg">Tech Gloves</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      It most likely will not look like traditional gloves and is intended to only be worn on one hand with minimal to no obstruction. Initial prototypes will use mini electromagnetic fields created by completing a circuit to simulate inputs.
                    </p>
                    <p>
                      This would be a supplemental product in a family of products. Will be used with Smart Glasses as a user input device.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bone Conduction Tech */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg overflow-hidden">
                <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center" data-testid="img-bone-conduction">
                  <Headphones className="w-24 h-24 text-primary opacity-30" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-primary mb-4 text-lg">Bone Conduction Technology</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Bone conduction technology is currently used primarily for music and headphones, but we believe there is a wider array of applications for this technology. We are exploring innovative uses beyond current consumer applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Platforms & Experiences */}
          <section data-testid="section-future-platforms">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Future Platforms & Experiences</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4 text-lg">Vonguulian Extranet</h3>
                <p className="text-muted-foreground">
                  We plan to create our own extranet designed to provide our members with the most accurate information in as secure a location as possible. Free of advertisements and fluff designed to distract you from your goals.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4 text-lg">Augmented Reality Experiences</h3>
                <p className="text-muted-foreground mb-3">
                  We plan to superimpose complete experiences over the physical world designed to augment reality into a visual representation that reflects our community. Imagine walking into a restaurant and seeing information that other Vonguulians have left about the place from quality to moments shared. Or looking at an ordinary house in the physical world that transforms into a completely new and fresh experience in the augmented world.
                </p>
                <p className="text-muted-foreground italic text-sm">
                  We are supposed to be the future, the pioneers of ideas that others can't fathom the value of. Our tech will be designed to create experiences that align with what makes sense.
                </p>
              </div>

              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4 text-lg">Design Philosophy</h3>
                <p className="text-muted-foreground">
                  Instead of going against the natural way of doing things, we take an approach that considers the whole. We acknowledge the differences and the importance of each side while trying to create harmony from the opposing forces. We aim to move with confidence.
                </p>
                <p className="text-muted-foreground italic mt-4 text-sm">
                  "And those who were seen dancing were thought to be insane by those who could not hear the <Link href="/music" className="text-current no-underline hover:text-primary transition-colors" aria-label="Visit Vonguul Music page" data-testid="link-music">music</Link>."
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
