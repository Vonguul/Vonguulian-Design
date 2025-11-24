import BottomNavigation from "@/components/BottomNavigation";

export default function Health() {

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">The Crisis of Survival</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Holistic Direction */}
          <section data-testid="section-holistic-direction">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Holistic Direction</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">Mind-Body Connection</h3>
                <p className="text-muted-foreground">
                  Integrating mental wellness with physical health for complete wellbeing.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">Life Balance</h3>
                <p className="text-muted-foreground">
                  Harmonizing work, rest, and personal development activities.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">Environmental Alignment</h3>
                <p className="text-muted-foreground">
                  Creating living and working spaces that support natural health rhythms.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">Consumption & Behavior Habits</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong>Nutritional Intelligence</strong> - Making informed food choices</li>
                  <li><strong>Hydration Optimization</strong> - Strategic water intake</li>
                  <li><strong>Sleep Quality</strong> - Creating routines for restorative rest</li>
                  <li><strong>Movement Integration</strong> - Incorporating physical activity</li>
                  <li><strong>Breathing Practices</strong> - Conscious breathing techniques</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Approach to Health */}
          <section data-testid="section-health-approach">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Vonguul's Approach to Health</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                We recognize the effectiveness of both modern medical practices and holistic approaches. We are not against invasive procedures, however we are also not avid supporters either. If we can resolve issues without invasive procedures and the efficacy is on par with modern medical approaches, the non-invasive method is more suitable.
              </p>
              <p>
                The Health Sector of Vonguul first focuses on consumption and behaviors associated with a healthy lifestyle. By healthy, we mean a mind and body in alignment with the concept of health. This looks like unmodified raw food being produced for our members to consume, and exercise initiatives designed to promote healthy physical forms. Exercise doesn't have to be boring, but it does need to cater to as many individuals as possible.
              </p>
              <p className="italic text-sm">
                We keep our options open if the result is thriving life.
              </p>
            </div>
          </section>

          {/* Food & Nutrition */}
          <section data-testid="section-food-nutrition">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Food & Nutrition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Food Categories</h3>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-1">Vegetation Realm</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Vegetables</li>
                      <li>Fruits</li>
                      <li>Nuts</li>
                      <li>Roots</li>
                      <li>Herbs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Animal Realm</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Meat</li>
                      <li>Fish</li>
                      <li>Byproducts (Honey, Milk, Eggs)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Mineral & Metal Realms</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Some Spices (e.g. salt)</li>
                      <li>Iron</li>
                      <li>Copper</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Problems & Notes</h3>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-1">Vegetation Realm</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Genetically Modified to Poison</li>
                      <li>Controlled group of availability</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Animal Realm</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Genetically Modified to Poison</li>
                    </ul>
                  </div>
                  <p className="italic mt-4">
                    There is an abundance of edible vegetation that humanity does not consume due to consumerism. The animal realm is also a controlled group of availability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Potential Solutions */}
          <section data-testid="section-potential-solutions">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Potential Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Terrarium Grocery Store</h3>
                <p className="text-muted-foreground mb-3">
                  A facility designed to operate as a terrarium simulating natural environments safely, while also acting as a grocery store to be harvested by patrons.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Main challenge: Scale. Current options are in-home smart gardens.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Outdoor Hub</h3>
                <p className="text-muted-foreground mb-3">
                  An optional concept similar to the terrarium but with animals. Could be a natural breeding facility to encourage natural pasture raising. It is important to know how our bellies are filled.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Challenges: Scale and humanitarian considerations.
                </p>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Holistic Biology</h3>
                <p className="text-muted-foreground">
                  Science has shown support for certain holistic approaches. The Tantric Chakra System has been given enough recognition to be included in an approach to health. The Human Design System, though it derives from Tantric Chakra System ideology, also adds its own twist to original concepts.
                </p>
              </div>
            </div>
          </section>

          {/* Mental Consumption */}
          <section data-testid="section-mental-consumption">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Mental Consumption & Belief</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                A complete health approach should factor in mental consumption habits. What you watch, what you listen to, what you read, what you believe, what you doubt, how you view your experience are all related to your mental health. This is the psychology behind our physical actions.
              </p>
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">The Hermetic Principle of Cause and Effect</h3>
                <p>
                  The relationship between cause and effect—every effect has a cause. When we take a step back from the moment, we can infer an array of possibilities if we have enough data. We're all natural scientists trying to make sense of the world around us.
                </p>
              </div>
              <p>
                Belief is a powerful force. Consider the placebo effect—it's just a water pill, but you believe it is the cure and somehow it becomes the cure. We are clearly more than what we were taught we were. It is worth finding out why these things work, and if it is possible to harness whatever it is that heals the ailments of the body.
              </p>
            </div>
          </section>

          {/* Tantric Chakra System */}
          <section data-testid="section-chakra-system">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Tantric Chakra System & Endocrine Glands</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                The Tantric Chakra System was developed over approximately 1000 years, starting from the Vedas. It consists of 7 centers connected by channels that correlate to the physical body and are believed to be susceptible to manipulation via food, exercise, thoughts, and breathing. Wherever it is believed a chakra center is located, there is an equally important Endocrine Gland in the same location.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <th className="text-left py-3 px-2 font-bold text-primary">Chakra Center</th>
                      <th className="text-left py-3 px-2 font-bold text-primary">Location</th>
                      <th className="text-left py-3 px-2 font-bold text-primary">Endocrine Gland</th>
                      <th className="text-left py-3 px-2 font-bold text-primary">Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Crown</td>
                      <td className="py-3 px-2">Top of Head</td>
                      <td className="py-3 px-2">Pineal Gland</td>
                      <td className="py-3 px-2">Melatonin production, hormone production</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Brow</td>
                      <td className="py-3 px-2">Between Eyebrows</td>
                      <td className="py-3 px-2">Pituitary Gland</td>
                      <td className="py-3 px-2">Regulates other glands, Master gland</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Throat</td>
                      <td className="py-3 px-2">Throat</td>
                      <td className="py-3 px-2">Thyroid Gland</td>
                      <td className="py-3 px-2">Hormone production, metabolism regulation</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Heart</td>
                      <td className="py-3 px-2">Center of Chest</td>
                      <td className="py-3 px-2">Thymus</td>
                      <td className="py-3 px-2">T-Cell maturation, hormone production</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Solar Plexus</td>
                      <td className="py-3 px-2">Upper Abdomen</td>
                      <td className="py-3 px-2">Pancreas</td>
                      <td className="py-3 px-2">Digestive functions, blood sugar regulation</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                      <td className="py-3 px-2">Sacral</td>
                      <td className="py-3 px-2">Lower Abdomen</td>
                      <td className="py-3 px-2">Ovaries/Testes</td>
                      <td className="py-3 px-2">Reproductive functions, hormone production</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Root</td>
                      <td className="py-3 px-2">Base of Spine</td>
                      <td className="py-3 px-2">Adrenal Glands</td>
                      <td className="py-3 px-2">Stress related responses, metabolism</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
                <h3 className="font-bold text-primary mb-4">Key Insight</h3>
                <p className="text-muted-foreground">
                  Whether the Tantric Chakra System is explained through science or belief, the methods promoted via this system are known to resolve related health issues. Ailments have been found to have correlations to imbalances in these centers. This is worth investigating.
                </p>
              </div>
            </div>
          </section>

          {/* Implementation Strategy */}
          <section data-testid="section-implementation">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Building a Health Foundation</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Building a medical foundation from scratch is a challenging goal, but we have clear hints to the directions we are likely to find success in if tested. Logically, we prioritize what has the highest probability of success. We can attempt to expound upon what has been researched before us and attempt to verify the validity of claims from our predecessors.
              </p>
              <p>
                If we fail, we can try again. If we succeed, we all win. Actionable steps can see to our prosperity. The process takes time to obtain confirmation, but at the same time, no story starts at the climax.
              </p>
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary rounded-lg p-8">
                <h3 className="font-bold text-primary mb-3">Our Approach</h3>
                <p className="italic">
                  We start at the beginning, building momentum step by step. Each phase builds upon the previous one, creating a sustainable path toward health innovation and member wellbeing.
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
