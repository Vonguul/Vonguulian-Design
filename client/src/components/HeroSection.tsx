import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4 bg-gradient-to-br from-black via-black/95 to-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-primary"></div>
          <span className="font-serif text-2xl font-bold text-primary">Vonguulian</span>
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
