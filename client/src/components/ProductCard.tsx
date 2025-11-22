import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  purchaseLink?: string;
}

export default function ProductCard({ icon: Icon, title, description, price, purchaseLink = "#" }: ProductCardProps) {
  const isInternalLink = purchaseLink?.startsWith("/");
  const isHashLink = purchaseLink?.startsWith("#");

  const handlePurchaseClick = () => {
    console.log(`Purchase clicked for ${title}`);
    if (isHashLink) {
      const element = document.querySelector(purchaseLink);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (purchaseLink !== "#" && !isInternalLink) {
      window.open(purchaseLink, '_blank');
    }
  };

  return (
    <Card 
      className="hover-elevate transition-all duration-300 hover:translate-y-[-4px] border-primary"
      data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="w-10 h-10 text-primary" data-testid={`icon-${title.toLowerCase().replace(/\s+/g, '-')}`} />
        </div>
        <CardTitle className="font-serif text-2xl" data-testid={`text-product-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6" data-testid={`text-product-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <p className="text-3xl font-bold text-primary" data-testid={`text-product-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {price}
        </p>
      </CardContent>
      <CardFooter className="-mb-2.5">
        {isInternalLink ? (
          <Link href={purchaseLink} className="w-full">
            <Button 
              className="w-full rounded-full"
              variant="secondary"
              data-testid={`button-purchase-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              View Options
            </Button>
          </Link>
        ) : (
          <Button 
            onClick={handlePurchaseClick}
            className="w-full rounded-full"
            variant="secondary"
            data-testid={`button-purchase-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {isHashLink ? "Get Started" : "Purchase Now"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
