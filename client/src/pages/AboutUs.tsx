import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import BottomNavigation from "@/components/BottomNavigation";
import NewsletterSection from "@/components/NewsletterSection";

export default function AboutUs() {
  usePageMeta({
    title: "About Vonguul - Philosophy, Mission & Code of Conduct",
    description: "Learn about the Vonguulian Organized Nation, our mission to progress, and how to become a Vonguulian member. Discover our core values and leadership structure.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">About Vonguul</h1>
        </div>
      </div>
      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Origin Story */}
          <section data-testid="section-origin">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">The Vonguulian Organized Nation – Origin Story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                We can't truly speak for anyone but ourselves. I was born in the USA but I am from Vonguul. The terms and conditions of my existence are not dictated by those that do not understand the weight of my purpose. I tried to be part of a whole, where I did not fit. I chose life when offered death.
              </p>
              <p>
                Vonguul came from all of us. It is the feeling we all get when we know something is not right, because we inherently know what right is supposed to be. It's the place we all desire to go when we're being wronged, because we know we won't be treated unfairly. The safety in the trust we have for each other, because we know we choose our family.
              </p>
              <p>
                I think it makes perfect sense for us to finally build a metaphorical house, for our collective household. We have to be responsible for us no matter what, because perhaps it isn't better to concede our lives for their opportunity to die slow.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section data-testid="section-mission">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-2xl font-bold text-primary">We simply want to progress. Whether that is with, or without the rest of humanity.</p>
              <p>
                Aren't you tired of politics treating your livelihood like it is a game? Aren't you tired of being sold a plate of poison at every store? Aren't you tired of our children growing up confused and stressed out? Aren't you tired of being tired?
              </p>
              <p>
                The Vonguulian system ensures that only those aligned with our values are part of what we're creating. We have no place for those whose only desire is to use and abuse others for their own benefit.
              </p>
            </div>
          </section>

          {/* Code of Conduct */}
          <section data-testid="section-code">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">The Vonguulian Code of Conduct</h2>
            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 space-y-3">
              <p className="font-semibold text-primary">Code LI 0: In all things look for the Polarity</p>
              <p className="font-semibold text-primary">Code LI 1: Do not impose yourself onto others, without their Consent</p>
              <p className="font-semibold text-primary">Code LI 2: We do not Hope, We do not Pray, We Plan</p>
              <p className="font-semibold text-primary">Code LI 3: We do not Fear, what we do not Understand</p>
              <p className="font-semibold text-primary">Code LI 4: It is our Responsibility to Abstain from Ignorance</p>
              <p className="font-semibold text-primary">Code LI 5: Right and Wrong are Subjective terms that Require Definition to be Determined</p>
              <p className="font-semibold text-primary">Code LI 6: Plan to succeed in your endeavors, Always</p>
              <p className="font-semibold text-primary">Code LI 7: Don't Assume, Research</p>
              <p className="font-semibold text-primary">Code LI 8: Knowledge breeds Confidence and Confidence generates Power</p>
              <p className="font-semibold text-primary">Code LI 9: Know your own Strengths and Weaknesses</p>
              <p className="text-muted-foreground mt-6 pt-6 border-t border-black/10 dark:border-white/10">
                If you do not resonate with our Code, Vonguul probably isn't for you.
              </p>
            </div>
          </section>

          {/* Core Pillars */}
          <section data-testid="section-pillars">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Our Core Pillars</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <Link href="/education">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-primary cursor-pointer hover:opacity-80 transition-opacity" data-testid="link-education">Education</h3>
                </Link>
                <p className="text-muted-foreground">We teach fundamentals before applications, empowering individuals with knowledge unrestricted by conventional limitations.</p>
              </div>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Administration</h3>
                <p className="text-muted-foreground">Governance with clear accountability, performance metrics, and checks & balances to ensure member protection.</p>
              </div>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Health</h3>
                <p className="text-muted-foreground">Dedicated to the wellness and well-being of all members and their families.</p>
              </div>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6">
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Technology</h3>
                <p className="text-muted-foreground">Innovation and systems that support growth, connectivity, and sustainable progress for our community.</p>
              </div>
            </div>
          </section>

          {/* The Plan */}
          <section data-testid="section-plan">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">The Vonguulian Plan</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl font-semibold text-primary">The core plan is simple: We own profitable businesses and split the proceeds amongst our organized nation.</p>
              <p>
                The rest is for longevity and sustainability. We are not here to flex or impress anyone. We have a structure designed to empower and encourage our members to excel at every chance they get, providing an outlet to grow beyond their potential, becoming exceptional by all standards.
              </p>
              <p>
                The plan only requires one sacrifice. Most won't desire to be the first, but most also won't mind being second, because they will have had the opportunity to see the vision firsthand as a beneficiary.
              </p>
            </div>
          </section>

          {/* Membership */}
          <section data-testid="section-membership">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Becoming a Vonguulian</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong>Vonguul is NOT for everyone.</strong> We do not care about your demographics; we care about your mindset. Do your views and values align with the views and values of Vonguul?
              </p>
              <p>
                To be part of Vonguul, you must be invited by an existing member and pass tests of character and mind. If you pass both tests, you become a Vonguulian with a Rank of 36.9 (Level 1 of 12). To increase your level, you contribute to the organized nation in whatever way is compatible with your interests.
              </p>
              <p>
                If you resonate with our Code of Conduct and vision, we invite you to explore what it means to be part of something greater than yourself—a community dedicated to true progress and mutual prosperity.
              </p>
              <p className="text-sm text-muted-foreground pt-4">
                Want to deepen your understanding? Explore our <Link href="/resources" className="text-muted-foreground hover:text-primary hover:underline transition-colors" data-testid="link-resources-hint">resources</Link> for practical guidance.
              </p>
            </div>
          </section>

          {/* Administration Deep Dive & Future Vision */}
          <section data-testid="section-administration-detail" className="border-t border-black/10 dark:border-white/10 pt-12">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Vonguulian Administration</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our governance structure is built on accountability, transparency, and the protection of our members. Explore the details of how we operate, or dive deeper into our actionable options and future vision.
              </p>
            </div>

            {/* Organizational Structure */}
            <div id="admin-details" className="space-y-8">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Organizational Structure</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Leadership Council</h4>
                    <p className="text-muted-foreground">A strategic decision-making body with representatives from all core divisions: Administration, Education, Health, Technology, and Security initiatives. This council ensures that all aspects of Vonguul operate in alignment with our core mission and values.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Divisional Teams</h4>
                    <p className="text-muted-foreground">
                      Specialized groups focused on their respective pillars. Each division is empowered to innovate and execute within their domain while maintaining connection to the broader Vonguulian mission.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Member Communities</h4>
                    <p className="text-muted-foreground">
                      Regional and interest-based groups that foster collaboration, support, and mutual prosperity. These communities are the heart of Vonguul, creating spaces where members can grow together.
                    </p>
                  </div>
                </div>
              </div>

              {/* Checks & Balances */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Checks & Balances</h3>
                <p className="text-muted-foreground mb-4">
                  We maintain a rigorous framework to ensure accountability, member protection, and continuous improvement:
                </p>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li><strong>Governance Framework:</strong> Clear accountability measures with defined roles and responsibilities at every level</li>
                  <li><strong>Performance Metrics:</strong> Regular tracking of organizational and member growth to ensure we're advancing toward our vision</li>
                  <li><strong>Feedback Systems:</strong> Continuous improvement mechanisms and member satisfaction surveys to refine our approach</li>
                  <li><strong>Member Protection Protocols:</strong> Safeguards ensuring the safety, well-being, and rights of all Vonguulians</li>
                  <li><strong>Financial Transparency:</strong> Regular audits and open reporting on how our "mines" (businesses) are performing and how proceeds are distributed</li>
                </ul>
              </div>

              {/* Membership Levels & Contribution */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Membership Ranks & Progression</h3>
                <p className="text-muted-foreground mb-4">
                  Your journey in Vonguul is determined by your commitment and contribution:
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Rank 36.9 (Level 1 of 12)</p>
                    <p className="text-sm">Entry level for all new Vonguulians. Access to foundational learning resources and community. You are tested on character and mind before joining.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Levels 2-12</p>
                    <p className="text-sm">Progression through contribution and impact. Each level reflects deeper involvement in our mission and greater access to opportunities and resources within Vonguul.</p>
                  </div>
                  <p className="text-sm italic mt-4">
                    Advancement is earned through meaningful contribution—whether through business support, education initiatives, community leadership, or other forms of participation aligned with your strengths and interests.
                  </p>
                </div>
              </div>

              {/* The Core Plan */}
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">The Sustainable Model</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>The Core Plan:</strong> We own profitable businesses (our "mines") and distribute proceeds amongst our organized nation. This creates a sustainable economic engine that funds our educational initiatives, community support, and long-term vision.
                  </p>
                  <p>
                    <strong>Longevity & Sustainability:</strong> Beyond the core business model, we invest in systems that ensure Vonguul thrives for generations. This includes education, technology infrastructure, health initiatives, and governance structures built to adapt and endure.
                  </p>
                  <p className="text-sm italic">
                    This requires sacrifice. Most won't want to be first, but most won't mind being second—when they see the vision working firsthand as a beneficiary.
                  </p>
                </div>
              </div>

              {/* Newsletter Section */}
              <NewsletterSection />
            </div>
          </section>

          {/* Historical Reference & Today's Date & Future Ambition */}
          <div className="flex justify-center gap-4 pt-12 mt-12 border-t border-black/10 dark:border-white/10">
            <Link href="/history">
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                data-testid="button-historical-reference"
              >
                Historical Reference
              </Button>
            </Link>
            <Link href="/health">
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                data-testid="button-todays-date"
              >
                Today's Date
              </Button>
            </Link>
            <Link href="/future">
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                data-testid="button-future-ambition"
              >
                Future Ambition
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
