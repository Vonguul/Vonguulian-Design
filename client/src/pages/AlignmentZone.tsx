import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollMemory } from "@/hooks/useScrollMemory";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Zap, Database, Users, Lock } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

export default function AlignmentZone() {
  useScrollMemory();
  usePageMeta({
    title: "The Alignment Zone - Human Design App | Vonguulian Design",
    description: "Download The Alignment Zone app - the ultimate interface for Human Design education. A cyber-mystic journey into self-discovery.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            The Alignment Zone
          </h1>
          <p className="text-xl text-white/80 mb-8">A cyber-mystic journey into self-discovery</p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.alignment.zone&pcampaignid=web_share" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="rounded-full px-10 py-6 text-lg gap-2"
              data-testid="button-play-store"
            >
              <Smartphone className="w-5 h-5" />
              Get it on Google Play
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <section data-testid="section-release">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Latest Release</span>
            </div>
            
            <h2 className="font-serif text-3xl font-bold mb-2 text-primary">v4.0.0 - Zero Point Activation</h2>
            <p className="text-muted-foreground mb-8">SYSTEM ONLINE.</p>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground mb-8">
              <p>
                Welcome to The Alignment Zone. The wait is over. The ultimate interface for Human Design education has officially launched. We have gamified the mechanics of your existence, turning self-discovery into an immersive, neon-soaked RPG where you are the main character.
              </p>
              <p className="text-xl font-semibold text-primary">
                Stop reading about your design. Start living it.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Feature Highlights</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-primary">Identity Initialization</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Precision Calculation with Swiss Ephemeris engine</li>
                  <li>Interactive TechnoBodyGraph - neon-glowing map of your genetic code</li>
                  <li>Deep Analysis: Type, Strategy, Authority, Profile, Variable Vectors</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-primary">The Dashboard (Your HUD)</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Energy & XP System - manage daily "Energy Battery"</li>
                  <li>Alignment Index - real-time tracker of personal growth</li>
                  <li>Internal Signals - visual reminders of your Signature</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-primary">The Flux Feed</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Procedural Scenarios tailored to your Open Centers</li>
                  <li>Make decisions based on Strategy & Authority</li>
                  <li>Learn to spot conditioning in real-time</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-primary">The Grimoire (Database)</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Massive searchable encyclopedia of Human Design</li>
                  <li>Gates, Channels, Profiles, Authorities</li>
                  <li>"Host Match" badges for personalized relevance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-primary mb-3">Real-Time Telemetry</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Interference Scanner:</strong> Monitor global planetary transits live</li>
                <li><strong>Moon Pulse:</strong> Live countdown to next Lunar Gate shift</li>
                <li><strong>Cusp Warnings:</strong> Visual alerts when planets drift between gates</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-primary mb-3">Network & Connection</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Profile Manager:</strong> Save friends/family and switch between charts</li>
                <li><strong>QR Code Exchange:</strong> Scan to instantly add neural codes</li>
                <li><strong>Neural Lens:</strong> Analyze external content through deconditioning lens</li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-primary">CLASSIFIED: Level 12+ Clearance</h4>
              </div>
              <p className="text-muted-foreground mb-4">"The Holographic Core" - For the most dedicated operatives.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>The Deep Dive:</strong> Access your Golden Path (Activation, Venus, Star Pearl sequences)</li>
                <li><strong>XP Drain:</strong> High-frequency data consumes XP every second</li>
                <li><strong>Cyber Tribes:</strong> Discover your codon ring affiliation</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-3">System Specs</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Engine:</strong> Hybrid React/Capacitor Architecture</li>
                <li><strong>Visuals:</strong> Orbitron/Space Mono typography with void-black OLED optimization</li>
                <li><strong>Sync:</strong> Local storage persistence with optional Cloud Sync</li>
                <li><strong>Status:</strong> Deployed. Pre-Registration Available Now.</li>
              </ul>
            </div>
          </section>

          <section className="text-center py-8 border-t border-black/10 dark:border-white/10">
            <p className="text-xl text-muted-foreground mb-8">
              Ready to initialize? See you in the Zone, Passenger.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://vonguul.gumroad.com/l/lygtv" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-10 py-6 text-lg"
                  data-testid="button-choose-tier"
                >
                  Choose a Tier
                </Button>
              </a>
            </div>
          </section>

          <section id="newsletter" data-testid="section-newsletter-wrapper">
            <NewsletterSection />
          </section>
        </div>
      </div>
    </div>
  );
}
