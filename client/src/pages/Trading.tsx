import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap, Shield, Bell, BookOpen, ExternalLink, Lock } from "lucide-react";
import NewsletterSection from "@/components/NewsletterSection";

export default function Trading() {
  usePageMeta({
    title: "Trading Community - Vonguulian Design",
    description: "Join the Vonguulian trading community. Access trade education, live signals, and a community of aligned traders.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#d9a520]/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#d9a520]" />
            <span className="text-sm font-medium text-[#d9a520]">Vonguulian Trading</span>
          </div>
          <h1
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-4"
            data-testid="text-trading-title"
          >
            Trade with Alignment
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Two distinct communities built for traders who understand that clarity of mind and clarity of position go hand in hand.
          </p>
        </div>
      </div>
      <div className="py-20 px-4 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8 mb-16">

            <div
              className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 flex flex-col"
              data-testid="card-community-discord"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#d9a520]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#d9a520]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#d9a520]">The Trading Floor</h2>
                  <p className="text-sm text-muted-foreground">Community &amp; Education</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Trade education, concepts, and market frameworks discussed openly by the community</p>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Connect with other aligned traders — share insights, ask questions, grow together</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Curated channels for technical analysis, mindset, risk management, and market psychology</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Regular discussions on strategy, discipline, and the psychology of trading</p>
                </div>
              </div>

              <div className="bg-[#d9a520]/5 border border-[#d9a520]/20 rounded-lg p-4 mb-6">
                <p className="text-center text-sm font-semibold text-[#d9a520]">Limited Access</p>
                <p className="text-center text-xs text-muted-foreground mt-1">Ask about how to join the community at no cost</p>
              </div>

              <a
                href="https://discord.gg/AV7fuYsZfs"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-join-community-discord"
              >
                <Button
                  size="lg"
                  className="w-full rounded-full gap-2 bg-[#d9a520] text-black"
                >
                  <Users className="w-5 h-5" />
                  Join The Trading Floor
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div
              className="bg-black border border-[#d9a520]/30 rounded-lg p-8 flex flex-col relative"
              data-testid="card-signals-discord"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-[#d9a520] text-black text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#d9a520]/20 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-[#d9a520]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#d9a520]">Signal Room</h2>
                  <p className="text-sm text-white/50">Live Trade Signals</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">Real-time trade signals with entry, target, and stop loss levels</p>
                </div>
                <div className="flex items-start gap-3">
                  <Bell className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">Instant alerts when high-probability setups form across key markets</p>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">Each signal accompanied by reasoning and context — learn while you trade</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-[#d9a520] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-white/70">Exclusive access to signal archives and performance tracking</p>
                </div>
              </div>

              <div className="bg-[#d9a520]/10 border border-[#d9a520]/30 rounded-lg p-4 mb-6">
                <p className="text-center text-2xl font-bold text-[#d9a520]">
                  $25 <span className="text-base font-normal text-white/50">/ month</span>
                </p>
                <p className="text-center text-xs text-white/40 mt-1">Cancel anytime</p>
              </div>

              <a
                href="https://buy.stripe.com/bJe14m42X7g8cZ35LLbbG00"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-join-signals-discord"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full gap-2 border-[#d9a520] text-[#d9a520] bg-transparent"
                >
                  <Bell className="w-5 h-5" />
                  Join Signal Room
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

          </div>

          <div className="bg-[#d9a520]/5 border border-[#d9a520]/20 rounded-lg p-8 mb-16 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#d9a520] mb-4">Trading as a Practice</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The Vonguulian approach to trading is no different from our approach to life — clarity, alignment, and patience.
              Markets, like people, have a design. Learning to read that design is what separates reactive traders from those
              who operate from a place of true strategy.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-center mb-10 text-[#d9a520]">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-[#d9a520] mx-auto mb-4" />
                <h4 className="font-semibold text-[#d9a520] mb-2">Discipline First</h4>
                <p className="text-sm text-muted-foreground">
                  Every signal and discussion is grounded in risk management. We do not gamble. We position.
                </p>
              </div>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 text-center">
                <BookOpen className="w-8 h-8 text-[#d9a520] mx-auto mb-4" />
                <h4 className="font-semibold text-[#d9a520] mb-2">Education Embedded</h4>
                <p className="text-sm text-muted-foreground">
                  Whether free or premium, every channel carries the intent to develop you as a trader.
                </p>
              </div>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-[#d9a520] mx-auto mb-4" />
                <h4 className="font-semibold text-[#d9a520] mb-2">Consistent Process</h4>
                <p className="text-sm text-muted-foreground">We track what we call. Signals are posted  every week on Sunday with full transparency.</p>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-black/10 dark:border-white/10 pt-12 mb-12">
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start with the community. Upgrade when you are ready for signals. There is no pressure, only alignment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.gg/AV7fuYsZfs" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-full px-10 gap-2 bg-[#d9a520] text-black"
                  data-testid="button-cta-community"
                >
                  <Users className="w-5 h-5" />
                  Join for Free
                </Button>
              </a>
              <a href="https://buy.stripe.com/bJe14m42X7g8cZ35LLbbG00" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 gap-2 border-[#d9a520] text-[#d9a520]"
                  data-testid="button-cta-signals"
                >
                  <Bell className="w-5 h-5" />
                  Get Signals — $25/mo
                </Button>
              </a>
            </div>
          </div>

          <NewsletterSection />
        </div>
      </div>
    </div>
  );
}
