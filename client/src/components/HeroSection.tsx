import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-secondary px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            data-testid="button-book-consultation"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
