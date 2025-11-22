import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            About Vonguulian Design
          </h1>
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
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary">Education</h3>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
