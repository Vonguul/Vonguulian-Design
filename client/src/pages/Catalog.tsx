import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Star } from "lucide-react";
import { Youtube, Instagram, Twitter, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Catalog() {
  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@offbarvonguul", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/offbar1/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/OffBar1", label: "Twitter" },
    { icon: SiTiktok, href: "http://tiktok.com/@offbahrvonguul", label: "TikTok" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const handleExternalLink = (href: string) => {
    if (href !== "#") {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <div className="bg-black dark:bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-page-title">Catalog</h1>
          <p className="text-xl text-muted-foreground">Explore all of our products and services</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Vonguulian Design Section */}
          <section data-testid="section-vonguulian-design">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Vonguulian Design</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cheatsheets */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Cheatsheets</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive guides to accelerate your learning and personal development. Available in digital formats for immediate access.
                </p>
                <Link href="/basic-cheatsheets">
                  <Button variant="default" data-testid="button-view-cheatsheets">
                    View Cheatsheets
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Consultation Services */}
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Consultation Services</h3>
                <p className="text-muted-foreground mb-6">
                  One-on-one sessions designed to align your goals with your vision. Includes Blueprint Consultation and Alignment Coaching.
                </p>
                <Link href="/#contact">
                  <Button variant="outline" data-testid="button-book-consultation">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Social Media Section */}
          <section data-testid="section-social-media" className="border-t border-black/10 dark:border-white/10 pt-20">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Connect With Us</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Follow us across social media platforms to stay updated on new offerings, insights, and community updates.
            </p>
            <div className="grid md:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() => handleExternalLink(social.href)}
                    className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-center hover-elevate active-elevate-2 transition-all"
                    data-testid={`button-social-catalog-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <span className="font-semibold text-primary">{social.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Apparel Section */}
          <section data-testid="section-apparel" className="border-t border-black/10 dark:border-white/10 pt-20">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Apparel</h2>
            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Vonguulian Branded Wear</h3>
              <p className="text-muted-foreground mb-6">
                Coming Soon. Wear your commitment to Vonguulian values. Premium quality apparel featuring our distinctive branding and philosophy.
              </p>
              <Button 
                variant="outline" 
                disabled 
                data-testid="button-apparel-shop"
              >
                Shop Coming Soon
              </Button>
            </div>
          </section>

          {/* Education Section */}
          <section data-testid="section-education" className="border-t border-black/10 dark:border-white/10 pt-20">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Education</h2>
            <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Tutoring Services</h3>
              <p className="text-muted-foreground mb-6">
                Personalized K-12 tutoring and specialized guidance to help students excel academically and develop critical thinking skills aligned with Vonguulian principles.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Star className="w-5 h-5" />
                <span>Coming Soon</span>
              </div>
            </div>
          </section>

          {/* Financial Services Section */}
          <section data-testid="section-financial" className="border-t border-black/10 dark:border-white/10 pt-20">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Financial Services</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Empowering financial independence and wealth building within the Vonguulian community. Our financial services help members build sustainable prosperity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Investment Opportunities</h3>
                <p className="text-muted-foreground mb-6">
                  Participate in Vonguulian businesses and ventures. Share in the prosperity of our "mines" as they grow and generate returns for our members.
                </p>
                <Link href="/#contact">
                  <Button variant="outline" data-testid="button-investment-info">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Financial Guidance</h3>
                <p className="text-muted-foreground mb-6">
                  Access expert advice on building wealth, managing resources, and achieving financial freedom aligned with Vonguulian values.
                </p>
                <Link href="/#contact">
                  <Button variant="outline" data-testid="button-financial-guidance">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Affiliate Section */}
          <section data-testid="section-affiliates" className="border-t border-black/10 dark:border-white/10 pt-20">
            <h2 className="font-serif text-4xl font-bold mb-8 text-primary">Affiliated Partners</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              We partner with trusted organizations and services that align with Vonguulian values. These partnerships provide additional value to our community.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">VitalChek</h3>
                <p className="text-muted-foreground mb-6">
                  Birth time verification and vital statistics services. Essential for accurate Human Design calculations and personal insight.
                </p>
                <a href="https://www.vitalchek.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" data-testid="button-vitalchek">
                    Visit VitalChek
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="bg-white dark:bg-card border border-black/10 dark:border-white/10 rounded-lg p-8 hover-elevate">
                <h3 className="font-serif text-2xl font-bold mb-4 text-primary">More Partners Coming</h3>
                <p className="text-muted-foreground mb-6">
                  We are continuously building partnerships with organizations that share our vision for progress, integrity, and community empowerment.
                </p>
                <Link href="/#contact">
                  <Button variant="outline" data-testid="button-partnership-inquiry">
                    Inquire About Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="border-t border-black/10 dark:border-white/10 pt-20 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose a product or service above, connect with us on social media, or reach out to learn more about opportunities within Vonguul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="default" size="lg" data-testid="button-back-to-home">
                  Back to Home
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
