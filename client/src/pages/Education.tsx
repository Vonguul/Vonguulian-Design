import { usePageMeta } from "@/hooks/usePageMeta";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";

export default function Education() {
  usePageMeta({
    title: "Vonguulian Education System - Learn Our Approach",
    description: "Discover Vonguulian's approach to education: fundamentals before applications, both physical and metaphysical knowledge, and empowerment through understanding.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            Vonguulian Education System
          </h1>
          <p className="text-white/80 text-lg" data-testid="text-page-subtitle">
            A revolution in how knowledge is taught and understood
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Problem */}
          <section data-testid="section-problem">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Pointing Out the Inadequacies</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Vonguul identified critical problems within the current education system. Most educational systems have been converted into businesses with mandates that often contradict genuine learning:
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong>Dependency on Financial Resources:</strong> Education has become tied to profit, requiring "repeat customers" and quotas rather than focusing on student welfare.</li>
                <li><strong>Lack of Empathy for the Collective:</strong> The system treats students as data points and milestones rather than individuals with unique needs and potentials.</li>
                <li><strong>Undercompensation of Teachers:</strong> Despite their critical role in human development, teachers are not provided adequate compensation, tools, or training to effectively tutor their students.</li>
                <li><strong>Misaligned Resources:</strong> Resources are funneled into military advancements and entertainment distractions rather than meaningful education and human development.</li>
                <li><strong>The "When Will We Use This?" Problem:</strong> Students frequently ask this question because the practical applications of knowledge are never explained before learning begins.</li>
              </ul>
            </div>
          </section>

          {/* Vonguulian Education Philosophy */}
          <section data-testid="section-philosophy">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Our Educational Philosophy</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl font-semibold text-primary">
                Vonguul is not here to change those that do not want to change. We are here to provide another option to those that desire it.
              </p>
              <p>
                Vonguulian Education focuses on students learning the information that humanity has accumulated. This requires a fundamental shift in how we approach teaching:
              </p>
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Fundamentals First</h3>
                  <p className="text-muted-foreground">We begin with the fundamentals of any topic, establishing a solid foundation before exploring applied variants. This ensures every student understands the potential possibilities that knowledge allows.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Practical Application</h3>
                  <p className="text-muted-foreground">By teaching fundamentals before applications, we answer the question "when are we ever going to use this information?" before it becomes a thought in a student's mind.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Holistic Knowledge</h3>
                  <p className="text-muted-foreground">Both physical and metaphysical knowledge are considered essential. We believe a complete education addresses both the material and the transcendent aspects of existence.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section data-testid="section-approach">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Our Approach to Creation</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                While we acknowledge the need for system-wide corrections in education, Vonguul's aim is targeted at <strong>creation</strong>, not just correction. We are creating a form of education that is not a carbon copy of the current public education system.
              </p>
              <p>
                This means:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Curriculum designed around logical thinking, not arbitrary standards</li>
                <li>Teachers who are empowered and compensated fairly for their critical work</li>
                <li>Students who understand not just what to learn, but why they're learning it</li>
                <li>Knowledge integration that connects theory to real-world applications</li>
                <li>An educational environment that develops exceptional individuals by all standards</li>
              </ul>
            </div>
          </section>

          {/* Vonguulian Math Foundation */}
          <section data-testid="section-math" className="border-t border-black/10 dark:border-white/10 pt-12">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Vonguulian Math: A Sample</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Vonguulian Math exemplifies our commitment to logical, foundational education. Rather than memorizing formulas, students learn the principles behind them.
              </p>

              {/* Foundation */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-primary text-lg">The Foundation: Numbers and Position</h3>
                <p>
                  Numbers are symbols that hold quantitative value. Numbers are aligned to specific positions to signify different quantitative values. Understanding this positional system is the cornerstone of all mathematical understanding.
                </p>
                <div className="bg-black/5 dark:bg-white/5 p-4 rounded font-mono text-sm">
                  <p className="mb-2"><strong>Number Symbols (English):</strong></p>
                  <p>0 (Zero), 1 (One), 2 (Two), 3 (Three), 4 (Four), 5 (Five), 6 (Six), 7 (Seven), 8 (Eight), 9 (Nine)</p>
                  <p className="mt-4"><strong>Column Positions:</strong></p>
                  <p>1 = Ones, 2 = Tens, 3 = Hundreds, 4 = Thousands, 5 = Ten Thousands, and so forth</p>
                </div>
                <p>
                  The columns are used throughout all mathematics. By building a solid foundation with these blocks of information, complex mathematical concepts become easily understood.
                </p>
              </div>

              {/* Addition */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-primary text-lg">Addition: Combining Quantities</h3>
                <p>
                  Addition is when we take two or more numbers and combine them to form a new number. The logic behind this is that every number occurs in a sequence. When adding, we are combining numbers along this sequence.
                </p>
                <p>
                  <strong>The Number Line:</strong> Understanding the sequence helps us visualize addition. If we add 1 space and 3 spaces, we get 4 spaces. We can represent this as: 1 + 3 = 4
                </p>
                <p>
                  Once you understand the pattern that numbers follow—from the single digit ones (0-9), to the tens (10-99), to the hundreds (100-999), and so forth—addition becomes a systematic process that anyone can master.
                </p>
              </div>

              {/* Subtraction */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-primary text-lg">Subtraction: Understanding Positive and Negative</h3>
                <p>
                  Subtraction works along the same number line as addition, but instead of going up in quantity, you go down. It is removing or taking away.
                </p>
                <p>
                  A critical concept in subtraction is understanding positive and negative numbers. These are referred to as "charges" and tell us more about the type of number we're dealing with.
                </p>
                <div className="bg-black/5 dark:bg-white/5 p-4 rounded font-mono text-sm">
                  <p><strong>Number Line:</strong></p>
                  <p>-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5</p>
                  <p className="mt-2">← Negative | Neutral | Positive →</p>
                </div>
                <p>
                  Understanding whether numbers are positive or negative becomes increasingly important as mathematics becomes more advanced. Vonguulian Math is meant to always be logical, building each concept systematically on the previous one.
                </p>
              </div>

              <p className="italic text-center text-primary mt-6">
                This logical approach continues through all mathematical operations, ensuring students understand not just "how" but "why" mathematics works.
              </p>
            </div>
          </section>

          {/* Full Sample Section */}
          <section data-testid="section-sample" className="border-t border-black/10 dark:border-white/10 pt-12">
            <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
              <h2 className="font-serif text-3xl font-bold mb-4 text-primary">Experience Our Full Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">Ready to dive deeper into Vonguulian Education? Download our comprehensive sample that showcases our complete educational methodology, including detailed lessons, foundational concepts, and practical applications across one subjects.</p>
              <a href="https://vonguulian.gumroad.com/l/freesample" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="rounded-full px-8"
                  data-testid="button-download-sample"
                >
                  Download Full Sample
                </Button>
              </a>
            </div>
          </section>

          {/* Call to Action */}
          <section data-testid="section-cta" className="border-t border-black/10 dark:border-white/10 pt-12">
            <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Interested in Vonguulian Education?</h3>
              <p className="text-muted-foreground mb-6">
                Learn more about our approach and how we empower individuals through knowledge and understanding.
              </p>
              <p className="text-muted-foreground text-sm">
                Explore our <a href="/resources" className="text-primary hover:underline font-semibold">resources section</a> for more learning materials and insights into the Vonguulian philosophy.
              </p>
            </div>
          </section>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
