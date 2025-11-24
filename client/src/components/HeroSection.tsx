import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/gemini-2.5-flash-image_Create_a_visually_pleasing_picture_to_be_used_as_a_backdrop_for_a_website_that_c-0_1763840509780.jpg";
import logo from "@assets/Vonguulian Elite LogoClean_1763815831683.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative inline-block mx-auto mb-6">
          <img 
            src={logo} 
            alt="Vonguulian" 
            className="w-64 md:w-80 mx-auto opacity-95"
            data-testid="img-logo"
          />
          <div className="absolute inset-x-0 top-1/2 translate-y-[35px] flex justify-center">
            <Link href="/about">
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-primary text-primary bg-black/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                data-testid="button-dive-deeper"
              >
                Dive Deeper
              </Button>
            </Link>
          </div>
        </div>
        <h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          Vonguulian Design
        </h1>
        <p 
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          data-testid="text-hero-tagline"
        >
          Transform your life with our curated digital products and expert consultation services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap mt-[37px] mb-[37px]">
          <Button 
            onClick={() => scrollToSection('products')}
            variant="default"
            size="lg"
            className="rounded-full px-8"
            data-testid="button-explore-products"
          >
            Explore Products
          </Button>
          <Button 
            onClick={() => scrollToSection('consultation')}
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-2 border-primary text-primary bg-black/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
            data-testid="button-book-consultation"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
