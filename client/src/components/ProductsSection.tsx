import ProductCard from "./ProductCard";
import { FileText, Palette } from "lucide-react";
import symbolsImage from "@assets/Vonguulian-Keys_1763815859892.png";

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 px-4 bg-white dark:bg-black relative">
      <div className="absolute top-12 right-8 opacity-10 hidden lg:block">
        <img 
          src={symbolsImage} 
          alt="" 
          className="w-32 h-32 object-contain"
          loading="lazy"
          aria-hidden="true"
          data-testid="img-decorative-symbols"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-4"
          data-testid="text-products-title"
        >
          Digital Products
        </h2>
        <p 
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          data-testid="text-products-subtitle"
        >
          Discover our curated collection of Human Design resources
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard
            icon={FileText}
            title="Basic Cheatsheet"
            description="Ideal for individuals who want a foundational understanding of the Human Design System"
            price="$40"
            purchaseLink="/basic-cheatsheets"
          />
          <ProductCard
            icon={Palette}
            title="Custom Cheatsheet"
            description="Ideal for individuals who want to focus on their own personal development *Purchase before Blueprint Consultation"
            price="$80"
            purchaseLink="#contact"
          />
        </div>
      </div>
    </section>
  );
}
