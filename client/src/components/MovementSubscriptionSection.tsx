import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users } from "lucide-react";

export default function MovementSubscriptionSection() {
  return (
    <section className="py-24 px-4 bg-secondary dark:bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary" data-testid="text-subscription-badge">
            Early Access Available
          </span>
        </div>
        
        <h2 
          className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#ffc534]"
          data-testid="text-subscription-title"
        >
          Support the Vonguulian Movement
        </h2>
        
        <p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-subscription-description"
        >
          We simply want to progress. Your subscription directly fuels the development of our tools, 
          resources, and community initiatives. Choose a tier that reflects your level of commitment 
          to the Vonguulian Movement.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
            <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Supporter</h3>
            <p className="text-sm text-muted-foreground">
              Show your alignment with the movement and gain early access to new developments.
            </p>
          </div>
          
          <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
            <Users className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Builder</h3>
            <p className="text-sm text-muted-foreground">
              Contribute to our collective growth and receive priority access to innovations.
            </p>
          </div>
          
          <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Pioneer</h3>
            <p className="text-sm text-muted-foreground">
              Lead alongside us and help shape the future of Vonguul with direct involvement.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <p className="text-muted-foreground mb-4">
            <strong className="text-primary">Benefit:</strong> All subscribers gain early access to our 
            Human Design App currently in development. Be among the first to experience tools designed 
            for your personal alignment. Names of tiers will vary but the essence of the tiers will remain, while reflecting different commitment levels.
          </p>
        </div>

        <a 
          href="https://vonguul.gumroad.com/l/lygtv" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="rounded-full px-10 py-6 text-lg"
            data-testid="button-subscribe-movement"
          >
            Choose Your Tier
          </Button>
        </a>
        
        <p className="text-sm text-muted-foreground mt-6">
          If you decide to walk with Vonguul, it will be a choice that you made.
        </p>
      </div>
    </section>
  );
}
