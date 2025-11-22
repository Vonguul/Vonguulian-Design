import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function VonguulFuture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/about">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10" data-testid="button-back-about">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Button>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">Stare Into The Abyss</h1>
          <p className="text-xl text-muted-foreground">Actionable Options & The Future Steps to Come</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Actionable Options */}
          <section data-testid="section-actionable">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">What You Can Do Right Now</h2>
            <div className="space-y-8">
              {/* Level 1 */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Level 1: Foundation & Learning</h3>
                <p className="text-muted-foreground mb-4">Start your journey with us today through accessible learning opportunities:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Participate in Tutoring Classes for K-12 Subjects</li>
                  <li>Engage with Specialized Guidance Services</li>
                  <li>Attend Webinars & Seminars on personal development</li>
                  <li>Access Online Video Courses at your own pace</li>
                  <li>Explore Human Design information through our Cheatsheets</li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">Entry Level: Rank 36.9 (Level 1 of 12) - Open to all who resonate with the Vonguulian Code of Conduct</p>
              </div>

              {/* Level 2 */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Level 2: Growth & Mentorship</h3>
                <p className="text-muted-foreground mb-4">For those ready to deepen their commitment:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Join our targeted Apprenticeship Programs</li>
                  <li>Receive guidance from approved Vonguulian leaders</li>
                  <li>Access resources tailored to your individual potential</li>
                  <li>Create success from within our network</li>
                </ul>
              </div>

              {/* Level 3 */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Level 3: Recognition & Credibility</h3>
                <p className="text-muted-foreground mb-4">Build your expertise within the Vonguulian system:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Receive official Recognition and Certification</li>
                  <li>Build your network through our credibility system</li>
                  <li>Solve the Entry-Level Problem by getting selected first</li>
                  <li>Become a resource for others in your field</li>
                </ul>
              </div>

              {/* Support Vonguul */}
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Immediate Actions You Can Take</h3>
                <p className="text-muted-foreground mb-4">While we build the future, here's how you can support Vonguul today:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Patronize our businesses and services (our "mines" in Vonguul terminology)</li>
                  <li>Utilize our Cheatsheets for personal development and learning</li>
                  <li>Explore Consultation Services through our Blueprint Consultation offering</li>
                  <li>Engage in Alignment Coaching to clarify your path forward</li>
                  <li>Spread the word to those who resonate with our Code of Conduct</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section data-testid="section-future" className="border-t border-black/10 dark:border-white/10 pt-16">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">The Future Steps to Come</h2>
            <div className="space-y-8">
              {/* Level 4 */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Level 4: Institutional Credibility</h3>
                <p className="text-muted-foreground mb-4">As Vonguul expands, we will establish:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Our own Private Education Institute with Public Accreditation</li>
                  <li>Exclusive admission for offspring of our members</li>
                  <li>Education validated by external communities we engage with</li>
                  <li>World-class curriculum built on Vonguulian principles</li>
                </ul>
              </div>

              {/* Level 5 */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Level 5: Universal Impact</h3>
                <p className="text-muted-foreground mb-4">The ultimate vision—a Vonguulian University where:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Our children interact with others in a safe, secure environment</li>
                  <li>Our ideologies are carefully shared with those beyond our nation</li>
                  <li>Vonguulian values shape the education of future generations</li>
                  <li>True progress becomes the standard, not the exception</li>
                </ul>
              </div>

              {/* Timeline Vision */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">The Progression of Our Nation</h3>
                <p className="text-muted-foreground mb-6">
                  Every empire is built one step at a time. Vonguul is no different. As our businesses ("mines") grow and prosper, our progression accelerates. The better our enterprises perform, the faster we achieve these milestones.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Today:</strong> We provide Human Design Cheatsheets and Vonguulian Design Counseling Services. We are building awareness and establishing our foundation.
                </p>
                <p className="text-muted-foreground">
                  <strong>Tomorrow (Figuratively):</strong> Cheatsheets for additional educational subjects. Expanded consulting services. The infrastructure for apprenticeship programs. The beginning of institutional recognition.
                </p>
                <p className="text-muted-foreground mt-4 text-sm italic">
                  Progress takes time. We are committed to quality over speed. One day, it will be someone's beginning—the beginning of a life shaped by Vonguul.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t border-black/10 dark:border-white/10 pt-16 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Ready to Take Your Next Step?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              The future of Vonguul is built by those who choose to participate today. Whether you're looking to learn, grow, or become part of something greater, there's a place for you in our organized nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button variant="default" size="lg" data-testid="button-explore-offerings">
                  Explore Our Offerings
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg" data-testid="button-get-in-touch">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
