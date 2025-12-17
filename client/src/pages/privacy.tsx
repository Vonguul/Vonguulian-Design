import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollMemory } from "@/hooks/useScrollMemory";

export default function Privacy() {
  useScrollMemory();
  usePageMeta({
    title: "Privacy Information - The Alignment Zone | Vonguulian Design",
    description: "Privacy Policy for The Alignment Zone mobile application. Learn how we collect, use, and protect your personal data.",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">
            Privacy Information
          </h1>
        </div>
      </div>

      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8" data-testid="section-app-privacy">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
              Privacy Policy for The Alignment Zone
            </h2>
            <p className="text-muted-foreground mb-4">Last updated: December 2025</p>

            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Vonguulian Design ("we," "us," or "our") operates The Alignment Zone mobile application (the "Service").
              </p>
              <p>
                This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">1. Information Collection and Use</h3>
                <p className="mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>

                <h4 className="font-semibold text-primary mb-2">A. Personal Data (Human Design Calculations)</h4>
                <p className="mb-2">
                  To function as a Human Design tool, the App requires specific birth details to generate your BodyGraph and "Operative" profile. We ask you to provide:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Date of Birth</li>
                  <li>Time of Birth</li>
                  <li>Location of Birth (City/Country)</li>
                </ul>
                <p className="mb-6">
                  <strong>How we use this:</strong> This data is used solely to calculate your astrological positions and Human Design chart. This calculation happens locally on your device. We do not sell or share your birth data with third-party advertisers.
                </p>

                <h4 className="font-semibold text-primary mb-2">B. User-Generated Content (Journal & Flux Node)</h4>
                <p className="mb-2">
                  The App allows you to input data related to your daily energy, emotional states, and decision-making ("Journal Entries," "Vibe Node Check-ins," and "Calibration" responses).
                </p>
                <p className="mb-6">
                  <strong>How we use this:</strong> This data is stored to provide you with historical tracking of your alignment and energy levels.
                </p>

                <h4 className="font-semibold text-primary mb-2">C. Neural Lens Data (Text Analysis)</h4>
                <p className="mb-2">
                  The App includes a feature called "Neural Lens" that allows you to share text or links from other applications (e.g., social media, browsers) to The Alignment Zone for analysis.
                </p>
                <p className="mb-6">
                  <strong>How we use this:</strong> Data shared via the Neural Lens is processed to provide alignment insights. This data is processed temporarily for analysis and stored only on your local device.
                </p>

                <h4 className="font-semibold text-primary mb-2">D. Usage Data</h4>
                <p>
                  We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data"). This may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, unique device identifiers, and other diagnostic data.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">2. Service Providers & AI Processing</h3>
                <p className="mb-4">
                  We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, or to assist us in analyzing how our Service is used.
                </p>
                <p className="mb-4">
                  <strong>Artificial Intelligence (AI):</strong> The Service utilizes Artificial Intelligence technologies to analyze text (Neural Lens) and generate scenarios. Data sent to AI providers is anonymized where possible and is used strictly for generating the requested insights.
                </p>
                <p>
                  <strong>Google Play Services:</strong> The App uses Google Play Services which may collect information used to identify you for analytics or advertising services provided by Google.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">3. Data Storage and Security</h3>
                <p className="mb-4">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                </p>
                <p>
                  <strong>Local Storage:</strong> Much of the App's core functionality relies on data stored locally on your device. If you delete the App, this data may be permanently lost.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">4. Children's Privacy</h3>
                <p className="mb-4">
                  Our Service does not address anyone under the age of 13 ("Children").
                </p>
                <p>
                  We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">5. Changes to This Privacy Policy</h3>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                <p>
                  We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">6. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>By email: <a href="mailto:vonguulian@gmail.com" className="text-primary hover:underline">vonguulian@gmail.com</a></li>
                  <li>By visiting our website: <a href="https://vonguulian.com" className="text-primary hover:underline">vonguulian.com</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
